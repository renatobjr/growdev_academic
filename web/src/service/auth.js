import { useAuthStore } from "@/store/auth";
import api from "@/utils/api";

const BASE_URL = 'auth'

async function getSession(token) {
  const response = await api.get(`${BASE_URL}/session`, {
    headers: {
      Authorization: `${token}`
    }
  });

  return response;
}

const authService = {
  login: async (data) => {
    const response = await api.post(`${BASE_URL}/login`, data);

    if (response.httpStatus === 200) {
      localStorage.setItem(process.env.SESSION_TOKEN, response.data.token);
      useAuthStore().setLoggedUser(response.data.user, response.data.token);
      return true;
    }
    return false;
  },
  check: async() => {
    const session = localStorage.getItem(process.env.SESSION_TOKEN);

    if (session) {
      const response = await getSession(session);

      if (response.httpStatus === 200) {
        useAuthStore().setLoggedUser(response.data.user, session);
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }
}

export default authService;
