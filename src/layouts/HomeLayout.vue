<template>
    <div id="layout-view">
        <div id="basketball-court"></div>
        <div id="orange-gradient"></div>
        <div id="black-overlay"></div>
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

</style>
