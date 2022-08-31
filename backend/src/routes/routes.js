import { Router } from "express";
import { loginController } from "../controllers/loginController";

const router = Router();

router.get("/test", loginController.test);
router.post("/login", loginController.validation);

export default router;
