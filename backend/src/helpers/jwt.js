import jwt from "jsonwebtoken";
import { serialize } from "cookie";

export const generateJWT = (data) => {
  const authToken = jwt.sign({ exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24, data }, "secret");

  const serializedToken = serialize("authToken", authToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "none",
    maxAge: 1000 * 60 * 60 * 24,
    path: "/",
  });

  return { authToken, serializedToken };
};
