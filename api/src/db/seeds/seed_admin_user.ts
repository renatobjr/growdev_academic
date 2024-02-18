import { Knex } from "knex";
import bcrypt from "bcryptjs";

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex("users").del();

  // Inserts seed entries
  await knex("users").insert([
    {
      id: 1,
      username: "admin",
      email: "admin@null.net",
      password: bcrypt.hashSync("admin", 10),
      status: "active",
    },
  ]);
}
