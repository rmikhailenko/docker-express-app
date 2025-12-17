import express from "express";

import { login, registration } from "../controllers/userController.js";

const userRouter = express.Router();

userRouter.post("/auth/login", login);
userRouter.post("/auth/registration", registration);

export default userRouter;
