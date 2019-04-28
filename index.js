const express = require("express");
const app = express();

app.get("/", function(req, res){
    res.sendFile(__dirname + "/html/index.html");
})

app.get("/sobre", function(req, res){
    res.sendFile(__dirname + "/html/sobre.html");
})

app.get("/blog", function(req,res){
    res.send("Bem vindo ao meu blog");
})

app.get("/ola/:nome/:cargo/:cor", function(req,res){
    res.send("<h1> Ola " + req.params.nome + "</h1> <br/> <h2> Seu cargo: " + req.params.cargo + "</h2> <br/>"+
    "<h3> Sua cor: " + req.params.cor + "</h3>");
})

app.listen(8081, function(){
    console.log("Servidor Rodando na url http://localhost:8081")
});