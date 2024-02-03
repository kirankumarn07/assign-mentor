/** @format */

import express from "express";
import AppRouter from "./routers/router.js";
import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();
const app = express();
const PORT = Number(8501);

app.use(express.json());
app.use("/", AppRouter);

app.get("/", (req, res) => {
  res.send("Welcome to the Server! 🌐");
});

mongoose
  .connect(`mongodb+srv://kirankumarnaga7:Nkiran07@assignmentorcluster.ldpor5b.mongodb.net/?retryWrites=true&w=majority`)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
