import { generateJWT } from "../helpers/jwt";
import dbConnection from "../database/connection";

export const auth = {
  validation: async (req, res) => {
    const correo = req.body.correo;
    const password = req.body.password;

    try {
      const db = await dbConnection();
      const isUser = await db.query("SELECT * FROM usuarios WHERE correo = ?", [correo]);

      if (isUser.length > 0) {
        const data = await db.query("SELECT * FROM usuarios WHERE correo = ? AND password = ?", [correo, password]);

        if (data.length > 0) {
          const token = await generateJWT(data);

          //res.setHeader("Set-Cookie", serializedToken);

          return res.status(200).send({
            status: "success",
            data,
            token,
          });
        } else {
          res.status(200).send({
            status: "error_password",
            message: "Contraseña incorrecta",
          });
        }
      } else {
        res.status(200).send({
          status: "error_email",
          message: "Correo no existe",
        });
      }
    } catch (error) {
      res.status(500).send({
        status: "error",
        message: error.message,
      });
    }
  },
};
