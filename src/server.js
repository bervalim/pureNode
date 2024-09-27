import http from "node:http"

const users = []
// JSON - muito usado na transição entre front e back
// e diferntes apis
// Podemos usar vários tipos,e transitar vários dados entres várias aplicações
const server = http.createServer((req,res)=>{
  const {method,url} = req

  if(method==="GET" && url==='/users'){
  //  Esse cabeçalho irá dizer qual tipo de conteúdo estou retornando para o front
    return res.setHeader('Content-type','application/json').end(JSON.stringify(users))
  }
  if(method ==="POST" && url==='/users' ){
    users.push({
      id:1,
      name:'John Doe',
      email:"Joan@email.com"
    })
    return res.end("Criar usuário")
  }

  
  console.log(method,url)

  res.end("Hello Word")
})

server.listen(3000)

