const conn = require('../controllers/mysqlconnection');

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