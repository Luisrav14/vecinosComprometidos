import dbConnection from "../database/connection";

export const propietario = {
  agregar: async (req, res) => {
    const data = req.body;

    try {
      const db = await dbConnection();
    } catch (error) {
      res.status(500).send({ status: "error", message: error.message });
    }
  },
};
