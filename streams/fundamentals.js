import {Readable,Writable,Transform} from 'node:stream'

class OneToHundredStream extends Readable{

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

class InverseNumberStream extends Transform{
  _transform(chunk,encoding,callback){
    const transformed = Number(chunk.toString()) * -1
    // primeiro parâmetro de um call back -e o erro
    // enviamos null, caso não tenha acontecido nenhum erro dentro da transformação
    callback(null,Buffer.from(String(transformed)))
  }
}
class MultiplyByTenStream extends Writable{
  
  _write(chunk,enconding,callback){
    console.log(Number(chunk.toString())*10)
    callback()

  }
}
// Lemos dados de uma stream de leitura  que retorna números de 1 a 100 e escrevemos esses dados dentro 
// de uma stream de escrita

new OneToHundredStream().pipe(new InverseNumberStream()).pipe(new MultiplyByTenStream())