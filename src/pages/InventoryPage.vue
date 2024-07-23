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

    <div class="gear-list">
      <GearItem itemStyle="3" v-for="gear in gearItems" :key="gear.id" :gearInfo="gear"/>
    </div>

    <q-footer class="bg-transparent text-white">
      <q-toolbar>
        <q-btn to="/home" color="black" size="large" class="q-mb-md q-px-lg text-white" style="font-weight: 800">BACK</q-btn>
        <q-btn to="/add" color="white" size="large" class="q-mb-md q-px-lg text-black" style="font-weight: 800">+ ADD</q-btn>
      </q-toolbar>
    </q-footer>
  </div>
</template>

<script setup>
import GearItem from '../components/GearItem.vue'

import { onMounted, ref } from 'vue'
import { db } from '../firebase'
import { collection, getDocs } from 'firebase/firestore'

const gearItems = ref([])

onMounted(async () => {
  // get collection gears from firestore
  const querySnapshot = await getDocs(collection(db, 'gears'))
  gearItems.value = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
})

</script>

<style scoped>
.title {
  font-weight: 800;
  font-size: 40px
}

.gear-list {
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
}

</style>
