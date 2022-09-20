import { Router } from "express";

import { auth, propietario, asamblea,actasyacuerdos } from "../controllers/";
import { casas_renta } from "../controllers/casas-renta";

const router = Router();

/* Auth routes */

router.post("/login", auth.validation);

/* Propietarios routes */

router.get("/propietarios/", propietario.mostrarTodos);
router.get("/propietarios/:uid", propietario.mostrarUno);
router.post("/propietarios/agregar", propietario.agregar);
router.post("/propietarios/editar/:uid", propietario.editar);
router.post("/propietarios/eliminar/:uid", propietario.eliminar);

router.get("/casas-renta/", casas_renta.mostrarTodos);
router.get("/casas-renta/:cid", casas_renta.mostrarUno);

router.get("/asamblea/mostrarTodos", asamblea.mostrarTodos);
router.get("/asamblea/mostrarDos", asamblea.mostrarDos);

router.get("/actas/mostrarTodos", asamblea.mostrarTodosA);

export default router;
