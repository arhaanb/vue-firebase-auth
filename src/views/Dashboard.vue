<template>
  <div class="container">
    <h1 v-if="user" class="center">Hi {{user.displayName.split(' ')[0]}}</h1>
  </div>
</template>

<script>
import * as firebase from "firebase/app";
import "firebase/auth";

export default {
  data() {
    return {
      user: {},
      loggedIn: false,
    };
  },
  mounted() {
    this.getFirebase();
  },
  methods: {
    // async getSecrets() {
    //   const token = await firebase.auth().currentUser.getIdToken();
    //   let config = {
    //     headers: {
    //       Authorization: `Bearer ${token}`,
    //     },
    //   };

    //   this.secrets = await this.$axios.get(
    //     "https://app.minet.co/api/leader",
    //     config
    //   );
    //   this.secrets = this.secrets.data;
    // },
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
  },
};
</script>

<style lang="scss" scoped>
</style>