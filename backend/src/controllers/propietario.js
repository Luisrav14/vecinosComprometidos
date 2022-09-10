import dbConnection from "../database/connection";
import { dataValidation } from "../helpers/dataValidation";
import { passwordGenerator } from "../helpers/passwordGenerator";

export const propietario = {
  agregar: async (req, res) => {
    const { nombre, apellidoP, apellidoM, correo, celular, telefono, fecha_nacimiento, calle, numero, clave_unidad, descripcion, metros2, metodo_pago, cuota_suscripcion, cuota_mantenimiento, tipo_casa, estatus_casa } = req.body;

    const tipo = 5;

    const password = passwordGenerator();

    /* Encryptar contraseña para guardar */

    // if (dataValidation([nombre, apellidoP, apellidoM, correo, celular, calle, numero, clave_unidad, metodo_pago, cuota_suscripcion, cuota_mantenimiento, tipo_casa, estatus_casa])) {
    if (false) {
      res.status(200).send({ status: "error", message: "Campos requeridos incompletos" });
    } else {
      try {
        const db = await dbConnection();

        const emailValidation = await db.query("SELECT * FROM usuarios WHERE correo = ?", [correo]);

        if (emailValidation.length > 0) {
          res.status(200).send({ status: "error_correo", message: "Este correo ya se encuentra registrado" });
        } else {
          const mysqlQuery = await db.query("INSERT INTO usuarios (nombre, apellidoP, apellidoM, correo, password, telefono, celular, fecha_nacimiento, tipo) VALUES ( ?, ?, ?, ?, ?, ?, ?, ?, ? )", [nombre, apellidoP, apellidoM, correo, password, telefono, celular, fecha_nacimiento, tipo]);

          if (mysqlQuery.insertId) {
            /* Enviar email de registro c/ contraseña */

            res.status(200).send({ status: "success" });
          } else {
            res.status(200).send({ status: "error", message: "Error al realizar la consulta" });
          }
        }
      } catch (error) {
        res.status(500).send({ status: "error", message: error.message });
      }
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

  mostrarUno: async (req, res) => {
    const { id_usuario } = req.body;

    try {
      const db = await dbConnection();

      const mysqlQuery = await db.query("SELECT * FROM usuarios WHERE id_usuario = ?", [id_usuario]);

      if (mysqlQuery.length > 0) {
        res.status(200).send({ status: "success", data: mysqlQuery });
      } else {
        res.status(200).send({ status: "error", message: "Error al realizar la consulta" });
      }
    } catch (error) {
      res.status(500).send({ status: "error", error });
    }
  },

  editar: async (req, res) => {
    const { id_usuario, nombre, apellidoP, apellidoM, correo, password, celular, telefono, fecha_nacimiento } = req.body;

    /* Encryptar contraseña para guardar */

    try {
      const db = await dbConnection();

      const emailValidation = await db.query("SELECT * FROM usuarios WHERE correo = ?", [correo]);

      if (emailValidation.length > 0) {
        res.status(200).send({ status: "error_correo", message: "Este correo ya se encuentra registrado" });
      } else {
        const mysqlQuery = await db.query("UPDATE usuarios SET nombre = ?, apellidoP = ?, apellidoM = ?, correo = ?, password = ?, telefono = ?, celular = ?, fecha_nacimiento = ? WHERE id_usuario = ?", [nombre, apellidoP, apellidoM, correo, password, telefono, celular, fecha_nacimiento, id_usuario]);

        if (mysqlQuery.insertId) {
          /* Enviar email de registro c/ contraseña */

          res.status(200).send({ status: "success" });
        } else {
          res.status(200).send({ status: "error", message: "Error al realizar la consulta" });
        }
      }
    } catch (error) {
      res.status(500).send({ status: "error", message: error.message });
    }
  },

  eliminar: async (req, res) => {
    const { id_usuario } = req.body;

    try {
      const db = await dbConnection();

      const mysqlQuery = await db.query("DELETE * FROM usuarios WHERE id_usuario = ?", [id_usuario]);

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
