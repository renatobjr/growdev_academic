<script setup>
import router from "@/router";
import { STUDENT_ROUTES } from "@/router/student";
import { useStudentStore } from "@/store/students";
import { useDialogStore } from "@/store/dialog";
import { onMounted, ref, watch } from "vue";
import normalize from "@/utils/normalize";

const props = defineProps({
  query: {
    type: Object,
    required: true,
  },
});

const studentStore = useStudentStore();

const isLoaded = ref(false);
const students = ref([]);
const name = ref("");
const search = ref("");

const itemsPerPage = ref(10);
let totalStudents = 0;

const header = [
  { title: "RA", key: "RA", sortable: true },
  { title: "Nome", key: "name", sortable: true },
  { title: "E-mail", key: "email", sortable: true },
  { title: "CPF", key: "CPF", sortable: true },
  { title: "Status", key: "status", sortable: true },
  { title: "Criado em", key: "created_at", sortable: true },
  { title: "Ações", key: "actions", sortable: false },
];

onMounted(async () => {
  await studentStore.listStudents();
  await loadStudents({ page: 1, itemsPerPage: 10, sortBy: [], search: "" });
});

const loadStudents = async ({ page, itemsPerPage, sortBy, search }) => {
  isLoaded.value = true;
  await studentStore
    .fetchStudents({ page, itemsPerPage, sortBy, search })
    .then(({ items, total }) => {
      students.value = items;
      totalStudents = total;
    });
  isLoaded.value = false;
};

const edit = (id) => {
  router.push({ name: STUDENT_ROUTES.EDIT, params: { id } });
};

const remove = async (id) => {
  const isConfirmed = await useDialogStore().openDialog({
    title: "Remover Aluno",
    message: "Você deseja remover o Aluno?",
    submessage: "Esta ação não pode ser desfeita!",
  });

  if (!isConfirmed) return;

  await studentStore.deleteStudent(id).then(async () => {
    await studentStore.listStudents();
    loadStudents({ page: 1, itemsPerPage: 10, sortBy: [], search: ""});
  });
};

watch(
  [name],
  () => {
    search.value = name.value;
  },
);
</script>

<template>
  <v-data-table-server
    v-model:items-per-page="itemsPerPage"
    :headers="header"
    :items="students"
    :items-length="totalStudents"
    :loading="isLoaded"
    :search="search"
    item-value="name"
    @update:options="loadStudents"
    class="rounded elevation-1"
  >
    <template v-slot:top>
      <v-toolbar flat color="primary">
        <v-toolbar-title>Alunos Matrículados</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-text-field
          v-model="name"
          label="Buscar Aluno"
          id="id"
          variant="outlined"
          density="compact"
          class="mt-5 mr-10"
        ></v-text-field>
        <v-btn
          color="bg-primary"
          @click="router.push({ name: STUDENT_ROUTES.CREATE })"
          >Novo Aluno</v-btn
        >
      </v-toolbar>
    </template>
    <template v-slot:item="{ item }">
      <tr>
        <td>{{ item.RA }}</td>
        <td>{{ item.name }}</td>
        <td>{{ item.email }}</td>
        <td>{{ normalize.formatCpf(item.CPF) }}</td>
        <td> <v-chip label color="orange-darken-4" class="text-uppercase">{{ item.status }}</v-chip></td>
        <td>{{ normalize.formatDate(item.created_at) }}</td>
        <td>
          <v-btn color="primary" class="mr-2" @click="edit(item.id)">
            <v-icon size="small"> mdi-pencil </v-icon>
          </v-btn>
          <v-btn color="warning" @click="remove(item.id)">
            <v-icon size="small"> mdi-delete </v-icon>
          </v-btn>
        </td>
      </tr>
    </template>
    <template v-slot:no-data>
      <v-btn color="primary" @click="initialize">Recarregar Lista</v-btn>
    </template>
  </v-data-table-server>
</template>
