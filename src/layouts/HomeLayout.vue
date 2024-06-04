<template>
    <div id="layout-view">
        <div id="basketball-court"></div>
        <div id="orange-gradient"></div>
        <div id="black-overlay"></div>
        <div id="view--content">
          <button class="btn-l content">
            <h6 class="large-text inter-bold">TRADE</h6>
            <p class="small-text inter-bold">&</p>
            <h6 class="large-text inter-bold">DONATE</h6>
          </button>
          <button class="btn-l content">
            <h6 class="large-text inter-bold">RENTING</h6>
          </button>
          <button class="btn-l content">
            <h6 class="large-text inter-bold">PARTNER</h6>
            <p class="small-text inter-bold">WITH</p>
            <h6 class="large-text inter-bold">US</h6>
          </button>
          <button class="btn-l content">INVENTORY</button>
        </div>
    </div>
</template>

<script setup>
defineOptions({
  name: 'HomeLayout.vue'
})
</script>

<style scoped>

#layout-view {
  width: 100vw;
  height: 100vh;
  position: relative;
}

#basketball-court, #black-overlay, #orange-gradient {
  width: 100vw;
  height: 100vh;
  position: absolute;
  z-index: -1;
}

#basketball-court {
  background-image: url("../assets/red-basketball-court.png");
  background-position: center;
  background-size: cover;
  z-index: -1;
}

#orange-gradient {
  background: linear-gradient(0deg, rgba(255,92,0,0) 0%, rgba(255,92,0,0.6) 100%);
}

#black-overlay {
  background-color: rgba(0, 0, 0, 0.2)
}

#view--content {
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 3fr 3fr 3fr 1.5fr;
  grid-gap: calc(var(--margin) * 2);
  padding: calc(var(--padding) * 2);
}

.content {
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
  aspect-ratio: 0;;
}

.large-text {
  font-size: 50px;
}

.small-text {
  font-size: 25px;
}

</style>
