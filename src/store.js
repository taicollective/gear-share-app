// src/store.js
import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate";
import { getDoc, doc } from "firebase/firestore";
import { db } from "./firebase";

export default createStore({
  state: {
    user: null,
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
    },
  },
  actions: {
    // await store.dispatch('fetchUser', userId); calls this action
    async fetchUser({ commit }, userId) {
      try {
        // get user's doc from Firestore
        const userDoc = await getDoc(doc(db, "users", userId));
        if (userDoc.exists()) {
          // if user exists, save user in state (commit runs mutations)
          commit("setUser", userDoc.data());
        } else {
          console.log("No such user!");
        }
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    },
  },
  getters: {
    user: (state) => state.user,
  },
  plugins: [createPersistedState()],
});
