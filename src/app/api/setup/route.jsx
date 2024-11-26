const {Client} = require('pg');
import Dbconfig from '../../db'


async function ConnectToDatabase() {
 /*   
const client = new Client({
    user: 'postgres',
    host: 'localhost',
    database: 'reservas_online',
    password: 'reinaldo1990',
    port: 5432
});
*/
const client = new Dbconfig();


try {
    client.connect();
    console.log('Conectado ao banco de dados');


    const createTableQuery = `
      CREATE TABLE IF NOT EXISTS usuarios (
        id SERIAL PRIMARY KEY,
        nome VARCHAR(100) NOT NULL,
        email VARCHAR(100) UNIQUE NOT NULL,
        senha VARCHAR(100) NOT NULL,
        data_criacao TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `;

    const criar_tb_cliente = await client.query(createTableQuery);
    console.log('Tabela cliente criada')
}catch(err){
    console.error(console.log('Erro de conexão do tipo:', err))

}finally{
    client.end();
    console.log('conexão encerrada');
}
}
ConnectToDatabase();