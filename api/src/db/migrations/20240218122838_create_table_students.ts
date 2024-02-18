import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable("students", (table) => {
    table.increments("id").primary();
    table.bigint('RA').notNullable();
    table.string("name").notNullable();
    table.string("email").notNullable();
    table.string("CPF").notNullable();
    table.string("status").notNullable();
    table.timestamps(true, true);
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable("students");
}
