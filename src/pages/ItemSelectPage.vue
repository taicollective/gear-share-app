<template>
    <div id="container">
        <div id="header-block" class="container--block">
            <h3 class="title">CHOOSE AN ITEM</h3>
        </div>
        <div id="items-block" class="container--block">
            <h6 id="subtitle" v-if="gearItems.length === 0">Looks like you have nothing to donate, trade or rent.</h6>
            <GearItem itemStyle="2" v-for="gear in gearItems" :gearInfo="gear" :key="gear.id" @click="selectItem(gear)"/>
        </div>
        <div id="footer-block" class="container--block">
            <q-btn to="/home" color="black" size="large" class="q-mb-md q-px-lg text-white" style="font-weight: 800">BACK</q-btn>
        </div>
    </div>
</template>

<script setup>
import GearItem from '../components/GearItem.vue'

import { useStore } from 'vuex'
import { onMounted, ref } from 'vue'
import { db } from '../firebase'
import { collection, getDocs } from 'firebase/firestore'

defineOptions({
    name: "ItemSelectPage"
})

const store = useStore()
const emit = defineEmits(['selectedGear'])

const gearItems = ref([])
const selectedItem = ref()

const selectItem = (gearItem) => {
    selectedItem.value = gearItem
    emit('selectedGear', selectedItem.value)
}

onMounted(async () => {
  // get collection gears from firestore
  const querySnapshot = await getDocs(collection(db, 'gears'))
  gearItems.value = (querySnapshot.docs.map(doc => {
    const data = doc.data()
    if (data.owner === store.getters.user.id) {
        if (data.status !== 'renting' && data.status !== 'rented') {
            return data
        } else {
            return null
        }
    } else {
        return null
    }
  }))
  .filter(doc => doc !== null)
//   gearItems.value = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
})

</script>

<style scoped>
.title {
  font-weight: 800;
  font-size: 40px;
  color: var(--white);
}

.container--block {
    width: 100%;
    height: auto;
    padding: var(--padding);
}

#header-block {
    height: 10vh;
}

#items-block {
    height: 80vh;
    overflow: scroll;
}

#subtitle {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-weight: 500;
    color: var(--white);
    font-size: 30px;
    padding: 25px;
}

#footer-block {
    height: 10vh;
}

</style>