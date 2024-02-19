export const DASHBOARD_ROUTES = {
  DASH: "dashboard",
};

export default [
  {
    path: "/dashboard",
    name: DASHBOARD_ROUTES.DASH,
    component: () => import("@/views/Dashboard.vue"),
  }
].map((route) => {
  route["meta"] = {
    ...route["meta"],
    layout: 'base',
    requiresAuth: true,
  };

  return route;
})
