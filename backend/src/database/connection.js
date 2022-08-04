const mysql = require("mysql2/promise");
const { devServer } = require("./config");

const connection = async () => await mysql.createConnection(devServer);

module.exports = connection;
