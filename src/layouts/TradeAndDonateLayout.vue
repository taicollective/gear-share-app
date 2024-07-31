<template>
    <div id="layout-view">
        <BackgroundEl/>
        <ItemSelectPage @selectedGear="showOptions" v-if="selectingItem"/>
        <TradeOrDonatePage @returnToSelect="showItems" @goToDonate="showDonatePage" :gearInfo="item" v-if="choosingOption"/>
        <ItemConfirmPage @returnToSelect="showItems" :titleMessage="'Donate'" :gearInfo="item" :confirmMessage="donatingMsg" :statusUpdate="'donated'" v-if="donating"/>
    </div>
</template>

<script setup>
import { ref } from 'vue';

import BackgroundEl from 'src/components/BackgroundEl.vue'
import ItemSelectPage from 'src/pages/ItemSelectPage.vue';
import TradeOrDonatePage from 'src/pages/TradeOrDonatePage.vue';
import ItemConfirmPage from 'src/pages/ItemConfirmPage.vue'

defineOptions({
    name: "TradeAndDonateLayout"
})

const selectingItem = ref(true)
const choosingOption = ref(false)

const trading = ref(false)
const tradingMsg = ref("Your trade request has been sent!")

const donating = ref(false)
const donatingMsg = ref("Thank you for your donation!")

const item = ref()

const showOptions = (gearItem) => {
    console.log(`selecting ${gearItem.name}`)
    
    item.value = gearItem
    selectingItem.value = false
    trading.value = false
    donating.value = false
    choosingOption.value = true
}

const showItems = () => {
    choosingOption.value = false
    trading.value = false
    donating.value = false
    selectingItem.value = true
}

const showDonatePage = () => {
    selectingItem.value = false
    choosingOption.value = false
    trading.value = false
    donating.value = true
}

const showTradingPage = () => {
    selectingItem.value = false
    choosingOption.value = false
    donating.value = false
    trading.value = true
}

</script>

<style scoped>
</style>