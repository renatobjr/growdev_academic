import { Knex } from "knex";
import students from "../../utils/students";

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex("students").del();

    // Inserts seed entries
    await knex("students").insert([
      { id: 1, RA: students.generateRA(), name: 'Jane Smith', email: 'janesmith@null.net', cpf: '12312312312', status: 'active' },
      { id: 2, RA: students.generateRA(), name: 'Paul Smith', email: 'paulsmith@null.net', cpf: '12312312312', status: 'active' },
      { id: 3, RA: students.generateRA(), name: 'John Smith', email: 'johnsmith@null.net', cpf: '12312312312', status: 'active' },
      { id: 4, RA: students.generateRA(), name: 'Neo', email: 'neo@null.net', cpf: '12312312312', status: 'active' },
    ]);
};
