//genera aqui la conexión a mysql
var mysql = require('mysql');

const mysqlconnection = {}

mysqlconnection.conf = mysql.createConnection ({
    host: 'localhost',
    user: 'root',
    password: 'Instala1.',
    database: 'LimpiezaN'
});

module.exports = mysqlconnection;