const internalServerError = {
  description: "Internal Server Error",
  content: {
    "application/json": {
      schema: {
        type: "object",
        properties: {
          message: {
            type: "string",
            example: "Internal Server Error",
          },
        },
      },
    },
  },
};

const unauthorized = {
  description: "Unauthorized",
  content: {
    "application/json": {
      schema: {
        type: "object",
        properties: {
          message: {
            type: "string",
            example: "Unauthorized",
          },
        },
      },
    },
  },
};

const create = {
  tags: ["Students"],
  description: "Create a new student",
  operationId: "createStudent",
  requestBody: {
    content: {
      "application/json": {
        schema: {
          type: "object",
          properties: {
            name: {
              type: "string",
              description: "Student name",
              example: "John Doe",
            },
            email: {
              type: "string",
              description: "Student email",
              example: "",
            },
            cpf: {
              type: "string",
              description: "Student CPF",
              example: "12345678901",
            },
          },
        },
      },
    },
  },
  responses: {
    200: {
      description: "New student created",
    },
    401: unauthorized,
    500: internalServerError,
  },
};

const createBody = {
  type: "object",
  properties: {
    name: {
      type: "string",
      description: "Student name",
      example: "John Doe",
    },
    email: {
      type: "string",
      description: "Student email",
      example: "johndoe@null.net",
    },
    cpf: {
      type: "string",
      description: "Student CPF",
      example: "12345678901",
    },
  },
}

const update = {
  tags: ["Students"],
  description: "Update a student",
  operationId: "updateStudent",
  requestBody: {
    content: {
      "application/json": {
        schema: {
          type: "object",
          properties: {
            name: {
              type: "string",
              description: "Student name",
              example: "John Doe",
            },
            email: {
              type: "string",
              description: "Student email",
              example: "johndoe@null.net",
            },
          },
        },
      },
    },
  },
  responses: {
    200: {
      description: "OK",
    },
    401: unauthorized,
    404: {
      description: "Not Found",
    },
    500: internalServerError,
  },
}

const updateBody = {
  type: "object",
  properties: {
    name: {
      type: "string",
      description: "Student name",
      example: "John Doe",
    },
    email: {
      type: "string",
      description: "Student email",
      example: "johndoe@null.net",
    },
  },
}

const remove = {
  tags: ["Students"],
  description: "Remove a student",
  operationId: "removeStudent",
  requestBody: {
    content: {
      "application/json": {
        schema: {
          type: "object",
          properties: {
            id: {
              type: "number",
              description: "Student ID",
              example: 1,
            },
          },
        },
      },
    },
  },
  responses: {
    200: {
      description: "OK",
    },
    401: unauthorized,
    404: {
      description: "Not Found",
    },
    500: internalServerError,
  },
}

const removeBody = {
  type: "object",
  properties: {
    id: {
      type: "number",
      description: "Student ID",
      example: 1,
    },
  },
}

const list = {
  tags: ["Students"],
  description: "List students",
  operationId: "listStudents",
  responses: {
    200: {
      description: "OK",
    },
    401: unauthorized,
    500: internalServerError,
  },
}

const get = {
  tags: ["Students"],
  description: "Get a student",
  operationId: "getStudent",
  requestBody: {
    content: {
      "application/json": {
        schema: {
          type: "object",
          properties: {
            id: {
              type: "number",
              description: "Student ID",
              example: 1,
            },
          },
        },
      },
    },
  },
  responses: {
    200: {
      description: "OK",
    },
    401: unauthorized,
    404: {
      description: "Not Found",
    },
    500: internalServerError,
  },
};

const getBody = {
  type: "object",
  properties: {
    id: {
      type: "number",
      description: "Student ID",
      example: 1,
    },
  },
}

export {
  create,
  createBody,
  update,
  updateBody,
  remove,
  removeBody,
  list,
  get,
  getBody,
}
