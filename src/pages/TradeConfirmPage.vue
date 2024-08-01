<template>
    <div class="content">
        <div id="header-block">
            <h3 class="title">TRADE</h3>
        </div>
        <div id="body-block">

        </div>
        <div id="footer-block">
        </div>
    </div>
</template>

<script setup>
defineOptions({
    name: "TradeConfirmPage"
})
</script>

<style scoped>
.content {
    width: 100vw;
    height: 100vh;
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

#footer-block {
    height: 10vh;
}

</style>