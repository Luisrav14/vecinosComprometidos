import { Router } from "express";
import { auth } from "../controllers/auth";

const router = Router();

router.get("/test", auth.test);
router.post("/login", auth.validation);

export default router;
