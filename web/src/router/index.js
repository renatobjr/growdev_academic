import { createRouter, createWebHashHistory } from "vue-router";
import auth from "./auth";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    ...auth
  ],
})

export default router;
