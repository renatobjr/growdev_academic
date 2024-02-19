import { reactive, ref, computed } from 'vue'
import { defineStore, acceptHMRUpdate } from 'pinia'
import authService from '@/service/auth';

export const useAuthStore = defineStore('auth', () => {
  // Reactive state
  const loggedUser = reactive({
    _id: null,
    username: null,
    email: null,
    status: null,
  });

  const loggedToken = ref(null);

  // Actions
  const isLogged = computed(() => loggedToken.value !== null);
  const setLoggedUser = (userData, token) => {
    loggedUser.id = userData.id;
    loggedUser.username = userData.username;
    loggedUser.email = userData.email;
    loggedUser.status = userData.status;
    // User validation token
    loggedToken.value = token;
  }
  const clearLoggedUser = () => {
    loggedUser.id = null;
    loggedUser.username = null;
    loggedUser.email = null;
    loggedUser.status = null;
    loggedToken.value = null;
  }

  async function login(data) {
    return await authService.login(data);
  }

  function logout() {
    clearLoggedUser();
    localStorage.removeItem(process.env.SESSION_TOKEN);
  }

  return {
    loggedUser,
    loggedToken,
    isLogged,

    login,
    logout,
    setLoggedUser,
    clearLoggedUser,
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useAuthStore, import.meta.hot))
}
