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
            <input type="text" class="input-l" id="email">
          </div>
        </div>
        <div class="form--row-group">
          <div class="form--row form--subtitle-wrapper">
            <h6 class="inter-regular subtitle">Password</h6>
          </div>
          <div class="form--row form--input-wrapper">
            <input type="password" class="input-l" id="password">
          </div>
        </div>
      </div>
      <div id="content--button" class="content">
        <button class="btn-l">Log In</button>
        <p class="underlined" @click="switchToSignUp">Don't have an account?</p>
      </div>
    </div>
</template>

<script setup>
defineOptions({
  name: 'LoginPage'
})

const emit = defineEmits(['showSignUp'])

const switchToSignUp = () => {
  emit('showSignUp')
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
