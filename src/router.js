import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import About from "./views/About.vue";
import Zero from "./views/ProjectZero.vue";
import One from "./views/ProjectOne.vue";
import Two from "./views/ProjectTwo.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/about",
      name: "about",
      component: About
    },
    {
      path: "/project/zero",
      name: "zero",
      component: Zero
    },
    {
      path: "/project/one",
      name: "one",
      component: One
    },
    {
      path: "/project/two",
      name: "two",
      component: Two
    }
  ],
  mode: "history"
});
