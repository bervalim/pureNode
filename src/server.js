import http from "node:http"
 //Rotas CRUD
//  Requisição HTTP
// Métodos mais comuns
// Mais semânticos que de significado
// GET ,POST,PUT,PATCH,DELETE

// GET- BUSCAR recurso DO BACK
// POST - Criar um recurso
//PUT- Atualização total
// PATCH- Atualização Parcial de um recurso no back
// DELETE - Deletar recurso do back


const server = http.createServer((req,res)=>{
  const {method,url} = req
  if(method==="GET" && url==='/users'){
    // Early return
    // Se o código bater nesse return, nada abaixo dele será executado
    return res.end("Listagem usuários")
  }
  if(method ==="POST" && url==='/users' ){
    return res.end("Criar usuário")
  }

  
  console.log(method,url)

  res.end("Hello Worfdfldfdffdddçç")
})

server.listen(3000)

