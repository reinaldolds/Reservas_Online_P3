/*
const { Pool } = require('pg');

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'reservas_online',
    password: 'reinaldo1990',
    port: 5432,
});

module.exports = {
    query: (text, params) => pool.query(text, params),
};  */

const DbConfig = {
    user: 'postgres',
    host: 'localhost', // ou o IP/host do seu banco de dados
    database: 'reservas_online',
    password: 'reinaldo1990', // Certifique-se de que é uma string válida
    port: 5432, // Porta padrão do PostgreSQL
};

export default DbConfig;
