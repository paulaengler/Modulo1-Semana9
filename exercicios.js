/* Semana 9
[M1S09] Ex. 1 -Introdução ao Express
Crie um novo projeto Node.js.
Instale o Express.js usando o npm.
Crie um arquivo app.js e configure um servidor Express básico que escute na porta 3000. 

Para instalar o Express.js, digitar no terminal:
npm install express --save
*/

/* app.listen(3000, function(){
    console.log("Minha aplicação esta no ar")
}); 
*/

/* [M1S09] Ex. 2 - Rotas
Uma rota GET que responda à URL '/sobre' com uma mensagem sobre o seu aplicativo.
Uma rota GET que responda à URL '/contato' com uma mensagem de contato. */

const express = require("express")

const app = express();

app.use(express.json());

const PORT = 3666;

app.listen(PORT, function(){
    console.log("Minha aplicação esta ligada")
});

app.get("/sobre", function(req,res){
    res.send("Sobre o aplicativo")
})

app.get("/contato", function(req,res){
    res.send("Dados de contato")
})


/* [M1S09] Ex. 3 - MIddleware
Crie um middleware que registre informações sobre todas as solicitações recebidas pelo servidor Express.
Use esse middleware para registrar o método HTTP, a URL e o horário de cada solicitação no console. */

app.use("/mid", function(req, res, next) {
    console.log(`[${new Date().toLocaleString()}] ${req.method} ${req.url}`);
    next();
  })


/* [M1S09] Ex. 4 - Paramêtros
Defina uma rota GET que aceite um parâmetro de rota, como '/produto/:id', 
e responda com uma mensagem personalizada, com base no ID do produto fornecido. */

app.get("/produto/:id", function(req,res){
    const id = req.params.id
    res.send("O produto escolhido é: " + id)
})

/*[M1S09] Ex. 5 - Arquivos Estáticos
Configure o Express para servir arquivos estáticos, como imagens, 
arquivos CSS e JavaScript, de um diretório específico em seu projeto.

O middleware express.static() é usado para configurar o Express para servir arquivos estáticos.
Ele recebe como parâmetro o caminho para o diretório onde estão localizados os arquivos estáticos que você deseja servir. 
No exemplo acima, estamos usando o diretório 'public'.
Agora, quando você acessa uma URL correspondente a um arquivo estático dentro do diretório public, o Express irá servir esse arquivo automaticamente.
Por exemplo, se você tiver um arquivo chamado styles.css dentro do diretório public/css, 
você poderá acessá-lo em seu navegador através da URL http://localhost:3000/css/styles.css, supondo que o servidor esteja rodando em localhost na porta 3000.
app.use(express.static('public'));*/

app.use(express.static('node.js'));
