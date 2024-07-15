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
      <div class="text-white q-pa-md" v-for="gearItem in gearItems" :key="gearItem.id" :gearItem="gearItem">
        <p>{{ gearItem.name }}</p>
        <p>{{ gearItem.condition }}</p>
        <p>{{ gearItem.price }}</p>
      </div>
    </div>

    <q-footer class="bg-transparent text-white">
      <q-toolbar>
        <q-btn to="/add" color="white" size="large" class="q-mb-md q-px-lg text-black" style="font-weight: 800">+ ADD</q-btn>
      </q-toolbar>
    </q-footer>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'

defineOptions({
  name: 'InventoryPage'
})

const gearItems = ref([
  { id: 1, name: 'Basketball', condition: 'Good', price: 100 },
  { id: 2, name: 'Tennis Racket', condition: 'Fair', price: 50 },
  { id: 3, name: 'Volleyball net', condition: 'Poor', price: 25 }
])

onMounted(() => {
  console.log('Component is mounted')
})

</script>

<style scoped>
.title {
  font-weight: 800;
  font-size: 40px
}
</style>
