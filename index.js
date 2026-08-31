import * as dotenv from "dotenv";
dotenv.config();
import express from "express";
import crypto from "crypto";
import cors from "cors";
import mongoose from "mongoose";
import Blog from "./models/Blog.js";

import userRouter from "./routers/userRouter.js";
import blogRouter from "./routers/blogRouter.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//CORS for accepting request from everywhere
// app.use(cors());

// CORS with options and retrictions
app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin) return callback(null, true);

      const allowedOrigins = [
        "http://localhost:5173",
        "https://blogshafifrontend.netlify.app",
      ];

      if (allowedOrigins.includes(origin)) {
        return callback(null, true);
      }

      return callback(null, false);
    },
    credentials: true,
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization", "X-Requested-With"],
  }),
);

app.get("/", (req, res) => {
  res.status(200).json({ message: "Welcome to BLOG API Services" });
});

app.use("/api/v1/blogs", blogRouter);

const port = 3000;
try {
  await mongoose.connect(process.env.MONGODB_URL);
  console.log("Database Connected");
  app.listen(port, () => {
    console.log(`Server connected successfully on port ${port}`);
  });
} catch (error) {
  console.log(error);
  process.exit(1);
}
