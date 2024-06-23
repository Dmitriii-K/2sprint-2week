import { Router } from "express";
import { authUser } from "./authController";
import { authCheckValidation } from "../middlewares/middlewareForAll";
import { bearerAuth } from "../middlewares/middlewareForAll";

export const authRouter = Router();

authRouter.post("/login", authCheckValidation, authUser);
authRouter.get("/me", bearerAuth, authUser);
