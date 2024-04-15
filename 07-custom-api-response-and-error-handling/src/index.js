import dotenv from "dotenv";
import connectDB from "./db/connectDB.js";
import app from "./app.js";

dotenv.config();

connectDB()
  .then(() => {
    app.on("error", (error) => {
      console.error("ERROR", error);
      throw error;
    });
    app.listen(process.env.PORT || 8000, () => {
      console.log(`SERVER RUNNING ON ${process.env.PORT || 8000}`);
    });
  })
  .catch((err) => console.log("MONGODB CONNECTION FAILED", err));
