//genera aqui la conexión a mysql
var mysql = require('mysql');

const mysqlconnection = {}

mysqlconnection.conf = mysql.createConnection ({
    host: 'localhost',
    user: 'sa',
    password: 'secret',
    database: 'LimpiezaLN'
});

module.exports = mysqlconnection;