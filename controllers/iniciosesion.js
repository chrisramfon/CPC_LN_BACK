const conn = require('../controllers/mysqlconnection');
const mysql = require('mysql');

const iniciosesion = {}

iniciosesion.conectar = ()=>{
    conn.conf.connect(function(err) {
        if (err) {
          console.error('error connecting: ' + err.stack);
          return;
        }
        console.log('connected as id ' + connection.threadId);
      });
}

module.exports = iniciosesion;