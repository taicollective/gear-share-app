<template>
  <div id="layout-view">
    <BackgroundEl />
    <div id="view--content" class="q-pt-lg">
      <h1 class="title">HOWDY<br />PARTNER</h1>

      <h3 class="title q-pa-md" style="font-size: 1.2rem">
        Send us a message to let us know you would like to help
      </h3>

      <!-- NAME -->
      <label class="email-label text-white q-ml-md">NAME:</label>
      <q-input
        v-model="donateEmail.name"
        bg-color="white"
        class="q-ma-md input-text"
      />

      <!-- EMAIL -->
      <label class="email-label text-white q-ml-md">EMAIL:</label>
      <q-input
        v-model="donateEmail.email"
        bg-color="white"
        class="q-ma-md input-text"
      />

      <!-- PHONE -->
      <label class="email-label text-white q-ml-md">PHONE:</label>
      <q-input
        v-model="donateEmail.phone"
        bg-color="white"
        class="q-ma-md input-text"
      />

      <!-- MESSAGE -->
      <label class="email-label text-white q-ml-md">MESSAGE:</label>
      <q-input
        v-model="donateEmail.message"
        type="textarea"
        bg-color="white"
        class="q-ma-md input-text"
      />

      <div class="row">
        <!-- SEMD -->
        <q-btn
          color="white"
          text-color="black"
          label="SEND"
          size="lg"
          style="font-weight: 800"
          class="q-ml-md"
          icon-right="send"
          @click="sendEmail"
        />
        <!-- BACK -->
        <q-btn
          color="black"
          size="lg"
          style="font-weight: 800"
          to="/home"
          class="q-ml-md"
        >
          BACK
        </q-btn>
      </div>
    </div>
  </div>
</template>

<script setup>
import BackgroundEl from "../components/BackgroundEl.vue";
import { ref } from "vue";
import emailjs from "@emailjs/browser";
import secrets from "../secrets";
import { useQuasar } from "quasar";
const $q = useQuasar();

defineOptions({
  name: "DonateEmail",
});

// Define props
const props = defineProps({
  type: {
    type: String,
  },
});

const donationType = ref(null);
donationType.value = props.type;

const donateEmail = ref({
  name: "",
  email: "",
  phone: "",
  message:
    "Kia ora Gearshare, I would like to donate some " +
    donationType.value +
    " to your mission.",
});

emailjs.init({ publicKey: "Qp7qCbWTQmfEyp8hq" });

const sendEmail = () => {
  emailjs
    .send(
      secrets.serviceId,
      secrets.templateId,
      {
        name: donateEmail.value.name,
        email: donateEmail.value.email,
        phone: donateEmail.value.phone,
        message: donateEmail.value.message,
      }
      // {
      //   publicKey: "Qp7qCbWTQmfEyp8hq",
      // }
    )
    .then(
      (response) => {
        console.log("SUCCESS!", response.status, response.text);
        $q.notify({
          color: "positive",
          message: "Email sent successfully!",
        });
      },
      (error) => {
        console.log("FAILED...", error);
        $q.notify({
          color: "negative",
          message: "Failed to send email.",
        });
      }
    );
};
</script>

<style scoped>
h5 {
  font-size: 20px;
}
#layout-view {
  width: 100vw;
  height: 100vh;
  position: relative;
}

#view--content {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  /* align-items: center;
  justify-content: space-around; */
}

.title {
  font-weight: 800;
  font-size: 45px;
  color: white;
  line-height: 1.2;
  text-align: center;
}

.email-label,
.input-text {
  font-size: x-large;
  font-weight: 600;
}
</style>
