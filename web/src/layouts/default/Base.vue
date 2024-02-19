<script setup>
import Default from "./Default.vue";
import { useAuthStore } from "@/store/auth";
import { AUTH_ROUTES } from "@/router/auth";
import router from "@/router";

const logout = () => {
  useAuthStore().logout();
  router.push({name: AUTH_ROUTES.LOGIN});
};

</script>

<template>
  <default>
    <v-navigation-drawer class="primary" theme="dark" permanent>
      <v-list class=" d-flex justify-center">
        <v-list-item class="font-weigth-bold" title="Módulo Acadêmico"></v-list-item>
      </v-list>
      <v-divider></v-divider>
      <v-list>
        <v-list-item
          active="false"
          prepend-icon="mdi-school"
          title="Alunos"
        ></v-list-item>
      </v-list>

      <template v-slot:append>
        <div class="pa-2">
          <v-btn class="bg-secondary" block @click="logout"> Logout </v-btn>
        </div>
      </template>
    </v-navigation-drawer>
    <slot />
  </default>
</template>
