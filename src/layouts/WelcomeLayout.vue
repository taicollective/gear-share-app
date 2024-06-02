<template>
    <div id="layout-view">
        <div id="basketball-court"></div>
        <div id="orange-gradient"></div>
        <div id="black-overlay"></div>
        <div id="view--content">
          <WelcomePage v-if="welcome" @showLogIn="showLoginPage" @showSignUp="showSignUpPage"/>
          <LoginPage v-if="login" @showSignUp="showSignUpPage"/>
          <SignUpPage v-if="signup" @showLogIn="showLoginPage"/>
        </div>
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
  position: relative;
}

#view--content {
  z-index: 1;
}

#basketball-court, #black-overlay, #orange-gradient {
  width: 100vw;
  height: 100vh;
  position: absolute;
  z-index: -1;
}

#basketball-court {
  background-image: url("../assets/red-basketball-court.png");
  background-position: center;
  background-size: cover;
  z-index: -1;
}

#orange-gradient {
  background: linear-gradient(0deg, rgba(255,92,0,0) 0%, rgba(255,92,0,0.6) 100%);
}

#black-overlay {
  background-color: rgba(0, 0, 0, 0.2)
}

</style>
