import express from "express";
import { createBoard, getBoard } from "../controllers/board.controller.js";

const router = express.Router();
router.post("/create", createBoard);
router.get("/get", getBoard);
export default router;
