import Vue from "vue";
import VueRouter from "vue-router";
import Characters from "../views/characters/Characters";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "characters_path",
      component: Characters,
    },
  ],
});

export default router;
