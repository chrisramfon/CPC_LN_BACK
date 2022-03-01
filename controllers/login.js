const conn = require('../controllers/mysqlconnection');
const bcrypt = require('bcrypt');
const util = require('util');
const jwt = require('jsonwebtoken');
const { env } = require('process');
require('dotenv').config();

const login = {};

login.log = async (req, res) => {
        
    try {

        const query = util.promisify(conn.conf.query).bind(conn.conf);
        const rows = await query("select * from Usuario where usuario like ?;", [req.body.usuario]);        
        if(Object.keys(rows).length === 0) {res.send('Datos incorrectos').status(406);}
        const compare = await bcrypt.compare(req.body.pass, rows[0].pass);
        if(!compare) {res.send('Datos incorrectos').status(406)};
        const payload = {id: rows[0].id}
        const token = await jwt.sign(payload, process.env.SECRET);
        res.send(token).status(200);

    } catch (error) {
     throw error;    
    }

};

module.exports = login;


/*

if(rows == undefined){
            
        }else{
            res.send('Datos incorrectos');
        }
        


*/