import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Register from "../views/Register.vue";
import Login from "../views/Login.vue";
import Dashboard from "../views/Dashboard.vue";

import * as firebase from "firebase/app";
import "firebase/auth";

Vue.use(VueRouter);

const routes = [
	{
		path: "/",
		name: "home",
		component: Home
	},
	{
		path: "/dashboard",
		name: "dashboard",
		component: Dashboard,
		meta: { requiresAuth: true }
	},
	{
		path: "/login",
		name: "login",
		component: Login,
		meta: { loggedOut: true }
	},
	{
		path: "/register",
		name: "register",
		component: Register,
		meta: { loggedOut: true }
	},
	{
		path: "/about",
		name: "about",
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () =>
			import(/* webpackChunkName: "about" */ "../views/About.vue")
	}
];

const router = new VueRouter({
	mode: "history",
	base: process.env.BASE_URL,
	routes
});

router.beforeEach((to, from, next) => {
	const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
	const loggedOut = to.matched.some(record => record.meta.loggedOut);
	const isAuthenticated = firebase.auth().currentUser;
	console.log("isauthenticated", isAuthenticated);
	if (requiresAuth && !isAuthenticated) {
		next("/login");
	} else if (loggedOut && isAuthenticated) {
		next("/dashboard");
	} else {
		next();
	}
});

export default router;
