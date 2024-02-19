export const STUDENT_ROUTES = {
  CREATE: 'create',
  EDIT: 'edit',
}

export default [
  {
    path: '/student/create',
    name: STUDENT_ROUTES.CREATE,
    component: () => import('@/views/student/CreateEdit.vue'),
  },
  {
    path: '/student/edit/:id',
    name: STUDENT_ROUTES.EDIT,
    component: () => import('@/views/student/CreateEdit.vue'),
  },
].map((route) => {
  route["meta"] = {
    ...route["meta"],
    layout: 'base',
    requiresAuth: true,
  };

  return route;
})
