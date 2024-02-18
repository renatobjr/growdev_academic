import app from "./app";
import knex from "knex";
import config from "./db/knexfile";

const knexConnect = knex(config["firstExec"]);

app.listen(process.env.PORT, () => {
  knexConnect
    .raw(`CREATE DATABASE IF NOT EXISTS ${process.env.MYSQL_DB_NAME}`)
    .then(() => {
      console.log(
        `Database ${process.env.MYSQL_DB_NAME} created or successfully checked`
      );
      knexConnect.destroy();
    });
  console.log(`Server is running on port ${process.env.PORT}`);
});
