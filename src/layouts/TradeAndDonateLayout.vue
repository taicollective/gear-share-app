<template>
    <div id="layout-view">
        <BackgroundEl/>
        <ItemSelectPage @selectedGear="showOptions" v-if="selectingItem"/>
        <TradeOrDonatePage @returnToSelect="showItems" @goToDonate="showDonate" @goToTrade="showTradeOffers" :gearInfo="item" v-if="choosingOption"/>
        <ItemConfirmPage @returnToSelect="showItems" :titleMessage="'Donate'" :gearInfo="item" :confirmMessage="donatingMsg" :statusUpdate="'donated'" v-if="donating"/>
        <SharedItemSelectPage @chosenTrade="showTrade" v-if="selectingTrade"/>
        <TradeConfirmPage v-if="trading" :userItem="item" :tradeItem="itemToTrade" :confirmMessage="tradingMsg"/>
    </div>
</template>

<script setup>
import { ref } from "vue";

import BackgroundEl from 'src/components/BackgroundEl.vue'
import ItemSelectPage from 'src/pages/ItemSelectPage.vue';
import TradeOrDonatePage from 'src/pages/TradeOrDonatePage.vue';
import ItemConfirmPage from 'src/pages/ItemConfirmPage.vue'
import SharedItemSelectPage from 'src/pages/SharedItemSelectPage.vue';
import TradeConfirmPage from 'src/pages/TradeConfirmPage.vue';

defineOptions({
  name: "TradeAndDonateLayout",
});

const selectingItem = ref(true)
const selectingTrade = ref(false)
const choosingOption = ref(false)

const trading = ref(false);
const tradingMsg = ref("Your trade request has been sent!");

const donating = ref(false);
const donatingMsg = ref("Thank you for your donation!");

const item = ref()
const itemToTrade = ref()

const showOptions = (gearItem) => {
    console.log(`selecting ${gearItem.name}`)
    
    item.value = gearItem
    selectingItem.value = false
    trading.value = false
    donating.value = false
    choosingOption.value = true
    selectingTrade.value = false
}

const showItems = () => {
    choosingOption.value = false
    trading.value = false
    donating.value = false
    selectingItem.value = true
    selectingTrade.value = false
}

const showDonate = () => {
    selectingItem.value = false
    choosingOption.value = false
    trading.value = false
    donating.value = true
    selectingTrade.value = false
}

const showTradeOffers = () => {
    selectingItem.value = false
    choosingOption.value = false
    donating.value = false
    trading.value = false
    selectingTrade.value = true
}

const showTrade = (gearItem) => {
    console.log(`trading for ${gearItem.name}`)

    itemToTrade.value = gearItem
}

</script>

<style scoped></style>
