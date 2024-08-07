<template>
  <div class="content">
    <div id="header-block">
      <h3 class="title">{{ titleMessage }}</h3>
      <p class="description">
        Are you sure you want to {{ getVerb }} this gear item?
      </p>
    </div>
    <div id="body-block">
      <div id="rating-section">
        <GearTile size="90%" :img="gearInfo.image" />
        <div id="conditions">
          <p class="condition-subtitle">NAME:</p>
          <p class="condition-info">{{ gearInfo.name }}</p>
          <p class="condition-subtitle">CONDITION:</p>
          <q-rating
            class="condition-info"
            icon-selected="star"
            icon="star_border"
            :model-value="gearInfo.condition"
            color="white"
            readonly
          />
        </div>
      </div>
      <div id="location-section">
        <h6 class="subtitle">LOCATION:</h6>
        <div id="input-container">
          <input type="text" id="location" v-model="location" />
          <q-icon name="place" />
        </div>
      </div>
      <div id="deliver-section">
        <h6
          v-if="isNotRentingRoute"
          id="drop-off"
          class="deliver-subtitle"
          @click="switchDeliveryChoice('drop-off')"
          :style="{ color: changeColor('drop-off') }"
        >
          DROP OFF
        </h6>
        <h6
          id="pick-up"
          class="deliver-subtitle"
          @click="switchDeliveryChoice('pick-up')"
          :style="{ color: changeColor('pick-up') }"
        >
          PICK UP
        </h6>
      </div>
    </div>
    <div id="footer-block">
      <q-btn
        color="white"
        size="x-large"
        class="q-mb-md q-px-lg q-py-lg text-black"
        style="font-weight: 800"
        @click="showConfirmMessage()"
        >CONFIRM</q-btn
      >
      <q-btn
        color="black"
        size="x-large"
        class="q-mb-md q-px-lg q-py-lg text-white"
        style="font-weight: 800"
        @click="backToSelect()"
        >BACK</q-btn
      >
    </div>
    <div id="message-block" v-if="msg">
      <div @click="returnHome()" id="overlay"></div>
      <div @click="returnHome()" id="message-card">
        <h3>{{ confirmMessage }}</h3>
      </div>
    </div>
  </div>
</template>

<script setup>
import { db } from "src/firebase";
import { ref, onMounted, computed } from "vue";
import { useRoute, useRouter } from "vue-router";
import { doc } from "firebase/firestore";
import GearTile from "../components/GearTile.vue";
import { updateDoc } from "firebase/firestore";

const route = useRoute();
const router = useRouter();

const isNotRentingRoute = computed(() => route.path !== "/renting");

import { useQuasar } from "quasar";
const $q = useQuasar();

defineOptions({
  name: "ItemConfirmPage",
});

const emit = defineEmits(["returnToSelect"]);
const props = defineProps([
  "titleMessage", // = Renting or Donate
  "gearInfo",
  "confirmMessage",
  "statusUpdate",
]);

const msg = ref(false);
const location = ref("");
const deliveryChoice = ref("drop-off");

onMounted(() => {
  console.log(props.gearInfo);
  if (props.gearInfo.location && props.gearInfo) {
    location.value = props.gearInfo.location;
  }
});

const changeColor = (choice) => {
  if (choice === deliveryChoice.value) {
    return "var(--yellow)";
  } else {
    return "var(--white)";
  }
};

const switchDeliveryChoice = (choice) => {
  deliveryChoice.value = choice;
};

const showConfirmMessage = async () => {
  msg.value = true;

  console.log(props.gearInfo.id);
  const gearDocRef = doc(db, "gears", props.gearInfo.id);

  try {
    await updateDoc(gearDocRef, {
      status: props.statusUpdate,
      location: location.value,
    });
    $q.notify({
      color: "positive",
      message: "Successfully " + getVerbPastTense.value + " gear item",
    });
    console.log("Document successfully updated");
  } catch (error) {
    console.error("Error updating document:", error);
  }
};

const getVerbPastTense = computed(() => {
  if (props.statusUpdate === "rented") {
    return "rented";
  } else {
    return "donated";
  }
});
const getVerb = computed(() => {
  if (props.statusUpdate === "rented") {
    return "rent";
  } else {
    return "donate";
  }
});

const backToSelect = () => {
  emit("returnToSelect");
};

const returnHome = () => {
  router.push("/home");
};
</script>

<style scoped>
.content {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: start;
  align-items: center;
  flex-direction: column;
  position: relative;
}

#header-block {
  width: 100vw;
  /* height: 10vh; */
  /* display: flex;
  justify-content: center;
  align-items: center; */
  text-align: center;
}

.title {
  font-weight: 800;
  font-size: 40px;
  color: var(--white);
  text-transform: uppercase;
}

.description {
  color: white;
  font-size: 20px;
  font-weight: 600;
  text-align: center;
}

.subtitle {
  font-weight: 800;
  font-size: 20px;
  color: var(--white);
}

#body-block {
  width: 100vw;
  height: 50vh;
  display: flex;

  /* justify-content: center; */
  /* align-items: center; */
  flex-direction: column;
}

#rating-section {
  width: 100%;
  height: auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  align-items: center;
  padding-top: 10px;
  padding-bottom: 10px;
}

#conditions {
  width: 100%;
  height: auto;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  color: var(--white);
}

.condition-subtitle {
  font-size: 20px;
  font-weight: 900;
}

.condition-info {
  font-size: 20px;
  margin-bottom: 10px;
  font-weight: 500;
}

#location-section {
  height: auto;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-top: 10px;
  padding-bottom: 10px;
}

#location {
  width: 90%;
}

#input-container {
  width: 90vw;
  height: auto;
  padding-left: 12.5px;
  padding-right: 12.5px;
  background-color: var(--white);
  border-radius: var(--radius);
}

#location {
  border-radius: 0;
  box-shadow: none;
  margin-left: 5px;
  margin-right: 5px;
}

#deliver-section {
  width: 100vw;
  height: auto;
  padding-top: 10px;
  padding-bottom: 10px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
  align-items: center;
}

#drop-off,
#pick-up {
  font-weight: 900;
  color: var(--white);
}

#footer-block {
  /* height: 10vh; */
  display: flex;
  flex-direction: column;
}

#message-block {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
}

#overlay {
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
}

#message-card {
  position: absolute;
  border-radius: var(--radius);
  background-color: var(--white);
  width: 80vw;
  aspect-ratio: 1 / 1;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  box-shadow: 0px 0px 10px var(--black);
}

#message-card > h3 {
  color: var(--black);
  font-weight: 600;
}
</style>
