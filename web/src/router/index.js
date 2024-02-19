import { createRouter, createWebHistory } from "vue-router";
import { useAuthStore } from "@/store/auth";
import authService from "@/service/auth";
import auth, { AUTH_ROUTES } from "./auth";
import dashboard from "./dashboard";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    ...auth,
    ...dashboard,
  ],
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0, behavior: 'smooth' };
  },
})

router.beforeEach( async (to, from) => {
  const authStore = useAuthStore();
  const { isLogged } = authStore;

  console.log(isLogged, to.meta.requiresAuth);
  if (!isLogged && to.meta.requiresAuth == true) {
    const check = await authService.check();
    if (!check) {
      return { name: AUTH_ROUTES.LOGIN };
    }
  }
});

export default router;
