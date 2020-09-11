<template>
  <div class="container">
    <div class="flex-center">
      <div id="nav">
        <router-link to="/">Home</router-link>
        <router-link to="/about">About</router-link>
        <router-link to="/register" v-if="!loggedIn">Register</router-link>
        <router-link to="/login" v-if="!loggedIn">Login</router-link>
        <router-link to="/dashboard" v-if="loggedIn">Dashboard</router-link>
        <a href="#" @click="signOut" v-if="loggedIn">Sign Out</a>
      </div>
    </div>
  </div>
</template>

<script>
import * as firebase from "firebase/app";
import "firebase/auth";
export default {
  name: "Navbar",
  mounted() {
    this.getFirebase();
  },
  methods: {
    getFirebase() {
      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          this.user = user;
          this.loggedIn = true;
        } else {
          this.loggedIn = false;
        }
      });
    },
    signOut() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.replace({ name: "login" });
        });
    },
  },
  data() {
    return {
      loggedIn: false,
      user: {},
    };
  },
};
</script>

<style lang="scss" scoped>
</style>