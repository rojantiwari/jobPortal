import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";

import userRoute from "./routes/user.route.js";
import companyRoute from "./routes/company.route.js";
import jobRoute from "./routes/job.route.js";
import applicationRoute from "./routes/application.route.js";

import connectDB from "./DB/db-config.js";

import path from "path";

dotenv.config({ path: "./.env" });

const app = express();

const _dirName = path.resolve();

//middleware
// origin: "http://127.0.0.1/:5173",

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

const corsOptions = {
  origin: "http://localhost:5173",
  credentials: true,
};

app.use(cors(corsOptions));

const port = process.env.PORT || 8080;

//api's

app.use("/api/v1/user", userRoute);
app.use("/api/v1/company", companyRoute);
app.use("/api/v1/job", jobRoute);
app.use("/api/v1/application", applicationRoute);

app.use(express.static(path.join(_dirName, "/frontend/dist")));
app.get("*", (_, res) => {
  res.sendFile(path.resolve(_dirName, "frontend", "dist", "index.html"));
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "Something went wrong!", success: false });
});

app.listen(port, () => {
  connectDB();
  console.log(`Server is running at port ${port}`);
});
