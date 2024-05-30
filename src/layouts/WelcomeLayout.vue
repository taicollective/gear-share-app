<template>
    <div id="layout-view">
        <WelcomePage v-if="welcome" @showLogIn="showLoginPage" @showSignUp="showSignUpPage"/>
        <LoginPage v-if="login" @showSignUp="showSignUpPage"/>
        <SignUpPage v-if="signup" @showLogIn="showLoginPage"/>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import WelcomePage from '../pages/WelcomePage.vue'
import LoginPage from '../pages/LoginPage.vue'
import SignUpPage from '../pages/SignUpPage.vue'

defineOptions({
  name: 'WelcomeLayout'
})

const welcome = ref(true)
const login = ref(false)
const signup = ref(false)

const showLoginPage = () => {
  console.log('showing log in page')
  welcome.value = false
  login.value = true
  signup.value = false
}

const showSignUpPage = () => {
  welcome.value = false
  login.value = false
  signup.value = true
}

</script>

<style scoped>

#layout-view {
    width: 100vw;
    height: 100vh;
}

</style>
