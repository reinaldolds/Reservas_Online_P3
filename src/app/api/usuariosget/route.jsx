import { Client } from 'pg';
import DbConfig from '../../db';

export async function GET(req) {
    const client = new Client(DbConfig);

    try {
        await client.connect();
        console.log('Conectado ao banco de dados');

        const result = await client.query('SELECT * FROM usuarios');
        return new Response(JSON.stringify(result.rows), {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
        });
    } catch (err) {
        console.error('Erro ao buscar usuários:', err);
        return new Response(
            JSON.stringify({ error: 'Erro ao buscar usuários no banco de dados' }),
            { status: 500, headers: { 'Content-Type': 'application/json' } }
        );
    } finally {
        await client.end();
        console.log('Conexão encerrada');
    }
}
