import { Router } from "express";
import { auth, propietario } from "../controllers/";

const router = Router();

/* Auth routes */

router.post("/login", auth.validation);

/* Propietarios routes */

router.post("propietarios/agregar", propietario.agregar);

export default router;
