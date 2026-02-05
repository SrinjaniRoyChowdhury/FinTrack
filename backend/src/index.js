import express from "express"
import userRouter from "./user/user.routes.js";
import morgan from "morgan";
import mongoose from "mongoose";

import dotenv from "dotenv";
dotenv.config();


const app = express();

import cookieParser from "cookie-parser";
app.use(cookieParser());

// app level middleware
app.use(morgan('dev'));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`));

mongoose.connect(process.env.DB_URL)
.then(() => console.log("Database connected !"))
.catch(() => console.log("Database not connected"));

// to receive data in the server
app.use(express.json());
app.use(express.urlencoded({ extended : false}));

// route level middleware
app.use("/api/user", userRouter);