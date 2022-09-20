import dbConnection from "../database/connection";

export const casas_renta = {
  mostrarTodos: async (req, res) => {
    try {
      const db = await dbConnection();

      const mysqlQuery = await db.query("SELECT *, arrendatario.nombre AS arr_nombre, arrendatario.apellidoP AS arr_ap, arrendatario.apellidoM AS arr_ap FROM arrendatario INNER JOIN usuarios ON arrendatario.fk_propietario = usuarios.id_usuario INNER JOIN propiedad ON usuarios.id_usuario = propiedad.fk_propietario WHERE tipo = 5 AND propiedad.estatus_casa = 'rentada'");

      if (mysqlQuery.length > 0) {
        res.status(200).send({ status: "success", data: mysqlQuery });
      } else {
        res.status(200).send({ status: "empty", message: "No se encontraron registros" });
      }
    } catch (error) {
      res.status(500).send({ status: "error", error });
    }
  },

  mostrarUno: async (req, res) => {
    const id_usuario = req.params.uid;

    try {
      const db = await dbConnection();

      const mysqlQuery = await db.query("SELECT * FROM arrendatario INNER JOIN usuarios ON arrendatario.fk_propietario = usuarios.id_usuario INNER JOIN propiedad ON usuarios.id_usuario = propiedad.fk_propietario WHERE tipo = 5 AND id_usuario = ?", [id_usuario]);

      if (mysqlQuery.length > 0) {
        res.status(200).send({ status: "success", data: mysqlQuery });
      } else {
        res.status(200).send({ status: "empty", message: "No se encontraron registros" });
      }
    } catch (error) {
      res.status(500).send({ status: "error", error });
    }
  },

  editar: async (req, res) => {
    const id_usuario = req.params.uid;

    const data = req.body;

    try {
      const db = await dbConnection();

      const mysqlQuery = await db.query("UPDATE casas_renta SET data = ? WHERE fk_propietario = ?", [data, id_usuario]);

      if (mysqlQuery.insertId) {
        res.status(200).send({ status: "success" });
      } else {
        res.status(200).send({ status: "error", message: "Error al realizar la consulta" });
      }
    } catch (error) {
      res.status(500).send({ status: "error", message: error.message });
    }
  },

  eliminar: async (req, res) => {
    const id_usuario = req.params.uid;

    try {
      const db = await dbConnection();

      const mysqlQuery = await db.query("DELETE * FROM casas_renta WHERE id_usuario = ?", [id_usuario]);

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
