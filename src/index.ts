import express from "express";
import mongoose from "mongoose";
import router from "./routes/routes";

const app = express();
app.use(express.json());

const MONGO_URL = "mongodb://localhost:27017";

mongoose.connect(MONGO_URL, {
    dbName: "TypeScript-CRUD-App",
  })
  .then(() => {
    console.log("DB CONNECTED");
  })
  .catch((error) => console.log(error));

app.use('/',router)

app.listen(3000, () => {
  console.log(`Server running on http://localhost:3000/`);
});