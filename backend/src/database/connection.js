import mysql from "promise-mysql";
import { dbServer } from "./config";

const connection = mysql.createConnection(dbServer);

export default function dbConnection() {
  return connection;
}
