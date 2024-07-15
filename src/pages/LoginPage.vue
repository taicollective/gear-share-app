<template>
    <div id="container">
      <div id="content--logo" class="content">
        <img src="../assets/gear-share-logo.png" class="logo-sm">
      </div>
      <div id="content--form" class="content">
        <div class="form--row-group">
          <div class="form--row form--subtitle-wrapper">
            <h6 class="inter-regular subtitle">Email</h6>
          </div>
          <div class="form--row form--input-wrapper">
            <input v-model="email" type="text" class="input-l" id="email">
          </div>
        </div>
        <div class="form--row-group">
          <div class="form--row form--subtitle-wrapper">
            <h6 class="inter-regular subtitle">Password</h6>
          </div>
          <div class="form--row form--input-wrapper">
            <input v-model="password" type="password" class="input-l" id="password">
          </div>
        </div>
      </div>
      <div id="content--button" class="content">
        <button class="btn-l" @click="login">Log In</button>
        <p class="underlined" @click="switchToSignUp">Don't have an account?</p>
      </div>

      <!-- Add loadig spinner to parent -->
      <q-inner-loading
        :showing="loading"
        label="Please wait..."
        label-class="text-orange"
        label-style="font-size: 1.1em"
      />
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import { getAuth, setPersistence, signInWithEmailAndPassword, browserLocalPersistence } from 'firebase/auth'

defineOptions({
  name: 'LoginPage'
})

const store = useStore()
const router = useRouter()

const emit = defineEmits(['showSignUp'])

const email = ref('')
const password = ref('')
const loading = ref(false)

const switchToSignUp = () => {
  emit('showSignUp')
}

const login = async () => {
  loading.value = true
  const auth = getAuth()
  try {
    await setPersistence(auth, browserLocalPersistence)
    const userCredential = await signInWithEmailAndPassword(auth, email.value, password.value)
    const user = userCredential.user
    console.log('User logged in successfully:', user)
    // use fetchUser store action to get user data from firestore and save it to store state
    if (store && typeof store.dispatch === 'function') {
      await store.dispatch('fetchUser', user.uid)
    } else {
      console.error('Store is not initialized correctly')
    }
    loading.value = false
    router.push('/home')
  } catch (error) {
    console.error('Error logging in user:', error)
    loading.value = false
  }
}
</script>

<style scoped>

#container {
  padding-top:20px;
  /* width: 100vw;
  height: 90vh; */
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
  grid-template-rows: 1fr 1fr;
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
  justify-content: center;
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
