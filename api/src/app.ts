import apiResponse from "./utils/apiResponse";
import bodyParser from "body-parser";
import cors from "cors";
import express from "express";
import path from "path";

require("dotenv").config({ path: path.join(__dirname, "../.env") });

const app = express();

app.use(cors());
app.use(
  bodyParser.json({
    limit: "50mb",
  })
);

app.use(
  bodyParser.urlencoded({
    limit: "50mb",
    extended: true,
  })
);

app.get("/", (req, res) => {
  res.send(apiResponse(200, "Welcome to the API", null));
});

export default app;
