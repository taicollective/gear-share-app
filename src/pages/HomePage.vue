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
            <p class="inter-bold">&</p>
            <h5 class="inter-bold">DONATE</h5>
          </button>
        </RouterLink>
        <button class="btn-l">
          <h5 class="inter-bold">RENTING</h5>
        </button>
        <RouterLink to="/partner-with-us" class="link">
          <button class="btn-l">
            <h5 class="inter-bold">PARTNER WITH US</h5>
          </button>
        </RouterLink>
        <RouterLink to="/inventory" class="link">
          <button class="btn-l">
            <h5 class="inter-bold">INVENTORY</h5>
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
  grid-template-rows: 2fr 2fr 2fr 2fr 1fr;
  grid-gap: 5px;
  padding: calc(var(--padding) * 2);
}

.nav-buttons-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 100%;
}

.content {
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
  aspect-ratio: 0;
}

.btn-l {
  padding: 30px 0px;
  margin: 20px 0px;
}

.content:nth-child(1) {
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
