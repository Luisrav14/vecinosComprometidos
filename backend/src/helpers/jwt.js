import jwt from "jsonwebtoken";
import { serialize } from "cookie";

export const generateJWT = (data) => {
  return new Promise((resolve, reject) => {
    const payload = { data };

    jwt.sign(
      payload,
      "secret",
      {
        expiresIn: "2h",
      },
      (error, token) => {
        if (error) {
          console.log(error);
          reject("No se pudo generar el token");
        }
        // const serializedToken = serialize("authToken", token, {
        //   httpOnly: true,
        //   secure: process.env.NODE_ENV === "production",
        //   sameSite: "none",
        //   maxAge: 1000 * 60 * 60 * 24,
        //   path: "/",
        // });
        resolve(token);
      }
    );
  });
};
