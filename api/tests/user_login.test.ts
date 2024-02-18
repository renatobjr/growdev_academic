import request from "supertest";
import app from "../src/app";
import { describe, it, expect } from "@jest/globals";

describe("POST /auth/login", () => {
  it("should return 200 OK", async () => {
    const response: request.Response = await request(app)
      .post("/auth/login")
      .send({ username: "admin", password: "admin" });

    expect(response.body.httpStatus).toEqual(200);
  });
});

describe("POST /auth/login", () => {
  it("should return 401 Unauthorized with wrong password", async () => {
    const response: request.Response = await request(app)
      .post("/auth/login")
      .send({ username: "admin", password: "wrong" });

    expect(response.body.httpStatus).toEqual(401);
  });
});

describe("POST /auth/login", () => {
  it("should return 401 Unauthorized with wrong username", async () => {
    const response: request.Response = await request(app)
      .post("/auth/login")
      .send({ username: "wrong", password: "admin" });

    expect(response.body.httpStatus).toEqual(401);
  });
});
