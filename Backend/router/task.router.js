import express from "express";
import {
  createTask,
  delTask,
  getTask,
  updateTask,
} from "../controllers/task.controller.js";

const router = express.Router();
router.post("/create/:paramsboardId", createTask);
router.get("/get/:id", getTask);
router.put("/update/:id", updateTask);
router.delete("/del/:id", delTask);
export default router;
