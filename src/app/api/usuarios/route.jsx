/*
import { Client } from 'pg';

// Configuração do banco de dados
const dbConfig = {
  user: 'postgres',
  host: 'localhost',
  database: 'reservas_online',
  password: 'reinaldo1990',
  port: 5432,
};

// Função POST (Criar usuário)
export async function POST(req) {
  //const res = req.method;
 // const res = req.res; // Obtenha a resposta de req.res explicitamente
  const client = new Client(dbConfig);

  try {
    await client.connect();
    console.log('Conectado ao banco de dados');

    const { nome, email, senha, data_criacao } = await req.json();
    const createUsuarioQuery = `
      INSERT INTO usuarios (nome, email, senha, data_criacao)
      VALUES ($1, $2, $3, $4) RETURNING *;
    `;
    const values = [nome, email, senha, data_criacao];
    const result = await client.query(createUsuarioQuery, values);
    console.log('Usuário criado:', result.rows[0]);

   // res.status(201).json(result.rows[0]); // Retorna o usuário criado
  } catch (err) {
    console.error('Erro ao conectar ou inserir usuário:', err);
    res.status(500).json({ error: 'Erro ao inserir usuário no banco de dados' });
  } finally {
    await client.end();
    console.log('Conexão encerrada');
  }
}
/*
// Função GET (Consultar todos os usuários)
export async function GET(req) {
  if(req.method === 'GET'){

  
  const res = req.res; // Obtenha a resposta de req.res explicitamente
  const client = new Client(dbConfig);

  try {
    await client.connect();
    console.log('Conectado ao banco de dados');

    const result = await client.query('SELECT * FROM usuarios');
    res.status(200).json(result.rows); // Retorna os usuários
  } catch (err) {
    console.error('Erro ao buscar usuários:', err);
    res.status(500).json({ error: 'Erro ao buscar usuários no banco de dados' });
  } finally {
    await client.end();
    console.log('Conexão encerrada');
  }
}
}
*/

import { Client } from 'pg';
import DbConfig from '../../db';
import { NextResponse } from 'next/server';

export async function POST(req, res) {

  if(req.method === "POST"){
    
  const client = new Client(DbConfig);

  try {
    await client.connect();
    console.log('Conectado ao banco de dados');

    const { nome, email, idade, contato, mesa } = await req.json(); // Obtém dados do body
    const result = await client.query(
      'INSERT INTO usuarios (nome, email, idade, contato, mesa, data_criacao) VALUES ($1, $2, $3, $4, $5, NOW()) RETURNING *',
      [nome, email, idade, contato, mesa]
    );

    console.log('Usuário criado:', result.rows[0]);

    // Retorne o usuário criado como resposta
    return NextResponse.json(result.rows[0], { status: 201 });
  } catch (err) {
    console.error('Erro ao criar usuário:', err);

    // Retorne uma mensagem de erro
    return NextResponse.json(
      { error: 'Erro ao criar usuário no banco de dados' },
      { status: 500 }
    );
  } finally {
    await client.end();
    console.log('Conexão encerrada');
  }
 }else{
  res.setHeader("Allow", ["POST"]);
  res.status(405).json({error: `Método ${req.methed} não permitido.`})
 }
}
