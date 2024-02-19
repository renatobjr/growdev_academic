<script setup>
import { DASHBOARD_ROUTES } from '@/router/dashboard';
import { ref, reactive } from 'vue';
import { useAuthStore } from '@/store/auth';
import { useSnackbarStore } from '@/store/snackbar';
import router from '@/router';
import validator from '@/utils/validator';

const form = ref();
const loginData = reactive({
  username: '',
  password: '',
});

const login = async () => {
  const is = await form.value.validate();

  if (!is.valid) return;

  const result = await useAuthStore().login(loginData);
  if (!result) {
    useSnackbarStore().showSnackbar({
      message: 'Não foi possível realizar o login. Verifique suas credenciais e tente novamente.',
      color: 'error',
    });
  } else {
    router.push({ name: DASHBOARD_ROUTES.DASH });
  }
};

</script>

<template>
  <v-form ref="form">
    <gd-card>
      <template v-slot:title>
        <v-img class="mb-8" src="/public/svg/logo_growdev.svg" max-height="50" contain alt="Growdev Academic"></v-img>
      </template>
      <template v-slot:content>
        <v-text-field
          v-model="loginData.username"
          label="Username"
          type="text"
          variant="outlined"
          density="compact"
          append-inner-icon="mdi-email"
          class="mb-4"
          :rules="[validator.isRequired]"
        ></v-text-field>
        <v-text-field
          v-model="loginData.password"
          label="Password"
          type="password"
          variant="outlined"
          density="compact"
          append-inner-icon="mdi-lock"
          :rules="[validator.isRequired]"
        ></v-text-field>
      </template>
      <template v-slot:actions>
        <v-btn color="primary" @click="login">Login</v-btn>
      </template>
    </gd-card>
  </v-form>
</template>
