<template>
  <div id="container">
    <div id="header-block" class="container--block">
      <h3 class="title">CHOOSE AN ITEM</h3>
    </div>
    <div id="buttons-block" class="container--block">
      <GearTile :img="gearInfo.image" :size="'200px'" />
      <q-btn
        color="white"
        size="large"
        id="trade-btn"
        class="q-mb-md q-pa-lg text-black"
        style="font-weight: 800"
        @click="goToTrade()"
        >TRADE</q-btn
      >
      <q-btn
        color="white"
        size="large"
        id="donate-btn"
        class="q-mb-md q-pa-lg text-black"
        style="font-weight: 800"
        @click="goToDonate()"
        >DONATE</q-btn
      >
    </div>
    <div id="footer-block" class="container--block">
      <q-btn
        color="black"
        size="large"
        class="q-mb-md q-px-lg text-white"
        style="font-weight: 800"
        @click="backToSelect()"
        >BACK</q-btn
      >
    </div>
  </div>
</template>

<script setup>
import GearTile from "../components/GearTile.vue";

defineOptions({
  name: "TradeOrDonatePage",
});

defineProps(["gearInfo", "size"]);

const emit = defineEmits(["returnToSelect", "goToDonate", "goToTrade"]);

const backToSelect = () => {
  emit("returnToSelect");
};

const goToDonate = () => {
  emit("goToDonate");
};

const goToTrade = () => {
  emit("goToTrade");
};
</script>

<style scoped>
.container--block {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

#header-block {
  height: 10vh;
}

.title {
  font-weight: 800;
  font-size: 40px;
  color: var(--white);
}

#buttons-block {
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

#footer-block {
  height: 10vh;
}

#trade-btn,
#donate-btn {
  width: 60vw;
}
</style>
