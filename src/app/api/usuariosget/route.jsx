import { NextResponse } from 'next/server';
import { Client } from 'pg';
import DbConfig from '../../db';

export async function GET(req) {
    const client = new Client(DbConfig);

    try {
        const { searchParams } = new URL(req.url);
        const busca = searchParams.get('busca');

        await client.connect();
        console.log('Conectado ao banco de dados');

        let query = 'SELECT * FROM reserva';
        const values = [];
        if(busca){
            query += `WHERE nome ILIKE $1 OR email ILIKE $1 OR contato ILIKE $1`;
            values.push(`%${busca}%`);
        }
        
        const result = await client.query(query, values);
        return NextResponse.json(result.rows, {status: 200});


        /*
        await client.connect();
        console.log('Conectado ao banco de dados');

        const result = await client.query('SELECT * FROM reserva');
        return NextResponse.json(result.rows, { status: 200 });
        */

    } catch (err) {
        console.error('Erro ao buscar usuários:', err);
        return NextResponse.json(
            { error: 'Erro ao buscar usuários no banco de dados' },
            { status: 500 }
        );
        
    } finally {
        await client.end();
        console.log('Conexão encerrada');
    }
}
