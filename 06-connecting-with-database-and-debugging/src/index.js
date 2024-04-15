/************

import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
import { DB_NAME } from "./constants.js";

const PORT = pro.env.PORT || 8000;
const app = express();

(async () => {
  try {
    await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`);

    app.on("error", (error) => {
      console.log("ERROR", error);
      throw error;
    });

    app.listen(PORT, () => {
      console.log(`SERVER RUNNING ON ${PORT}`);
    });
  } catch (error) {
    console.error("ERROR: ", error);
    throw error;
  }
})();

*************/
// require("dotenv").config({ path: "./env" });

import dotenv from "dotenv";
import connectDB from "./db/connectDB.js";

dotenv.config();

connectDB();
