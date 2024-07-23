<template>
    <q-layout view="hhh lpR fff">
        <BackgroundEl/>

        <q-page-container>
            <router-view />
        </q-page-container>

    </q-layout>
</template>

<script setup>
import BackgroundEl from 'src/components/BackgroundEl.vue'

defineOptions({
    name: "ItemSelectLayout"
})

</script>

<style scoped>
</style>