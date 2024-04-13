import "dotenv/config";
import express from "express";
import taskRoutes from "./routes/tasks/task.routes";
import { connect } from "./infra/mongoose/connect";
import cors from "cors";

const c = require("cors");
const corsOptions = {
  origin: "*",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};

const app = express();
app.use(c(corsOptions));
const PORT = 3000;

connect(process.env.MONGO_URL as string)
  .then(() => console.log("connected with Mongo!"))
  .catch((err) => console.log(err));
app.use(express.json());
app.use("/tasks", taskRoutes);

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
