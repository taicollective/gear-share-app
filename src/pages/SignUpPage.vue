<template>
    <div id="container">
      <div id="content--logo" class="content">
        <img src="../assets/gear-share-logo.png" class="logo-sm">
      </div>
      <div id="content--form" class="content">
        <h6 class="inter-regular">Email</h6>
        <input type="text" class="input-l">
        <h6 class="inter-regular">Password</h6>
        <input type="text" class="input-l">
        <h6 class="inter-regular">Password</h6>
        <input type="text" class="input-l">
        <h6 class="inter-regular">Password</h6>
        <input type="text" class="input-l">
      </div>
      <div id="content--button" class="content">
        <button class="btn-l">Sign Up</button>
        <p class="underlined" @click="switchToLogIn">Already have an account?</p>
      </div>
    </div>
</template>

<script setup>
defineOptions({
  name: 'SignUpPage'
})

const emit = defineEmits(['showLogIn'])

const switchToLogIn = () => {
  emit('showLogIn')
}

</script>

<style scoped>

#container {
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-rows: 1fr 3fr 1fr;
  grid-template-columns: 1fr;
  background-color: var(--orange);
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
  text-align: left;
}

#content--logo, #content--button {
  background-color: purple;
}

.underlined {
    margin-top: 10px;
}

</style>
