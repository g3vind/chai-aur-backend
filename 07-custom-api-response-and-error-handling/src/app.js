import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

// Middleware
app.use(
  cors({
    // FRONTEND
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

// accepting json data
app.use(express.json({ limit: "16kb" }));

// using files as public assets
app.use(express.static("public"));

// accepting data from url
app.use(express.urlencoded({ extended: true, limit: "16kb" }));

// handling with cookies in user's browser
app.use(cookieParser());

export default app;
