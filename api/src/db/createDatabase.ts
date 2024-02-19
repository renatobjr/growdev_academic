import knex from "knex";
import path from "path";
import config from "./knexfile";

require("dotenv").config({ path: path.join(__dirname, "../.env") });

const createDatabase = async () => {
  // Create both databases if they don't exist
  // Growdev database
  const knexConnect = knex(config["firstExec"]);
  await knexConnect.raw(`CREATE DATABASE IF NOT EXISTS ${process.env.MYSQL_DB_NAME}`);
  await knexConnect.destroy();
  // Growdev test database
  const knexConnectTest = knex(config["test"]);
  await knexConnectTest.raw(`CREATE DATABASE IF NOT EXISTS ${process.env.MYSQL_DB_TEST_NAME}`);
  await knexConnectTest.destroy();
}

export default createDatabase;
