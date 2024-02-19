import { reactive, ref, computed } from 'vue'
import { defineStore, acceptHMRUpdate } from 'pinia'
import studentService from '@/service/student';

export const useStudentStore = defineStore('student', () => {
  // Reactive state
  const student = ref({
    id: null,
    RA: null,
    name: null,
    email: null,
    cpf: null,
    status: null,
    created_at: null,
    updated_at: null,
  })

  let studentsList = ref([]);
  let totalStudents = ref(0);

  // Actions
  const setStudentsList = (students) => {
    studentsList.value = students;
  }

  const setStudent = (data) => {
    console.log(data);
    student.value = data;
  }

  async function listStudents() {
    await studentService.fetchStudents();
  }

  async function fetchStudents({ page, itemsPerPage, sortBy, search }) {
    if (studentsList) {
      totalStudents.value = studentsList.value.length;

      return new Promise((resolve) => {
        const start = (page - 1) * itemsPerPage;
        const end = start + itemsPerPage;

        const items = studentsList.value.slice().filter((item) => {
          if (search && !item.name.toLowerCase().includes(search.toLowerCase())) {
            return false;
          }
          return true;
        })

        if (sortBy.length) {
          const sortKey = sortBy[0].key;
          const sortOrder = sortBy[0].order;

          items.sort((a, b) => {
            const aValue = a[sortKey];
            const bValue = b[sortKey];

            if (sortOrder === "asc") {
              return aValue < bValue ? -1 : aValue > bValue ? 1 : 0;
            } else {
              return aValue > bValue ? -1 : aValue < bValue ? 1 : 0;
            }
          });
        }

        const paginated = items.slice(start, end);

        resolve({
          items: paginated,
          total: items.length,
        });
      });
    }
  }

  async function createStudent(data) {
    return await studentService.createStudent(data);
  }

  async function fetchStudent(id) {
    return await studentService.fetchStudent(id);
  }

  async function updateStudent(id, data) {
    return await studentService.updateStudent(id, { name: data.name, email: data.email });
  }

  async function deleteStudent(id) {
    return await studentService.deleteStudent(id);
  }

  return {
    student,
    studentsList,

    setStudentsList,
    setStudent,
    listStudents,
    fetchStudents,
    createStudent,
    fetchStudent,
    updateStudent,
    deleteStudent,
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useStudentStore, import.meta.hot))
}
