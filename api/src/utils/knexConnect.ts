import config from "../db/knexfile";
import knex from "knex";
import path from "path";

require("dotenv").config({ path: path.join(__dirname, "../../.env") });

const env = process.env.NODE_ENV || "development";
const knexConnect = knex(config[env]);

export default knexConnect;
