import http from "node:http"

const users = []

const server = http.createServer(async (req,res)=>{
  const {method,url} = req

 
// COnceito de leitura de stream
  const buffers = []

  for await(const chunk of req){
   buffers.push(chunk)
  }


// Transformar um JSONjá criado em uma estrutura que possa
// ser entendida pelo JS
// Se não tiver req.body, iremos atribui-lo como null
// Depois que lemos todo o corpo de requisição, o transformamos em um Objeto JavaScrit
// Caso exista um objeto JS
// Caso não exista, atribuímos req.body como null
try{
 req.body = JSON.parse(Buffer.concat(buffers).toString())
}catch{
  req.body = null
}



  if(method==="GET" && url==='/users'){
    return res.setHeader('Content-type','application/json').end(JSON.stringify(users))
  }

  if(method ==="POST" && url==='/users' ){

    const {name,email} = req.body
    users.push({
      id:1,
      name,
      email
    })
    return res.writeHead(201).end()
  }


  res.writeHead(404).end()
})

server.listen(3000)

