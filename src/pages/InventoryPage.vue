<template>
  <!-- List of gear item cards -->
  <div class="content">
    <q-header class="bg-transparent text-white">
      <q-toolbar>
        <q-toolbar-title>
          <h1 class="title">MY INVENTORY</h1>
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <!-- search box -->
    <q-input v-model="search" bg-color="white" class="q-ma-md input-text">
      <template v-slot:prepend>
        <q-icon name="search" class="q-ml-sm" />
      </template>
    </q-input>

    <!-- filter chips -->
    <div class="q-ml-sm q-mb-sm">
      <q-chip
        size="sm"
        color="orange"
        text-color="white"
        @click="filterByStatus('renting')"
      >
        RENTING
      </q-chip>
      <q-chip
        @click="filterByStatus('rented')"
        size="sm"
        color="grey"
        text-color="white"
        >RENTED</q-chip
      >
      <q-chip
        @click="filterByStatus('available')"
        size="sm"
        color="green"
        text-color="white"
        >AVAIALBLE TO TRADE OR DONATE</q-chip
      >
    </div>

    <div class="gear-list">
      <GearItem
        itemStyle="3"
        v-for="gear in filteredGearItems"
        :key="gear.id"
        :gearInfo="gear"
        @itemClicked="itemClicked"
      />
    </div>

    <q-footer class="bg-transparent text-white">
      <q-toolbar>
        <q-btn
          to="/home"
          color="black"
          size="x-large"
          class="q-mb-md q-px-lg text-white"
          style="font-weight: 800"
          >BACK</q-btn
        >
        <q-btn
          to="/add"
          color="white"
          size="x-large"
          class="q-mb-md q-px-lg text-black q-ml-md"
          style="font-weight: 800"
          >+ ADD</q-btn
        >
      </q-toolbar>
    </q-footer>

    <!-- GEAR CLICKED DIALOG -->
    <q-dialog v-model="showGearDialog">
      <q-card class="my-card">
        <q-img :src="gearItemSelected.image" />

        <q-card-section>
          <q-chip
            fab
            :color="getPillColor(gearItemSelected.status)"
            class="absolute"
            style="top: 0; right: 12px; transform: translateY(-50%)"
          />

          <div class="row no-wrap items-center">
            <div class="col text-h6 ellipsis">{{ gearItemSelected.name }}</div>
            <div
              class="col-auto text-grey text-caption q-pt-md row no-wrap items-center"
            ></div>
          </div>

          <q-rating
            :model-value="gearItemSelected.condition"
            :max="5"
            size="32px"
          />
        </q-card-section>

        <q-card-section class="q-pt-none">
          <div class="text-subtitle1">
            ${{ gearItemSelected.price }} per month
          </div>
          <!-- <div class="text-caption text-grey">
            description description description description 
          </div> -->
        </q-card-section>

        <q-separator />

        <q-card-actions align="right">
          <q-btn
            v-close-popup
            color="green"
            icon="edit"
            label="Edit"
            @click="navigateToEdit"
          />
          <q-btn
            @click="deleteItem"
            v-close-popup
            color="red"
            icon="event"
            label="Delete"
          />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</template>

<script setup>
import GearItem from "../components/GearItem.vue";

import { onMounted, ref, computed } from "vue";
import { db } from "../firebase";
import { collection, getDocs, doc, deleteDoc } from "firebase/firestore";
import { useRouter } from "vue-router";
import { useQuasar } from "quasar";
const $q = useQuasar();

const gearItems = ref([]);
const search = ref("");
const showGearDialog = ref("false");
const gearItemSelected = ref({});

const router = useRouter();

const filteredGearItems = computed(() => {
  if (!search.value) {
    return gearItems.value;
  }
  return gearItems.value.filter((gear) =>
    gear.name.toLowerCase().includes(search.value.toLowerCase())
  );
});

// function to filter gearItems by status
const filterByStatus = (status) => {
  console.log("filtering by ", status);
  if (status === "renting") {
    gearItems.value = gearItems.value.filter(
      (gear) => gear.status === "renting"
    );
  } else if (status === "rented") {
    gearItems.value = gearItems.value.filter(
      (gear) => gear.status === "rented"
    );
  } else if (status === "available") {
    gearItems.value = gearItems.value.filter(
      (gear) => gear.status === "available"
    );
  }
};

// gear item clicked
const itemClicked = (payload) => {
  showGearDialog.value = true;
  gearItemSelected.value = payload;
  console.log("gear item selected is:", gearItemSelected.value);
};

const navigateToEdit = () => {
  console.log("navigating to edit screen");
  router.push({
    path: "/edit",
    query: { gearInfo: JSON.stringify(gearItemSelected.value) },
  });
};

const getPillColor = (status) => {
  switch (status) {
    case "rented":
      return "var(--theme-5)";
    case "renting":
      return "var(--orange)";
    case "available":
      return "var(--green)";
    default:
      return "available";
  }
};

onMounted(async () => {
  // get collection gears from firestore
  const querySnapshot = await getDocs(collection(db, "gears"));
  gearItems.value = querySnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
});
// DELETE
async function deleteItem() {
  try {
    // Get a reference to the document
    const docRef = doc(db, "gears", gearItemSelected.value.id);

    // Delete the document
    await deleteDoc(docRef);

    filteredGearItems.value = filteredGearItems.value.filter(
      (item) => item.id !== gearItemSelected.value.id
    );

    $q.notify({
      color: "positive",
      message: "Item deleted successfully!",
    });
    router.push("/inventory");
  } catch (error) {
    $q.notify({
      color: "negative",
      message: "Error deleting Gear item: " + error,
    });
  }
}
</script>

<style scoped>
.title {
  font-weight: 800;
  font-size: 40px;
}

.gear-list {
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
}

.input-text {
  font-size: x-large;
  font-weight: 600;
}

.my-card {
  width: 80%;
}
</style>
