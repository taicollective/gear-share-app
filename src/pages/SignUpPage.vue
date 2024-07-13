<template>
  <div id="container">
    <div id="content--logo" class="content">
      <img src="../assets/gear-share-logo.png" class="logo-sm">
    </div>
    <div id="content--form" class="content">
      <div class="form--row-group">
        <div class="form--row form--subtitle-wrapper">
          <h6 class="inter-regular subtitle">Full Name</h6>
        </div>
        <div class="form--row form--input-wrapper">
          <input v-model="user.fullName" type="text" class="input-l input">
        </div>
      </div>
      <div class="form--row-group">
        <div class="form--row form--subtitle-wrapper">
          <h6 class="inter-regular subtitle">Username</h6>
        </div>
        <div class="form--row form--input-wrapper">
          <input v-model="user.username" type="text" class="input-l input">
        </div>
      </div>
      <div class="form--row-group">
        <div class="form--row form--subtitle-wrapper">
          <h6 class="inter-regular subtitle">Email</h6>
        </div>
        <div class="form--row form--input-wrapper">
          <input v-model="user.email" type="text" class="input-l input">
        </div>
      </div>
      <div class="form--row-group">
        <div class="form--row form--subtitle-wrapper">
          <h6 class="inter-regular subtitle">Password</h6>
        </div>
        <div class="form--row form--input-wrapper">
          <input v-model="user.password" type="password" class="input-l input">
        </div>
      </div>
    </div>
    <div id="content--button" class="content">
      <button @click="signUp" class="btn-l">Sign Up</button>
      <p class="underlined" @click="switchToLogIn">Already have an account?</p>
    </div>

    <!-- Add loadig spinner to parent -->
    <q-inner-loading
        :showing="loading"
        label="Please wait..."
        label-class="text-teal"
        label-style="font-size: 1.1em"
      />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { db } from '../firebase'
import { doc, setDoc } from 'firebase/firestore'
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'

import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

const store = useStore()
const router = useRouter()

defineOptions({
  name: 'SignUpPage'
})

const emit = defineEmits(['showLogIn', 'next'])

const loading = ref(false)

const user = {
  id: '',
  fullName: '',
  username: '',
  email: '',
  password: ''
}

const switchToLogIn = () => {
  emit('showLogIn')
}

const signUp = async () => {
  loading.value = true
  const auth = getAuth()
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, user.email, user.password)
    // get new user id
    user.id = userCredential.user.uid
    console.log('user created with id: ', user.id)
    // remove password so its not saved to database
    delete user.password
    // add time registered
    user.registered = new Date()
    // add user to people database
    await setDoc(doc(db, 'users', user.id), user)
    // save user to store
    store.commit('setUser', user)
    loading.value = false
    router.push('/home')
    console.log('User signed up successfully')
  } catch (error) {
    console.error(error)
  }
}
</script>

<style scoped>

#container {
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-rows: 1fr 3fr 1fr;
  grid-template-columns: 1fr;
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

#content--form {
  display: grid;
  grid-template-rows: repeat(1fr, 4);
  grid-template-columns: 1fr;
  grid-gap: 5px;
  justify-items: center;
  align-items: end;
  text-align: left;
}

.form--row-group {
  height: 100%;
  display: grid;
  grid-template-rows: 0.5fr 1fr;
}

.form--row {
  width: 100%;
  height: 100%;
  display: flex;
  /* justify-content: center; */
  align-items: center;
}

.form--subtitle-wrapper {
  align-items: flex-end;
  justify-content: flex-start;
  color: var(--white);
}

.subtitle {
  font-size: 25px;
}

.form--input-wrapper {
  align-items: flex-start;
}

.underlined {
  margin-top: 5px;
  color: var(--white);
  font-size: 17.5px;
}

</style>
