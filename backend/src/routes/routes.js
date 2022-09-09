import { Router } from "express";
import { auth, propietario } from "../controllers/";

const router = Router();

/* Auth routes */

router.post("/login", auth.validation);

/* Propietarios routes */

router.get("/propietarios/", propietario.mostrarTodos);
router.get("/propietarios/:uid", propietario.mostrarUno);
router.post("/propietarios/agregar", propietario.agregar);
router.post("/propietarios/editar/:uid", propietario.editar);
router.post("/propietarios/eliminar/:uid", propietario.eliminar);

export default router;
