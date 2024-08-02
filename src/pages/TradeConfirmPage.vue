<template>
    <div class="content">
        <div id="header-block">
            <h3 class="title">TRADE</h3>
        </div>
        <div id="body-block">
            <div id="comparing-section">
                <GearTile :size="'125px'" :img="userItem.image"/>
                <q-icon name="autorenew" id="trade-icon"/>
                <GearTile :size="'125px'" :img="tradeItem.image"/>
            </div>
            <div id="location-section">
                <h6 class="subtitle">LOCATION:</h6>
                <div id="input-container">
                    <input type="text" id="location" v-model="location">
                    <q-icon name="place"/>
                </div>
            </div>
            <div id="delivery-section">
                <p class="subtitle delivery-subtitle" @click="switchDeliveryChoice('drop-off')" :style="{color: changeColor('drop-off')}">DROP OFF</p>
                <p class="subtitle delivery-subtitle" @click="switchDeliveryChoice('pick-up')" :style="{color: changeColor('pick-up')}">PICK UP</p>
            </div>
        </div>
        <div id="footer-block">
            <q-btn color="white" size="large" class="q-mb-md q-px-lg text-black" style="font-weight: 800" @click="showConfirmMessage()">CONFIRM</q-btn>
            <q-btn color="black" size="large" class="q-mb-md q-px-lg text-white" style="font-weight: 800" @click="backToSelect()">BACK</q-btn>
        </div>
        <div id="message-block" v-if="msg">
            <div @click="returnHome()" id="overlay"></div>
            <div @click="returnHome()" id="message-card">
                <h3></h3>
            </div>
        </div>
    </div>
</template>

<script setup>
import GearTile from 'src/components/GearTile.vue';

import { ref } from 'vue';

defineOptions({
    name: "TradeConfirmPage"
})

const emit = defineEmits(['returnToSelect'])
const prop = defineProps(['userItem', 'tradeItem', 'confirmMessage'])

const msg = ref(false)
const deliveryChoice = ref("pick-up")
const location = ref(prop.userItem.location)

const changeColor = (choice) => {
    if (choice == deliveryChoice.value) {
        return 'var(--yellow)'
    } else {
        return 'var(--white)'
    }
}

const switchDeliveryChoice = (choice) => {
    deliveryChoice.value = choice
}

const showConfirmMessage = async () => {
    msg.value = true

    console.log(props.statusUpdate)
    console.log(props.gearInfo.id)
    
    const gearDocRef = doc(db, 'gears', props.gearInfo.id)

    try {
        await updateDoc(gearDocRef, {
            status: props.statusUpdate,
            location: "GearShare HQ",
            owner: "wYRGJG6YcMbrxDRl98VOwE4hjAr2"
        })
        $q.notify({
            color: "positive",
            message: "Successful transaction!"
        })
        console.log('Documents successfully updated')
    } catch (error) {
        console.error('Error updating document:', error)
    }
}

const backToSelect = () => {
    emit("returnToSelect")
}

</script>

<style scoped>
.content {
    width: 100vw;
    height: 100vh;
}

.title {
    font-weight: 800;
    font-size: 40px;
    color: var(--white);
}

.subtitle {
    font-weight: 800;
    font-size: 20px;
    color: var(--white);
}

#header-block {
    width: inherit;
    height: 10vh;
    display: flex;
    justify-content: center;
    align-items: center;
}

#body-block {
    height: 80vh;
}

#comparing-section {
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 10px;
    padding-bottom: 10px;
}

#trade-icon {
    font-size: 50px;
    color: var(--white);
    font-weight: 900;
    transform-origin: rotate(45deg);
}

#location-section {
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding-top: 20px;
    padding-bottom: 20px;
}

#input-container {
    background-color: var(--white);
    border-radius: var(--radius);
    padding-right: 10px;
}

#location {
    width: 75vw;
    box-shadow: none;
}

#delivery-section {
    width: 100vw;
    height: auto;
    padding-top: 10px;
    padding-bottom: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.delivery-subtitle {
    margin-left: 10px;
    margin-right: 10px;
    font-size: 30px;
}

#footer-block {
    width: 100vw;
    height: 10vh;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 10px;
    justify-items: center;
    align-items: center;
}

#message-block {
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
}

#overlay {
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4);
}

#message-card {
    position: absolute;
    border-radius: var(--radius);
    background-color: var(--white);
    width: 80vw;
    aspect-ratio: 1 / 1;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    box-shadow: 0px 0px 10px var(--black);
}

#message-card > h3 {
    color: var(--black);
    font-weight: 600;
}

</style>