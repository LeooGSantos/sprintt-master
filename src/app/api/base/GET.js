
import { promises as fs } from 'fs';
import { NextResponse } from 'next/server';


export async function GET(request) {
  try {
    // Lendo o arquivo JSON
    const file = await fs.readFile(
      process.cwd() + '/src/app/api/base/db.json',
      'utf8'
    );

    // Parseando o conteúdo do arquivo para JSON
    const lista = await JSON.parse(file);

    // Retornando a lista de usuários como JSON
    return NextResponse.json({ usuarios: lista.usuarios });
  } catch (error) {
    console.error(error);
    // Se ocorrer um erro, retornar uma resposta de erro
    return NextResponse.error('Erro ao obter dados da API', 500);
  }
}
