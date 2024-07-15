<template>
    <div class="container">
        <div id="content--logo" class="content">
            <img src="../assets/gear-share-logo.png" class="logo-sm">
        </div>
        <div id="content--title" class="content">
            <h6 class="inter-bold">Score BIG, give BIGGER</h6>
            <h6 class="inter-bold">support our athletes</h6>
            <h6 class="inter-bold">today!</h6>
        </div>
        <div id="content--buttons" class="content">
            <div class="buttons--row-group">
                <p class="subtext">Already have an account?</p>
                <button class="btn-l" @click="goToLogin">LOG IN</button>
            </div>
            <div class="buttons--row-group">
                <p class="subtext">Don't have an account?</p>
                <button class="btn-l" @click="goToSignup">SIGN UP</button>
            </div>
        </div>
    </div>
</template>

<script setup>
defineOptions({
  name: 'WelcomePage'
})

const emit = defineEmits(['showLogIn', 'showSignUp'])

const goToLogin = () => {
  emit('showLogIn')
}

const goToSignup = () => {
  emit('showSignUp')
}

</script>

<style scoped>

* {
    margin: 0;
}

.container {
padding-top: 20px;
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
    padding-top: 30px;
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-rows: auto;
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
