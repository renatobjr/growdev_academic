export const AUTH_ROUTES = {
  LOGIN: 'login'
}

export default [
  {
    path: '/',
    name: AUTH_ROUTES.LOGIN,
    component: () => import('@/views/auth/Login.vue'),
  }
].map((route) => {
  route['meta'] = {
    ... route.meta,
    requiredAuth: false,
    layout: 'login'
  }

  return route
})
