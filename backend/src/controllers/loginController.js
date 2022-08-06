import dbConnection from "../database/connection";

export const loginController = {
  test: async (req, res) => {
    try {
      const db = await dbConnection();
      const data = await db.query(`SELECT * FROM users`);

      res.status(200).send({
        status: "success",
        data,
      });
    } catch (error) {
      res.status(500).send({
        status: "error",
        mensaje: error.message,
      });
    }
  },

  validation: async (req, res) => {
    const correo = req.body.correo;
    const password = req.body.password;

    try {
      const db = await dbConnection();
      const isUser = await db.query("SELECT * FROM users WHERE correo = ?", [correo]);

      if (isUser.length > 0) {
        const data = await db.query("SELECT * FROM users WHERE correo = ? AND password = ?", [correo, password]);

        if (data.length > 0) {
          res.status(200).send({
            status: "success",
            data,
          });
        } else {
          res.status(200).send({
            status: "error",
            message: "Contraseña incorrecta",
          });
        }
      } else {
        res.status(200).send({
          status: "error",
          message: "Correo no existe",
        });
      }
    } catch (error) {
      res.status(500).send({
        status: "error",
        mensaje: error.message,
      });
    }
  },
};
