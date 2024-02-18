import apiResponse from "./utils/apiResponse";
import bodyParser from "body-parser";
import cors from "cors";
import express from "express";
import path from "path";
// Routes
import authRouter from "./routes/auth";
import studentsRouter from "./routes/students";
// Docs
import swaggerUi from "swagger-ui-express";
import { apiDocs } from "./docs/apidocs";

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

app
  .use("/auth", authRouter)
  .use("/students", studentsRouter)
  .use("/docs", swaggerUi.serve, swaggerUi.setup(apiDocs));

export default app;
