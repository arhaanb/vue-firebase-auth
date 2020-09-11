import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import firebase from "firebase/app";
import axios from "axios";

import '@/assets/skeleton.css'
import '@/assets/global.css'

Vue.config.productionTip = false;
Vue.prototype.$axios = axios;

const firebaseConfig = require('../firebase.js')

firebase.initializeApp(firebaseConfig);

let app;

firebase.auth().onAuthStateChanged(user => {
	console.log("user", user);
	if (!app) {
		app = new Vue({
			router,
			store,
			render: h => h(App)
		}).$mount("#app");
	}
});