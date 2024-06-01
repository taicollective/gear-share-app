<template>
    <div class="container">
        <div id="content--logo" class="content">
            <img src="../assets/gear-share-logo.png" id="logo">
        </div>
        <div id="content--subtitle" class="content">
            <p id="subtitle" class="inter-bold">Score BIG, give BIGGER, support our athletes today!</p>
        </div>
        <div id="content--buttons" class="content">
            <div id="log-in--container" class="buttons">
                <p class="subtext">Already have an account?</p>
                <button class="register-buttons inter-bold" @click="goToLogin"><h5 class="inter-bold">Log In</h5></button>
            </div>
            <div id="sign-up--container" class="buttons">
                <p class="subtext">Don't have an account?</p>
                <button class="register-buttons inter-bold" @click="goToSignup"><h5 class="inter-bold">Sign Up</h5></button>
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
    width: 100vw;
    height: 100vh;
    display: grid;
    justify-items: center;
    align-items: center;
    grid-template-rows: 3.5fr 3fr 7fr;
    position: relative;
}

.content {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

#logo {
    width: 150px;
    height: 120px;
    /* aspect-ratio: 1 / 1; */
}

#subtitle {
    width: 70%;
    text-align: center;
    font-size: 20px;
    color: var(--white);
}

#content--buttons {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
}

.buttons {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

.subtext {
    color: var(--white);
}

.register-buttons {
    width: 70%;
    height: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
}

</style>
