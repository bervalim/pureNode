// process- variável do node
// stdin - diz respeito a tudo o que o usuário digita no terminal
// Streams-> Ler dados de pouco a pouco e enviar para outra stream que irá tratar esses dados
// process.stdin.pipe(process.stdout)
// TUdo o que eu receber como entrada, será encaminhado pelo pipe para uma saída
// stdout é uma stram de saída

import {Readable} from 'node:stream'

class OneToHundredStream extends Readable{
  // Esse método irá retornar quais são os dados dessa stream
  // Método para receber os dados de um uṕload
  // Stream de leitura tem como função fornecer informações
  index = 1
  _read(){
    const i = this.index++
    setTimeout(()=>{
      if(i >100){
        this.push(null)
      }else{
        const buffer = Buffer.from(String(i))
        this.push(buffer)
      }

    },1000)

  }
}
// Estamos tentando ler a stream e enquanto estiver lendo a stream,
// ele já irá escrever no terminal
// Dentro de stream, não podemos trabalhar com strings ou números
// O pedaço que estamos lendo ou escrevendo dentro de uma stream não pode estar
// em um formato primitivo (sring,bboolrsn)
// É necessário trabalhar em um outro formato do node (buffer)
new OneToHundredStream().pipe(process.stdout)