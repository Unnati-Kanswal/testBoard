import express from "express";
import dotenv from "dotenv";
import { mongoDb } from "./config/mongo.js";
import createBoardRouter from "./router/board.route.js";
import getBoardRouter from "./router/board.route.js";
import createTaskRouter from "./router/task.router.js";
import getTaskRouter from "./router/task.router.js";
import updateTaskRouter from "./router/task.router.js";
import delTaskRouter from "./router/task.router.js";
import signupRouter from "./router/user.route.js";
import signinRouter from "./router/user.route.js";

dotenv.config();
const app = express();
app.use(express.json());
const port = process.env.PORT || 5009;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
  mongoDb();
});

app.use("/api/board", createBoardRouter);
app.use("/api/board", getBoardRouter);

app.use("/api/board/task", createTaskRouter);
app.use("/api/board/task", getTaskRouter);
app.use("/api/board/task", updateTaskRouter);
app.use("/api/board/task", delTaskRouter);

app.use("/api/user", signupRouter);
app.use("/api/user", signinRouter);
