const conn = require('../controllers/mysqlconnection');
const mysql = require('mysql');
const res = require('express/lib/response');
const { send } = require('express/lib/response');

const iniciosesion = {}

iniciosesion.conectar = ()=>{
    conn.conf.connect(function(err) {
        if (err) {
          console.error('error connecting: ' + err.stack);
          return;
        }
        console.log('connected as id ' + conn.conf.threadId);
      });
      console.log('Conectó chido');
}

module.exports = iniciosesion;