/** @format */

import express from "express";
import commonController from "../controllers/commonController.js";
const router = express.Router();

router.put("/assign-mentor/:studentId/:mentorId",commonController.assignStudentToMentor);
router.put("/assign-or-change-mentor/:studentId/:newMentorId", commonController.assignOrChangeMentorForStudent);
router.get("/mentor-students/:mentorId", commonController.getMentorStudents);
router.get("/previous-mentor/:studentId", commonController.getPreviousMentor);

export default router;
