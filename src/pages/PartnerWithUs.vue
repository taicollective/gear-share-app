<template>
  <div id="layout-view">
    <BackgroundEl />
    <div id="view--content" class="q-pt-lg">
      <h1 class="title">PARTNER WITH<br />GEARSHARE</h1>

      <q-card class="my-card q-ma-lg">
        <q-card-section
          class="bg-black text-white flex justify-between flex-center"
        >
          <div class="text-h5">About Gearshare</div>
          <q-img
            src="../assets/gear-share-logo.png"
            class="logo-sm"
            style="width: 80px; height: 80px"
          />
        </q-card-section>

        <q-separator />

        <q-card-section>
          <p style="font-size: 1rem">
            Gearshare empowers young athletes by putting the gear straight into
            their hands so they can pursue their dreams and ambitions
          </p>
        </q-card-section>
      </q-card>

      <h1 class="title" style="font-size: 2rem; padding: 0px; margin: 0px">
        WHY JOIN OUR PARTNER PROGRAM
      </h1>
      <h3 class="title q-pa-md" style="font-size: 1.2rem">
        It’s an easy way to help disadvantage kids so they can achieve their
        goals
      </h3>

      <q-btn
        color="black"
        size="lg"
        icon-right="paid"
        class="q-mx-lg q-py-lg q-mt-md"
      >
        <p class="q-pr-md">DONATE MONEY</p>
      </q-btn>
      <q-btn
        color="black"
        size="lg"
        icon-right="sports_basketball"
        class="q-mx-lg q-py-lg q-mt-md"
      >
        <p class="q-pr-md">DONATE GEAR</p>
      </q-btn>
      <q-btn
        color="black"
        size="lg"
        style="font-weight: 800"
        to="/home"
        class="q-mx-xl q-py-sm q-mt-md"
      >
        BACK
      </q-btn>
    </div>
  </div>
</template>

<script setup>
import BackgroundEl from "../components/BackgroundEl.vue";

import { RouterLink } from "vue-router";

defineOptions({
  name: "PartnerWithUs",
});
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
</style>
