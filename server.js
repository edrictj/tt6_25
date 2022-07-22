import db from "./database.js";
import router from "./router.js";
import express from "express";
import cors from "cors";

const app = express();

try {
  await db.authenticate();
  console.log("Database connected...");
} catch (error) {
  console.error("Connection error:", error);
}

app.use(cors());
app.use(express.json());
app.use("/", router);

const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`Server listening on ${port}`);
});
