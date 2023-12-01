/** @format */
import Student from "../models/studentModel.js";

const createStudent = async (req, res, next) => {
  try {
    const { name } = req.body;
    if (!name) {
      return res.status(400).json({ error: "Name is a required field." });
    }
    const existingStudent = await Student.findOne({ name });
    if (existingStudent) {
      return res
        .status(400)
        .json({ error: "Student with the same name already exists." });
    }
    const student = await Student.create(req.body);
    res.status(201).json({ message: "Student created successfully", student });
  } catch (error) {
    console.error(error);
    next(error);
  }
};

const getAllStudents = async (req, res, next) => {
  try {
    const allStudents = await Student.find();
    res.json(allStudents);
  } catch (error) {
    next(error);
  }
};

export default {
  createStudent,
  getAllStudents,
};
