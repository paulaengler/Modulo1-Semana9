const express = require("express")

const app = express();

app.use(express.json());

app.get("/", function(req, res){
    res.send("Olá mundo")
})

//adicionar rota dizendo o metodo

app.get("/sobre", function(req,res){
    res.send("Essa é a rota sobre!")
})

//nova rota sobre digita no link do site /sobre ... aparece novo texto

app.get("/aluno/:aluno", function(req,res){
    res.send(req.params.aluno)
})

//passou um parametro dentro da rota - o parametro que digitou apos /aluno/??? vai aparecer na tela
// dois pontos e algo é um parametro

app.get("/turma/:aluno/:idade", function(req,res){
    res.send(req.params)
})

//com parametro - vai aparecer aluno:parametro, idade:parametro

app.get("/ola/:nome", function(req,res){
    console.log("Entrou na rota")
    const nome = req.params.nome

    res.send("Bem vindo " + nome)
})

//no link /ola/Paula - vai aparecer Bem vindo Paula

app.listen(3000, function(){
    console.log("Minha aplicação esta no ar")
});

//padrao é a porta 300 - http://localhost:3000/



//Aula 27 março

app.get("/", function(req, res){
    res.sendFile(__dirname + "/public/index.html")
})

app.get("/busca", (req,res) => {
    // let parametro = req.query.parametro - outra forma de escrever, embaixo

    const { parametro } = req.query
   // se o parametro nao existir - verificar se o parametro "parametro" esta presente
    if(!parametro) {
        return res.status(400).json({
            error: "Parametro da Query estão faltanto: faltou o parametro"
        })
    }

    res.json({ message: `Você pesquisou por: ${parametro}`})
})

// na barra thunder client = http://localhost:3000/busca?parametro=meu nome

let pessoas = [];
app.post("/pessoas", (req, res) => {
    const { pessoa } = req.body
    res.status(201).send('Pessoa adicionada com sucesso' + pessoa.nome);
})

// utilizar o body, para post, no postman
// Json - body do postman
// { "pessoa":
// {"nome": "Paula",
//"idade": 27,}
//}

/* post sempre vai ter o body 

let pessoas = []; 
app.post("/pessoas", (req, res) => {
    const { nome, idade, ativo } = req.body

    let novaPessoa = {nome, idade, ativo}

    pessoas.push(novaPessoa)

    res.status(201).send(`Pessoa adicionada com sucesso: ${JSON.stringify(novaPessoa)}` );

})
*/ 
/* let pessoas = [] referente ao get embaixo */

app.get("/pessoas", (req, res) => {
    res.json(pessoas)
})

/* quando salva, reinicia o servidor, e a lista vem vazia */
