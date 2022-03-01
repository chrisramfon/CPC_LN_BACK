//genera aqui la conexión a mysql
var mysql = require('mysql');
require('dotenv').config();

const mysqlconnection = {}

mysqlconnection.conf = mysql.createConnection ({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE
});

module.exports = mysqlconnection;