import dbConnection from "../database/connection";
import { dataValidation } from "../helpers/dataValidation";
import { passwordGenerator } from "../helpers/passwordGenerator";

export const propietario = {

  agregar: async (req, res) => {
    
    const { nombre, apellidoP, apellidoM, correo, celular, telefono, fecha_nacimiento, 
      calle, numero, clave_unidad, descripcion, metros2, metodo_pago, cuota_suscripcion, cuota_mantenimiento,
       tipo_casa, estatus_casa, razon_social, correo_factura, rfc, fraccionamiento, calle_factura, num_int, num_ext, 
       codigo_postal, ciudad, estado, pais, metodo_pago_factura, forma_pago, cfdi, regimen_fiscal } = req.body;

    if (tipo_casa === "baldio") {
      const { lote_calle, lote_colonia, lote_cp, lote_ciudad, lote_telefono, lote_correo } = req.body;
    } else {
      const lote_calle = null;
      const lote_colonia = null;
      const lote_cp = null;
      const lote_ciudad = null;
      const lote_telefono = null;
      const lote_correo = null;
    }

    const tipo = 5;
    const password = passwordGenerator();

    console.table(req.body);

    /* Encryptar contraseña para guardar */

    // if (dataValidation([nombre, apellidoP, apellidoM, correo, celular, calle, numero, clave_unidad, metodo_pago, cuota_suscripcion, cuota_mantenimiento, tipo_casa, estatus_casa])) {
    if (false) {
      res.status(200).send({ status: "error", message: "Campos requeridos incompletos" });
    } else {
      try {
        const db = await dbConnection();

        // const emailValidation = await db.query("SELECT * FROM usuarios WHERE correo = ?", [correo]);

        // if (emailValidation.length > 0) {
        if (false) {
          res.status(200).send({ status: "error_correo", message: "Este correo ya se encuentra registrado" });
        } else {
          const usuarioQuery = await db.query("INSERT INTO usuarios ( nombre, apellidoP, apellidoM, correo, password, telefono, celular, fecha_nacimiento, tipo) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ? )", [nombre, apellidoP, apellidoM, correo, password, telefono, celular, fecha_nacimiento, tipo]);
          console.log(usuarioQuery.insertId);
          const propiedadQuery = await db.query("INSERT INTO propiedad (calle, numero_ext, unidad, tipo_casa, estatus_casa, cuota, cuota_efectivo, metodo_pago, m2, descripcion, pin_habilitado, calle_lote, colonia_lote, tel_lote, correo_lote, ubicacion, fk_propietario) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)", [calle, numero, clave_unidad, tipo_casa, estatus_casa, cuota_suscripcion, cuota_mantenimiento, metodo_pago, metros2, descripcion, 1, lote_calle, lote_colonia, lote_telefono, lote_correo, lote_ciudad, usuarioQuery.insertId]);
          const facturacionQuery = await db.query("INSERT INTO facturacion_datos (razon_social, rfc, correo, fraccionamiento, calle, numero_ext, numero_int, cp, ciudad, estado, pais, forma_pago, metodo_pago, uso_cfdi, regimen_fiscal, fk_propietario) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)", [razon_social, rfc, correo_factura, fraccionamiento, calle_factura, num_ext, num_int, codigo_postal, ciudad, estado, pais, forma_pago, metodo_pago_factura, cfdi, regimen_fiscal, usuarioQuery.insertId]);

          if (estatus_casa === "rentada") {
            const { inquilino_nombre, inquilino_apellidoP, inquilino_apellidoM, inquilino_correo, inquilino_celular, inquilino_telefono } = req.body;

            const rentaQuery = db.query("INSERT INTO arrendatario (nombre, apellidoP, apellidoM, correo, telefono, celular, fk_propiedad, fk_propietario) VALUES (?,?,?,?,?,?,?,?)", [inquilino_nombre, inquilino_apellidoP, inquilino_apellidoM, inquilino_correo, inquilino_telefono, inquilino_celular, propiedadQuery.insertId, mysqlQuery.insertId]);

            if (!rentaQuery.insertId) {
              res.status(200).send({ status: "error", message: "Error al realizar la inserción [renta]" });
            }
          }
          /* if (usuarioQuery.insertId) {
            /* if (!propiedadQuery.insertId || !facturacionQuery.insertId) {
              res.status(200).send({ status: "error", message: "Error al realizar la inserción [facturacion/propiedad]" });
            } */

          /* Enviar email de registro c/ contraseña 

            res.status(200).send({ status: "success" });
          } else {
          } */
          res.status(200).send({ status: "error", message: "Error al realizar la inserción" });
        }
      } catch (error) {
        res.status(500).send({ status: "error", message: error.message });
      }
    }
  },

  mostrarTodos: async (req, res) => {
    try {
      const db = await dbConnection();

      const mysqlQuery = await db.query("SELECT * FROM usuarios WHERE tipo = 5");

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
    // const { id_usuario } = req.body;
    const id_usuario = req.params.uid;

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
    const id_usuario = req.params.uid;

    const { nombre, apellidoP, apellidoM, correo, password, celular, telefono, fecha_nacimiento } = req.body;

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
    // const { id_usuario } = req.body;
    const id_usuario = req.params.uid;

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
