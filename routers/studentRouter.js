/** @format */

import express from "express";
import studentController from "../controllers/studentController.js";
const router = express.Router();

router.post("/create", studentController.createStudent);
router.get("/all", studentController.getAllStudents);

export default router;
