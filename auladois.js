const express = require("express")

const app = express();

const PORT = 3333;

/* PODE CRIAR UMA VARIAVEL COM O NUMERO DA PORTA */

app.use(express.json());

app.listen(PORT, function(){
    console.log("Servidor online")
});


/* Git hub professor 
const express = require('express');
const app = express();
const PORT = 3333;

// Lista de pessoas (simulando um "banco de dados" em memória)
let pessoas = [];

// Adiciona um middleware para trabalhar com json nas reqs.
app.use(express.json());

app.get('/', (req, res) => {
    res.json("Sucesso!");
});

// Rota para obter todas as pessoas
app.get('/pessoas', (req, res) => { 
    res.json(pessoas);
});

// Rota para obter uma pessoa por ID
app.get('/pessoas/:id', (req, res) => {
    const { id } = req.params;
    const pessoa = pessoas.find(pessoa => pessoa.id === parseInt(id));
    if (!pessoa) {
        res.status(404).send('Pessoa não encontrada.');
        return;
    }
    res.json(pessoa);
});

// Rota para adicionar uma nova pessoa
app.post('/pessoas', (req, res) => {
    const pessoa = req.body;
    pessoa.id = pessoas.length > 0 ? pessoas[pessoas.length - 1].id + 1 : 1;
    pessoas.push(pessoa);
    res.status(201).send('Pessoa adicionada com sucesso.');
});

// Rota para atualizar uma pessoa por ID
app.put('/pessoas/:id', (req, res) => {
    const { id } = req.params;
    const newData = req.body;
    const index = pessoas.findIndex(pessoa => pessoa.id === parseInt(id));
    if (index === -1) {
        res.status(404).send('Pessoa não encontrada.');
        return;
    }
    pessoas[index] = { ...pessoas[index], ...newData };
    res.status(200).send('Pessoa atualizada com sucesso.');
});

// Rota para deletar uma pessoa por ID
app.delete('/pessoas/:id', (req, res) => {
    const { id } = req.params;
    const index = pessoas.findIndex(pessoa => pessoa.id === parseInt(id));
    if (index === -1) {
        res.status(404).send('Pessoa não encontrada.');
        return;
    }
    pessoas.splice(index, 1);
    res.status(200).send('Pessoa deletada com sucesso.');
});

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});


const express = require("express")

const app = express()

app.use(express.json())

app.get("/",function(req, res){
    res.sendFile(__dirname + "/public/index.html")
})

app.get("/sobre",function(req, res){
    res.send("Essa é minha primeira aplicação de servidors!!!!")
})

app.get("/ola", function(req, res){
    res.send("Olá, tudo bem turminha?")
})

app.get("/ola/:nome/:idade", function(req, res){
    // http://localhost:3000/ola/Rawan/25
    let nome = req.params.nome
    res.send("Ola "+ nome + " ,tudo bem?")
    
})

app.get("/busca", (req, res) => {
    // let parametro = req.query.parametro

    const { nome, idade, cpf } = req.query

    // Verificar se o parâmetro "parametro" está presente!
    if(!nome) {
        return res.status(400).json({
            error: "Nome não foi informado!"
        })
    }

    if(!cpf) {
        return res.status(400).json({
            error: "CPF não foi informado!"
        })
    }

    res.json({ message: `Você pesquisou por: nome: ${nome} idade: ${idade} cpf: ${cpf}`})
})

let pessoas = []

app.post("/pessoas", (req, res) => {
    const { nome, idade, ativo } = req.body

    let novaPessoa = {nome, idade, ativo}

    pessoas.push(novaPessoa)

    res.status(201).send(`Pessoa adicionada com sucesso: ${JSON.stringify(novaPessoa)}` );

})

app.get("/pessoas",(req, res) => {
    res.json(pessoas)
})



app.listen(3000, function(){
    console.log("Servidor Rodando!!!")
})
*/
