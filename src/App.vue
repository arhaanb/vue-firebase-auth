<template>
  <div id="app">
    <Navbar></Navbar>
    <main class="App__main">
      <transition name="fade" mode="out-in">
        <router-view />
      </transition>
    </main>
  </div>
</template>

<script>
import Navbar from "./components/Navbar";
export default {
  components: {
    Navbar: Navbar,
  },
  data() {},
};
</script>  

<style lang="scss">
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #222;
}

.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.3s;
  transition-property: opacity;
  transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}

#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #222;
    margin: 0 1em;
    text-transform: uppercase;
    text-decoration: none;

    &.router-link-exact-active {
      color: #0e77da;
    }
  }

  a:hover {
    color: #0e77da;
  }
}
</style>