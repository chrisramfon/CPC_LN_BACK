const conn = require('../controllers/mysqlconnection');
const bcrypt = require('bcrypt');
const util = require('util');


const register = {}

register.reg = async(req, res)=>{

    try {
        const queryE = util.promisify(conn.conf.query).bind(conn.conf);
        const rowsE = await queryE('insert into Empleado (nombre, apellido1, apellido2, telefono, estado) values(?, ?, ?, ?, 1);', [req.body.nombre, req.body.apellido1, req.body.apellido2, req.body.telefono]);
        const idE = rowsE.insertId;

        const pass = req.body.pass;
        const salt = await bcrypt.genSalt(10);
        const encrypted = await bcrypt.hash(pass, salt);

        const queryU = util.promisify(conn.conf.query).bind(conn.conf);
        const rowsU = await queryU('insert into Usuario (usuario, pass, correo, estado) values(?, ?, ?, 1);',[req.body.usuario, encrypted, req.body.correo]);
        const idU = rowsU.insertId; 

        const rowsEU = await conn.conf.query('insert into Empleado_Usuario (id_usuario, id_empleado) values(?, ?)', [idU, idE]);
        res.send('Registro insertado con éxito');
    } catch (error) {
        throw error;
    }
}

module.exports = register;