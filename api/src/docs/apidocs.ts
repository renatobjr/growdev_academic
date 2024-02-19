import { login, loginBody } from "./users"
import { create, createBody, update,updateBody, remove, removeBody, list, get } from "./students"


const apiDocs = {
  openapi: '3.0.0',
  info: {
    title: 'API',
    version: '1.0.0',
    description: 'API Documentation',
  },
  servers: [
    {
      url: 'http://localhost:3000',
      description: 'Development server',
    },
  ],
  paths: {
    auth: {
      post: login,
    },
    students: {
      post: create,
      list: list,
      put: update,
      delete: remove,
      get: get,
    }
  },
  components: {
    schemas: {
      login: loginBody,
      create: createBody,
      update: updateBody,
      remove: removeBody,
    },
  }
}

export { apiDocs }
