import { Router } from "express";
import { auth } from "../controllers/auth";

const auth_router = Router();

auth_router.post("/login", auth.validation);

export default auth_router;
