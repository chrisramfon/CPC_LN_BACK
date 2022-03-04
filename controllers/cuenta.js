const conn = require('./mysqlconnection');
const util = require('util');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const cuenta = {}

cuenta.reg = async(req, res)=>{
    try {
        if(req.body.token == "") throw "Falta token";
        const valida = await jwt.verify(req.body.token, process.env.SECRET);
        const query = util.promisify(conn.conf.query).bind(conn.conf);
        const rows = await query('insert into Cuenta (cuenta, banco, estado) values (?, ?, 1)', [req.body.cuenta, req.body.banco]);
        res.send('Cuenta registrada').status(200);
    } catch (error) {
        res.send(`Error al registrar cuenta: ${error}`).status(400);
    }
}

cuenta.everyone = async (req, res)=>{
    try {
        if(req.body.token == "") throw "Falta token";
        const valida = await jwt.verify(req.body.token, process.env.SECRET);
        const query = util.promisify(conn.conf.query).bind(conn.conf);
        const rows = await query('select * from Cuenta where estado = 1');
        res.send(rows).status(200);

    } catch (error) {
        res.send(`Error al buscar las cuentas: ${error}`).status(400);
    }

}

cuenta.find = async (req,res)=>{
    try {
        if(req.body.token == "") throw "Falta token";
        const valida = await jwt.verify(req.body.token, process.env.SECRET);
        const query = util.promisify(conn.conf.query).bind(conn.conf);
        const rows = await query('select * from Cuenta where ? like cuenta and estado = 1', [req.body.cuenta]);
        if(Object.keys(rows).length === 0) throw "El número de cuenta no existe";
        res.send(rows).status(200);
    } catch (error) {
        res.send(`Error al buscar la cuenta: ${error}`).status(400);
    }
}

cuenta.down = async (req, res) =>{
    try {
        if(req.body.token == "") throw "Falta token";
        const valida = await jwt.verify(req.body.token, process.env.SECRET);
        const query = util.promisify(conn.conf.query).bind(conn.conf);
        const rows = await query('update Cuenta set estado = 0 where cuenta = ?', [req.body.cuenta]);
        if(Object.keys(rows).length === 0) throw "El número de cuenta no existe";
        res.send('Cuenta dada de baja').status(200);
    } catch (error) {
        res.send(`Error al dar de baja la cuenta: ${error}`).status(400);
    }
}


module.exports = cuenta;
