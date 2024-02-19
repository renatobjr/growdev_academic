<script setup>
import { ref, reactive } from 'vue';
import validator from '@/utils/validator';
import { useStudentStore } from '@/store/students';
import { useSnackbarStore } from '@/store/snackbar';
import { DASHBOARD_ROUTES } from '@/router/dashboard';
import router from '@/router';
import { onBeforeMount } from 'vue';

onBeforeMount(() => {
  getStudent();
});

const props = defineProps({
  isEdit: Boolean
});

const form = ref();
let student  = reactive({
  name: '',
  email: '',
  cpf: '',
})

const getStudent = async() => {
  if (props.isEdit) {
    await useStudentStore().fetchStudent(router.currentRoute.value.params.id);
    student.name = useStudentStore().student.name;
    student.email = useStudentStore().student.email;
    student.cpf = useStudentStore().student.CPF;
  }
}

const save = async () => {
  const is = await form.value.validate();
  let snackBarMessage = {};

  if (!is.valid) return;

  student.cpf = student.cpf.replace(/[^\d]/g, '');

  const result = props.isEdit
    ? await useStudentStore().updateStudent(router.currentRoute.value.params.id, student)
    : await useStudentStore().createStudent(student);

  console.log(result);
  if (!result) {
    snackBarMessage = {
      message: 'Ocorreu um erro.Tente novamente.',
      color: 'error',
    };
  } else {
    snackBarMessage = {
      message: props.isEdit ? 'Aluno atualizado com sucesso!' : 'Aluno criado com sucesso!',
      color: 'success',
    };

    router.push({ name: DASHBOARD_ROUTES.DASH });
  }

    useSnackbarStore().showSnackbar(snackBarMessage);
}

</script>

<template>
  <v-container class="fill-height">
    <v-row align="center" justify="center">
      <v-col cols="12" sm="8" md="4">
        <v-card>
          <v-card-title class="mt-4 mb-4">
            <span class="headline">{{ isEdit ? "Editar Aluno" : "Novo Aluno" }}</span>
          </v-card-title>
          <v-card-text>
            <v-form ref="form">
              <v-text-field
                v-model="student.name"
                label="Nome"
                type="text"
                variant="outlined"
                density="compact"
                class="mb-4"
                :rules="[validator.isRequired]"
              ></v-text-field>
              <v-text-field
                v-model="student.email"
                label="Email"
                type="email"
                variant="outlined"
                density="compact"
                class="mb-4"
                :rules="[validator.isRequired, validator.isEmail]"
              ></v-text-field>
              <v-text-field
                v-model="student.cpf"
                label="CPF"
                type="text"
                variant="outlined"
                density="compact"
                class="mb-4"
                v-mask="'###.###.###-##'"
                :rules="[validator.isRequired]"
                :disabled="isEdit"
              ></v-text-field>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-btn color="primary" @click="save">{{ isEdit ? "Editar" : "Salvar" }}</v-btn>
            <v-btn color="error" @click="router.push({ name: DASHBOARD_ROUTES.DASH })">Cancelar</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
