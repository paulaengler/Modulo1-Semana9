/*[M1S09] Ex. 6 - CRUD
Elabore um CRUD para a rota /users */

/* Criação (Create):
Implemente uma rota POST /users que permita adicionar um novo usuário à lista.
O corpo da solicitação deve conter os dados do usuário a ser adicionado.
Após adicionar o usuário com sucesso, retorne uma resposta com status 201 (Created) e os dados do usuário recém-criado. */

/*Leitura (Read):
Implemente uma rota GET /users que retorne a lista completa de usuários.
Implemente uma rota GET /users/:id que retorne os detalhes de um usuário específico com base no ID fornecido na URL.
Se o usuário não for encontrado, retorne uma resposta com status 404 (Not Found). */

/*Atualização (Update):
Implemente uma rota PUT /users/:id que permita atualizar os dados de um usuário existente com base no ID fornecido na URL.
O corpo da solicitação deve conter os novos dados do usuário a serem atualizados.
Se o usuário não for encontrado, retorne uma resposta com status 404 (Not Found).
Após atualizar o usuário com sucesso, retorne uma resposta com status 200 (OK) e os dados atualizados do usuário. */


/*Exclusão (Delete):
Implemente uma rota DELETE /users/:id que permita excluir um usuário com base no ID fornecido na URL.
Se o usuário não for encontrado, retorne uma resposta com status 404 (Not Found).
Após excluir o usuário com sucesso, retorne uma resposta com status 200 (OK) e uma mensagem indicando que o usuário foi excluído. */

import express, { request } from 'express';

const app = express();

app.use(express.json());

const PORT = 3001;

let usuarios = [];

app.listen(PORT, function(){
    console.log("Minha aplicação esta ligada")
});

app.post('/users', (request,response) => {
    const { nome, idade } = request.body;
    const usuario = {
        id: usuarios.length > 0 ? usuarios[usuarios.length - 1].id + 1 : 1,
        nome: nome, 
        idade: idade
    }
    usuarios.push(usuario);
    response.status(201).json({ mensagem: 'Pessoa adicionada com sucesso', dados: usuario });   
})

app.get('/users', (request,response) => {
    response.json(usuarios);
})

app.put('/users/:id', (request, response) => {
    const id = request.params.id; //Obtem o id do usuario
    const { nome, idade } = request.body;
    const index = usuarios.findIndex(usuario => usuario.id === parseInt(id));

    if (index === -1) {
        response.status(404).send('Usuário não encontrado.');
        return;
    }

    const usuario = usuarios[index]

    usuario.nome = nome
    usuario.idade = idade

    usuarios[index] = usuario;
    response.status(200).json({mensagem: 'Usuário atualizado com sucesso.', dados: usuario });
});

app.delete('/users/:id', (request,response) => {
    const { id } = request.params;
    const index = usuarios.findIndex(usuario => usuario.id === parseInt(id));

    if (index === -1) {
        response.status(404).send('Usuário não encontrado.');
        return;
    }
    usuarios.splice(index, 1);
    response.status(200).send('Usuário deletado com sucesso.');
});