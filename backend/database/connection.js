const mysql = require("mysql");
const { devServer } = require("./keys");

const connection = mysql.createConnection(devServer);

connection.connect((err) => {
  if (err) {
    console.error("[mysql] Error connecting: " + err.stack);
    return;
  }
  console.log("[mysql] Database connected as id #" + connection.threadId);
});
