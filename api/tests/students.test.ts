import request from 'supertest';
import app from '../src/app';
import { describe, expect, test } from '@jest/globals';
import { insertStudent, updateStudent } from '../src/data/students.test.data';
// import test from 'node:test';

let studentId: number = 1;

describe('POST /students/create', () => {
  test('should return 201 Created', async () => {
    const response: request.Response = await request(app)
      .post('/students/create')
      .send(insertStudent);

    expect(response.body.httpStatus).toEqual(201);
  })
});

describe('PUT /students/update', () => {
  test('should return 200 OK', async () => {
    const response: request.Response = await request(app)
      .put(`/students/update/${studentId}`)
      .send(updateStudent);

    expect(response.body.httpStatus).toEqual(200);
  });
})

describe('GET /students/list', () => {
  test('should return 200 OK', async () => {
    const response: request.Response = await request(app)
      .get('/students/list');

    expect(response.body.httpStatus).toEqual(200);
  });
});

describe('GET /students/get/:id', () => {
  test('should return 200 OK', async () => {
    const response: request.Response = await request(app)
      .get(`/students/get/${studentId}`);

    expect(response.body.httpStatus).toEqual(200);
  });
})

describe("DELETE /students/delete/:id", () => {
  test("should return 200 OK", async () => {
    const response: request.Response = await request(app).delete(
      `/students/delete/${studentId}`
    );

    expect(response.body.httpStatus).toEqual(200);
  });
});
