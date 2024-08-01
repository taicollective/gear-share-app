<template>
  <div id="layout-view">
    <BackgroundEl />
    <div id="view--content">
      <div class="content">
        <div id="content--logo">
          <img src="../assets/gear-share-logo.png" class="logo-sm" />
        </div>
        <h5 class="inter-bold text-white">
          Welcome, {{ user.fullName.split(" ")[0] }}!
        </h5>
      </div>
      <div class="nav-buttons-wrapper">
        <RouterLink to="/trade-and-donate" class="link">
          <button class="btn-l">
            <h5 class="inter-bold">TRADE</h5>
            <p class="inter-bold">OR</p>
            <h5 class="inter-bold">DONATE GEAR</h5>
          </button>
        </RouterLink>
        <RouterLink to="/renting" class="link">
          <button class="btn-l">
            <h5 class="inter-bold">RENT GEAR</h5>
          </button>
        </RouterLink>
        <RouterLink to="/partner-with-us" class="link">
          <button class="btn-l">
            <h5 class="inter-bold">PARTNER WITH US</h5>
          </button>
        </RouterLink>
        <RouterLink to="/inventory" class="link">
          <button class="btn-l">
            <h5 class="inter-bold">YOUR INVENTORY</h5>
          </button>
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<script setup>
import BackgroundEl from "../components/BackgroundEl.vue";

import { RouterLink } from "vue-router";

import { computed } from "vue";
import { useStore } from "vuex";
const store = useStore();

defineOptions({
  name: "HomeLayout",
});

const user = computed(() => {
  return store.state.user;
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
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 9fr;
  padding: calc(var(--padding) * 2);
}

.nav-buttons-wrapper {
  display: grid;
  /* grid-template-rows: repeat(1fr, 4); */
  /* grid-template-rows: 2fr 2fr 2fr 1fr; */
  justify-items: center;
  align-items: center;
  grid-gap: 5px;
  height: 100%;
}

.link {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
}

.content {
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
  aspect-ratio: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

#user {
  height: 50%;
  aspect-ratio: 1 / 1;
  background-color: var(--theme-8);
  border-radius: 50%;
  margin-bottom: var(--margin);
}

.large-text {
  font-size: 50px;
}

.small-text {
  font-size: 25px;
}
</style>
