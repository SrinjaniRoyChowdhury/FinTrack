import { Router } from "express";
import { createUser } from "./user.conroller.js";
import { loginUser } from "./user.conroller.js";

const userRouter = Router();

// @POST    /api/user/signup
userRouter.post("/signup", createUser);
userRouter.post("/login", loginUser);

export default userRouter;