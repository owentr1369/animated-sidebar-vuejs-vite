import { createRouter, createWebHistory } from "vue-router";
import Home from "../src/views/Home.vue";
import About from "../src/views/About.vue";
import Team from "../src/views/Team.vue";
import Contact from "../src/views/Contact.vue";
import Settings from "../src/views/Settings.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: Home,
    },
    {
      path: "/about",
      component: About,
    },
    {
      path: "/team",
      component: Team,
    },
    {
      path: "/contact",
      component: Contact,
    },
    {
      path: "/settings",
      component: Settings,
    },
  ],
});

export default router;
