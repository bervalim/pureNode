// const http = require('http')
// Padrão CommonJS
import http from "node:http"

// Esse módulo possuí várias funcionalidades para construírmos aplicações HTTP

//Aplicaçoes HTTP - API REST

// Criando o primeiro servidor
//Iremos passar uma função anônima dentro desse método que irá lidar com 
// as requisições HTTP
// ROta de criar usuário (name,email,senha)
// com o req, iremos obter todas as informações de quem está acessando o servidor
//res - acessa a response do serviro
const server = http.createServer((req,res)=>{
  res.end("Hello World")
})
//QUermos que o servidor ouça a porta 3333
// toda vez que ele acessar a porta 3333, ele irá acessar a função createServer e 
//lida com as requisições
server.listen(3000)

