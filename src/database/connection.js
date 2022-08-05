import mysql from "promise-mysql";
import { devServer } from "./config";

const connection = mysql.createConnection(devServer);

export default function dbConnection() {
  return connection;
}
