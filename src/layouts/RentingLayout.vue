<template>
    <BackgroundEl/>
    <ItemSelectPage @selectedGear="showRentingPage" v-if="selectingItem"/>
    <ItemConfirmPage @returnToSelect="showItems" :titleMessage="'Renting'" :gearInfo="item" :confirmMessage="rentingMsg" :statusUpdate="'renting'" v-if="rentingItem"/>
</template>

<script setup>
import BackgroundEl from 'src/components/BackgroundEl.vue';
import ItemSelectPage from 'src/pages/ItemSelectPage.vue';
import ItemConfirmPage from 'src/pages/ItemConfirmPage.vue';

import { ref } from 'vue';

defineOptions({
    name: "RentingLayout"
})

const item = ref()

const selectingItem = ref(true)
const rentingItem = ref(false)
const rentingMsg = ref("Thank you for renting!")

const showRentingPage = (gearItem) => {
    item.value = gearItem

    selectingItem.value = false
    rentingItem.value = true
}

</script>

<style scoped>
</style>