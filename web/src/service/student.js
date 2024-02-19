import { useStudentStore } from '@/store/students'
import api from '@/utils/api'

const BASE_URL = 'students'

const studentService = {
  fetchStudents: async () => {
    const response = await api.get(`${BASE_URL}/list`)
    if (response.httpStatus === 200) {
      useStudentStore().setStudentsList(response.data)
    }
  },
  createStudent: async (data) => {
    const response = await api.post(`${BASE_URL}/create`, data)
    if (response.httpStatus === 201) {
      return true;
    }
    return false;
  },
  fetchStudent: async (id) => {
    const response = await api.get(`${BASE_URL}/get/${id}`)
    if (response.httpStatus === 200) {
      console.log(response.data)
      useStudentStore().setStudent(response.data[0])
    }
    return false;
  },
  updateStudent: async (id, data) => {
    const response = await api.put(`${BASE_URL}/update/${id}`, data)
    console.log(response)
    if (response.httpStatus === 200) {
      return true;
    }
    return false;
  },
  deleteStudent: async (id) => {
    const response = await api.put(`${BASE_URL}/delete/${id}`)
    if (response.httpStatus === 200) {
      return true;
    }
    return false;
  }
}

export default studentService
