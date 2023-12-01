/** @format */

import express from "express";
import mentorController from "../controllers/mentorController.js";
const router = express.Router();

router.post("/create", mentorController.createMentor);
router.get("/all", mentorController.getAllMentors);

export default router;
