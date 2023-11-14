
import { promises as fs } from 'fs';
import { NextResponse } from 'next/server';

// Função para lidar com a requisição POST
export async function POST(request, response) {
  try {
    // Lendo o arquivo JSON
    const file = await fs.readFile(
      process.cwd() + '/src/app/api/base/db.json',
      'utf8'
    );

    // Parseando o conteúdo do arquivo para JSON
    const lista = await JSON.parse(file);

    // Recuperando os dados da requisição
    const { info, nome, email, senha } = await request.json();

    // Determinando o status da operação
    switch (info) {
      case 'login':
        // Realizando a chamada da função de login
        const user = await handleLogin(lista.usuarios, email, senha);
        if (user) {
          // Retornando o status do request
          return NextResponse.json({ status: true, user });
        }
      case 'cadastro':
        // Realizando a chamada da função de cadastro
        const novoUsuario = await handleCadastro(lista.usuarios, nome, email, senha);
        if (novoUsuario) {
          // Retornando o status do request
          return NextResponse.json({ status: true, user: novoUsuario });
        }
      default:
        return NextResponse.json({ status: false });
    }
  } catch (error) {
    console.error(error);
    // Se ocorrer um erro, retornar uma resposta de erro
    return NextResponse.error('Erro ao processar requisição', 500);
  }
}

// Função para lidar com o login
const handleLogin = async (usuarios, email, senha) => {
  try {
    const user = usuarios.find((user) => user.email === email && user.senha === senha);
    return user;
  } catch (error) {
    console.error(error);
  }
};

// Função para lidar com o cadastro
const handleCadastro = async (usuarios, nome, email, senha) => {
  try {
    // Gerar um id para o novo usuário
    const id = usuarios.length > 0 ? usuarios[usuarios.length - 1].id + 1 : 1;

    // Criando o objeto do novo usuário
    const novoUsuario = { id, nome, email, senha };

    // Adicionando o novo usuário na lista de usuários
    usuarios.push(novoUsuario);

    // Salvando a lista de usuários no arquivo JSON
    await fs.writeFile(
      process.cwd() + '/src/app/api/base/db.json',
      JSON.stringify({ usuarios })
    );

    // Retornando o status do request
    return novoUsuario;
  } catch (error) {
    console.error(error);
  }
};
