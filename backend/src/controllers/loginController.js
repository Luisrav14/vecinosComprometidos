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
    const correo = req.params.correo;
    const password = req.params.password;

    console.log(req);

    try {
      const db = await dbConnection();
      const data = await db.query("SELECT * FROM users WHERE correo = ? AND password = ?", [correo, password]);

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
};
