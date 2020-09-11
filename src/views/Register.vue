<template>
  <div class="container">
    <div class="vh">
      <div class="six columns">
        <h1 class="center">Register</h1>
        <p class="error center" v-if="error">{{error.message}}</p>
        <form @submit.prevent="register">
          <div class="name">
            <input type="text" v-model="name" placeholder="Name" required />
          </div>
          <div class="email">
            <input type="email" v-model="email" placeholder="Email" required />
          </div>
          <div class="password">
            <input type="password" v-model="password" placeholder="Password" required />
          </div>
          <div class="flex-center">
            <button type="submit" class="cool">Register</button>
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
      name: "",
    };
  },
  methods: {
    register() {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .then((data) => {
          data.user
            .updateProfile({
              displayName: this.name,
            })
            .then(() => {
              this.$router.replace({ name: "dashboard" });
            });
        })
        .catch((error) => (this.error = error));
    },
  },
};
</script>

<style lang="scss" scoped>
</style>