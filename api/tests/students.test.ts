import request from 'supertest';
import app from '../src/app';
import { describe, it, expect } from '@jest/globals';
import { insertStudent, updateStudent } from '../src/data/students.test.data';

let studentId: number = 1;

describe('POST /students/create', () => {
  it('should return 201 Created', async () => {
    const response: request.Response = await request(app)
      .post('/students/create')
      .send(insertStudent);

    expect(response.body.httpStatus).toEqual(201);
  });
});

describe('PUT /students/update', () => {
  it('should return 200 OK', async () => {
    const response: request.Response = await request(app)
      .put('/students/update')
      .send(updateStudent);

    expect(response.body.httpStatus).toEqual(200);
  });
})

describe('GET /students', () => {
  it('should return 200 OK', async () => {
    const response: request.Response = await request(app)
      .get('/students/list');

    expect(response.body.httpStatus).toEqual(200);
  });
});

describe('GET /students/:id', () => {
  it('should return 200 OK', async () => {
    const response: request.Response = await request(app)
      .get(`/students/${studentId}`);

    expect(response.body.httpStatus).toEqual(200);
  });
})

describe("DELETE /students/delete/:id", () => {
  it("should return 200 OK", async () => {
    const response: request.Response = await request(app).delete(
      `/students/delete/${studentId}`
    );

    expect(response.body.httpStatus).toEqual(200);
  });
});
