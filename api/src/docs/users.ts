const login = {
  tags: ["Auth"],
  description: "Login with a valid username and password",
  operationId: "login",
  requestBody: {
    content: {
      "application/json": {
        schema: {
          type: "object",
          properties: {
            username: {
              type: "string",
              description: "Username",
            },
            password: {
              type: "string",
              description: "Password",
            },
          },
        },
      },
    },
  },
  responses: {
    200: {
      description: "OK",
      content: {
        "application/json": {
          schema: {
            type: "object",
            properties: {
              httpStatus: {
                type: "number",
                description: "HTTP status code",
                example: 200,
              },
              message: {
                type: "string",
                description: "Message",
              },
              data: {
                properties: {
                  user: {
                    type: "object",
                    properties: {
                      id: {
                        type: "string",
                        description: "User ID",
                        example: "1",
                      },
                      username: {
                        type: "string",
                        description: "Username",
                        example: "admin",
                      },
                      email: {
                        type: "string",
                        description: "Email",
                        example: "admin@null.net",
                      },
                      password: {
                        type: "string",
                        description: "Password",
                        example:
                          "$2y$10$bXUtc83/GHdhkorKnC/eiuxxgA23CjHAZMJzkRWlNUsPBlwujiM4O",
                      },
                      status: {
                        type: "string",
                        description: "Status",
                        example: "active",
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
    401: {
      description: "Unauthorized",
      content: {
        "application/json": {
          schema: {
            type: "object",
            properties: {
              httpStatus: {
                type: "number",
                description: "HTTP status code",
                example: 401,
              },
              message: {
                type: "string",
                description: "Message",
                example: "Unauthorized",
              },
            },
          },
        },
      },
    },
    500: {
      description: "Internal Server Error",
      content: {
        "application/json": {
          schema: {
            type: "object",
            properties: {
              httpStatus: {
                type: "number",
                description: "HTTP status code",
                example: 500,
              },
              message: {
                type: "string",
                description: "Message",
                example: "Internal Server Error",
              },
            },
          },
        },
      },
    },
  },
};

const loginBody = {
  type: "object",
  properties: {
    username: {
      type: "string",
      description: "Username",
    },
    password: {
      type: "string",
      description: "Password",
    },
  },
};

export { login, loginBody };
