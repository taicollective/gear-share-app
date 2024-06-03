<template>
    <div @click="next" class="container">
        <div id="content--title" class="content">
            <h1 class="inter-bold">Welcome</h1>
            <h1 class="inter-bold">{{user.fullName}}</h1>
             <p class="inter-bold">Gearshare empowers young athletes by putting the gear they need straight into their hands, so they can pursue their dreams and ambitions.</p>
        </div>
        <div id="content--logo" class="content">
            <img src="../assets/steven-adams.jpeg" class="logo-sm">
        </div>
        <div>
            <p>"Basketball has done so much for me, I'm just trying to create opportunities for other kids"- Steven Adams. </p>
        </div>
    </div>
</template>

<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'

defineOptions({
  name: 'WelcomePage'
})
const emit = defineEmits(['next'])

const store = useStore()

const user = computed(() => store.state.user)

const next = () => {
  emit('next')
}

</script>

<style scoped>

* {
    margin: 0;
}

.container {
    width: 100vw;
    height: 100vh;
    display: grid;
    justify-items: center;
    align-items: center;
    grid-template-rows: 1fr 1fr 3fr;
    position: relative;
}

.content {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
}

#content--title {
    color: var(--white);
}

#content--buttons {
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-rows: 1fr 1fr;
    color: var(--white);
}

.buttons--row-group {
    width: 100%;
    height: 100%;
}

.subtext {
    font-size: 17.5px;
    margin-bottom: 5px;
}

</style>
