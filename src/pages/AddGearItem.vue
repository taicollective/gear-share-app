<template>
  <div class="content">
    <q-header class="bg-transparent text-white">
      <q-toolbar>
        <q-toolbar-title>
          <h1 class="title">ADD NEW GEAR</h1>
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <div class="new-gear-item">
      <!--===== IMAGE =====-->
      <label class="new-gear-label text-white q-ml-md">Photo:</label>

      <div class="row">
        <div class="col">
          <q-btn
            @click="testclick"
            color="black"
            icon="add_a_photo"
            stack
            glossy
            size="xl"
            label="Upload"
            class="q-mx-md"
          ></q-btn>
          <q-file
            ref="fileInput"
            @input="handleFileChange"
            accept="image/*"
            bg-color="white"
            class="q-ma-md"
            style="display: none"
          />
        </div>
        <div class="col-7">
          <q-img
            :src="newGearItem.image"
            spinner-color="white"
            style="height: 200px; max-width: 200px; border-radius: 10px"
          />
        </div>
      </div>
      <!--=====  NAME =====-->
      <label class="new-gear-label text-white q-ml-md">Gear:</label>
      <q-input
        v-model="newGearItem.name"
        bg-color="white"
        class="q-ma-md input-text"
      />
      <!--===== CONDITION =====-->
      <label class="new-gear-label text-white q-ml-md">Condition:</label>
      <br />
      <q-rating
        v-model="newGearItem.condition"
        size="3.5em"
        color="amber"
        icon="star_border"
        icon-selected="star"
        class="q-mx-md q-mb-md"
      />
      <br />
      <!--===== PRICE =====-->
      <label class="new-gear-label text-white q-ml-md">Price:</label>
      <q-input
        v-model.number="newGearItem.price"
        type="number"
        bg-color="white"
        class="q-ma-md input-text"
      />
    </div>

    <q-footer class="bg-transparent text-white">
      <q-toolbar>
        <q-btn
          color="black"
          size="x-large"
          class="q-mb-md q-px-lg text-white"
          style="font-weight: 800"
          to="/inventory"
          >BACK</q-btn
        >
        <q-btn
          @click="saveNewItem"
          color="white"
          size="x-large"
          class="q-mb-md q-px-lg text-black q-ml-md"
          style="font-weight: 800"
          :disabled="editMode && !isChanged"
          >SAVE</q-btn
        >
      </q-toolbar>
    </q-footer>

    <!-- Add loadig spinner to parent -->
    <q-inner-loading
      :showing="loading"
      size="xl"
      color="orange"
      label="Please wait..."
      label-class="text-orange"
      label-style="font-size: 3em; font-weight: 800"
      :dark="true"
    />
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from "vue";
import { useQuasar } from "quasar";
import { db, storage } from "../firebase";
import {
  ref as storageRef,
  uploadBytes,
  getDownloadURL,
} from "firebase/storage";
import { collection, addDoc, updateDoc, doc } from "firebase/firestore";
import { useRouter } from "vue-router";

const $q = useQuasar();

// Define props
const props = defineProps({
  gearInfoProp: {
    type: String,
  },
});

const gearInfo = ref(null);

if (props.gearInfoProp) {
  gearInfo.value = JSON.parse(props.gearInfoProp);
  gearInfo.value.condition = Number(gearInfo.value.condition);
  gearInfo.value.price = Number(gearInfo.value.price);
  console.log("gear info after being propped in", gearInfo.value);
}

const newGearItem = ref({
  name: "",
  condition: 0,
  price: 0,
  image: null,
  location: null,
  status: "available",
});

onMounted(async () => {
  if (gearInfo.value) {
    editMode.value = true;
    newGearItem.value = { ...gearInfo.value };
  }
});

const isChanged = computed(() => {
  const isChanged =
    JSON.stringify(newGearItem.value) !== JSON.stringify(gearInfo.value);
  return isChanged;
});

const fileInput = ref(null);
const loading = ref(false);
const editMode = ref(false);
const router = useRouter();

const testclick = () => {
  fileInput.value.pickFiles();
};

const handleFileChange = async (event) => {
  loading.value = true;
  const file = event.target.files[0];
  if (!file) return;
  const imageRef = storageRef(storage, `gear-images/${file.name}`);
  try {
    const snapshot = await uploadBytes(imageRef, file);
    newGearItem.value.image = await getDownloadURL(snapshot.ref);
  } catch (error) {
    $q.notify({
      color: "negative",
      message: "Error saving the image.",
    });
  }
  loading.value = false;
};

const saveNewItem = async () => {
  loading.value = true;

  // EDIT
  if (editMode.value) {
    try {
      // Get a reference to the document
      const docRef = doc(db, "gears", newGearItem.value.id);

      // Update the document
      await updateDoc(docRef, newGearItem.value);

      $q.notify({
        color: "positive",
        message: "Item updated successfully!",
      });
      router.push("/inventory");
    } catch (error) {
      $q.notify({
        color: "negative",
        message: "Error saving Gear item:" + error,
      });
    }
  }

  // SAVE
  else {
    if (!newGearItem.value.image) {
      $q.notify({
        color: "negative",
        message: "Please select an image.",
      });
      loading.value = false;
      return;
    }

    try {
      const newItem = { ...newGearItem.value };
      console.log("new item to save: ", newItem);
      console.log("ref: ", collection(db, "gears"));
      await addDoc(collection(db, "gears"), newItem);
      $q.notify({
        color: "positive",
        message: "Item saved successfully!",
      });
      router.push("/inventory");
    } catch (error) {
      $q.notify({
        color: "negative",
        message: "Error saving Gear item.",
      });
    }
  }

  loading.value = false;
};
</script>

<style scoped>
.title {
  font-weight: 800;
  font-size: 40px;
}

.new-gear-label {
  font-size: x-large;
  font-weight: 600;
}

.input-text {
  font-size: x-large;
  font-weight: 600;
}
</style>

<style>
.q-field__native {
  padding: 0px 20px;
}
</style>
