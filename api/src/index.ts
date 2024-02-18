import app from "./app";
import createDatabase from "./db/createDatabase";

app.listen(process.env.PORT, () => {
  createDatabase();
  console.log(`Server is running on port ${process.env.PORT}`);
});
