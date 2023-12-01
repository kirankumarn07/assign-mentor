/** @format */

import express from "express";
import mentorRouter from "./mentorRouter.js";
import studentRouter from "./studentRouter.js";
import commonRouter from "./commonRouter.js";
const router = express.Router();

router.use("/mentors", mentorRouter);
router.use("/common", commonRouter);
router.use("/students", studentRouter);

export default router;
