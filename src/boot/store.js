// src/boot/main.js
import store from '../store'

export default ({ app }) => {
  app.use(store)
}
