/*const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'node-course',
    password: '!Cricket@09$'
});

module.exports = pool.promise();*/

var Sequelize = require('sequelize');
const sequelize = new Sequelize('node-sequelize', 'root', '!Cricket@09$', {
    dialect: 'mysql',
    host: 'localhost'
});

module.exports =  sequelize;