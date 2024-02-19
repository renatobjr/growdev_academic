<script setup>
import Default from "./Default.vue";
import { useAuthStore } from "@/store/auth";
import { AUTH_ROUTES } from "@/router/auth";
import { DASHBOARD_ROUTES } from "@/router/dashboard";

import router from "@/router";

const logout = () => {
  useAuthStore().logout();
  router.push({ name: AUTH_ROUTES.LOGIN });
};
</script>

<template>
  <default>
    <v-navigation-drawer class="bg-growdev-primary" permanent>
      <v-list class="d-flex justify-center">
        <v-list-item
          class="font-weigth-bold text-white"
          title="Módulo Acadêmico"
        ></v-list-item>
      </v-list>
      <v-divider></v-divider>
      <v-list>
        <v-list-item
          class="text-white"
          active="false"
          prepend-icon="mdi-school"
          title="Alunos"
          @click="router.push({ name: DASHBOARD_ROUTES.DASH })"
        ></v-list-item>
      </v-list>

      <template v-slot:append>
        <div class="pa-2">
          <v-btn class="bg-orange-darken-4" block @click="logout"> Logout </v-btn>
        </div>
      </template>
    </v-navigation-drawer>
    <slot />
  </default>
</template>
