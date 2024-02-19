import type { Knex } from "knex";
import path from "path";

require("dotenv").config({ path: path.join(__dirname, "../../.env") });

// Before starting you need to update the .env file with your database credentials

const config: { [key: string]: Knex.Config } = {
  firstExec: {
    client: "mysql",
    connection: {
      host: process.env.MYSQL_HOST,
      user: process.env.MYSQL_USER,
      password: process.env.MYSQL_PASSWORD,
      charset: "utf8",
    },
    migrations: {
      tableName: "knex_migrations",
      directory: path.join(__dirname, "/migrations"),
    },
    seeds: {
      directory: path.join(__dirname, "/seeds"),
    },
  },

  test: {
    client: "mysql",
    connection: {
      host: process.env.MYSQL_TEST_HOST,
      user: process.env.MYSQL_TEST_USER,
      password: process.env.MYSQL_TEST_PASSWORD,
      database: process.env.MYSQL_DB_TEST_NAME,
      timezone: "UTC",
      charset: "utf8",
    },
    migrations: {
      tableName: "knex_migrations",
      directory: path.join(__dirname, "/migrations"),
    },
    seeds: {
      directory: path.join(__dirname, "/seeds"),
    },
  },

  development: {
    client: "mysql",
    connection: {
      host: process.env.MYSQL_HOST,
      user: process.env.MYSQL_USER,
      password: process.env.MYSQL_PASSWORD,
      database: process.env.MYSQL_DB_NAME,
      timezone: "UTC -3",
      dateStrings: true,
      charset: "utf8",
    },
    migrations: {
      tableName: "knex_migrations",
      directory: path.join(__dirname, "/migrations"),
    },
    seeds: {
      directory: path.join(__dirname, "/seeds"),
    },
  },

  staging: {
    client: "mysql",
    connection: {
      host: process.env.MYSQL_HOST,
      user: process.env.MYSQL_USER,
      password: process.env.MYSQL_PASSWORD,
      charset: "utf8",
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
    },
  },

  production: {
    client: "mysql",
    connection: {
      host: process.env.MYSQL_HOST,
      user: process.env.MYSQL_USER,
      password: process.env.MYSQL_PASSWORD,
      charset: "utf8",
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
    },
  },
};

export default config;
