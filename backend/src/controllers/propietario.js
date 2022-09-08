import dbConnection from "../database/connection";
import { passwordGenerator } from "../helpers/passwordGenerator";

export const propietario = {
  agregar: async (req, res) => {
    const { nombre, apellidoP, apellidoM, correo, celular, telefono, fecha_nacimiento } = req.body;
    const tipo = 5;
    const password = passwordGenerator();

    /* Encryptar contraseña para guardar */

    try {
      const db = await dbConnection();

      const emailValidation = await db.query("SELECT * FROM usuarios WHERE correo = ?", [correo]);

      if (emailValidation.length > 0) {
        res.status(200).send({ status: "error_correo", message: "Este correo ya se encuentra registrado" });
      } else {
        const mysqlQuery = await db.query("INSERT INTO usuarios (nombre, apellidoP, apellidoM, correo, password, telefono, celular, fecha_nacimiento, tipo) VALUES ( ?, ?, ?, ?, ?, ?, ?, ?, ? )", [nombre, apellidoP, apellidoM, correo, password, telefono, celular, fecha_nacimiento, tipo]);

        if (mysqlQuery.insertId) {
          /*  
            Enviar email de registro c/ contraseña
          */

          res.status(200).send({ status: "success" });
        } else {
          res.status(200).send({ status: "error", message: "Error al realizar la consulta" });
        }
      }
    } catch (error) {
      res.status(500).send({ status: "error", message: error.message });
    }
  },

  mostrarTodos: async (req, res) => {
    try {
      const db = await dbConnection();

      const mysqlQuery = await db.query("SELECT * FROM usuarios");

      if (mysqlQuery.length > 0) {
        res.status(200).send({ status: "success", data: mysqlQuery });
      } else {
        res.status(200).send({ status: "error", message: "Error al realizar la consulta" });
      }
    } catch (error) {
      res.status(500).send({ status: "error", error });
    }
  },
};
