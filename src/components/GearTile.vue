<template>
    <div id="gear-tile--container" :style="{width: `${size}`}">
        <img :src="img" alt="" id="gear-photo" :style="{width: `${size}`}">
    </div>
</template>

<script setup>
defineOptions({
    name: "GearTile"
})

defineProps(['size', 'img'])

</script>

<style scoped>

#gear-tile--container {
    aspect-ratio: 1 / 1;
    background-color: var(--white);
    border-radius: var(--radius);
    margin: var(--margin);
    display: flex;
    justify-content: center;
    align-items: center;
}

#gear-photo {
    width: inherit;
    height: inherit;
    border-radius: inherit;
    object-fit: cover;
}

</style>