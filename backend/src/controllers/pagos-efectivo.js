import dbConnection from "../database/connection";
import { dataValidation } from "../helpers/dataValidation";
import { passwordGenerator } from "../helpers/passwordGenerator";

export const pagosefectivo = {
 


  mostrarTodos: async (req, res) => {
    

    try {
      const db = await dbConnection();

      const mysqlQuery = await db.query("SELECT * FROM suscripcion");

      if (mysqlQuery.length > 0) {
        res.status(200).send({ status: "success", data: mysqlQuery });
      } else {
        res.status(200).send({ status: "error", message: "Error al realizar la consulta 1" });
      }
    } catch (error) {
      res.status(500).send({ status: "error", error });
    }
  },

  

};
