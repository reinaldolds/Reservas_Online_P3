const {Client} = require('pg');
import Dbconfig from '../../db';
import { NextResponse } from 'next/server';


export async function POST(req) {
    if(req.method === "POST"){
        const client = new Client(Dbconfig);

        try {
            await client.connect();
            console.log('Conectado ao banco de dados');

            const createTableQuery = `
                CREATE TABLE IF NOT EXISTS reserva (
                id SERIAL PRIMARY KEY,
                nome VARCHAR(100) NOT NULL,
                email VARCHAR(100) UNIQUE NOT NULL,
                idade INTEGER,
                contato VARCHAR(100) UNIQUE NOT NULL,
                mesa VARCHAR(100) UNIQUE NOT NULL,
                data_criacao TIMESTAMP DEFAULT CURRENT_TIMESTAMP
              );        
           `;

            await client.query(createTableQuery);
            return NextResponse.json({ message: 'Tabela criada com sucesso.' });
}catch(err){
    console.error(console.log('Erro de conexão do tipo:', err));
    return NextResponse.json({ error: 'Erro interno no servidor.' }, { status: 500 });

}finally{
    await client.end();
    console.log('conexão encerrada');
}
}else {
  return NextResponse.json({ error: `Método ${request.method} não permitido.` }, { status: 405 });
}
}