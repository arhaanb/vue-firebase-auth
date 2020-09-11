<template>
  <div class="container">
    <div class="vh">
      <div class="six columns">
        <h1 class="center">Login</h1>
        <p class="error center" v-if="error">{{error.message}}</p>
        <form @submit.prevent="login">
          <div class="login">
            <input type="text" placeholder="Email" v-model="email" />
          </div>
          <div class="password">
            <input type="password" placeholder="Password" v-model="password" />
          </div>
          <div class="flex-center">
            <button class="cool">Login</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import * as firebase from "firebase/app";
import "firebase/auth";
export default {
  data() {
    return {
      email: "",
      password: "",
      error: "",
    };
  },
  methods: {
    login() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then((data) => {
          console.log(data);
          this.$router.replace({ name: "dashboard" });
        })
        .catch((error) => {
          this.error = error;
        });
    },
  },
};
</script>

<style lang="scss" scoped>
</style>