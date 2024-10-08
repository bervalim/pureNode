// BUffer é uma representação de um espaço na memória no computador
// É uma forma de transacionar dados de uma maneira rápida
// Os dados armazenados no buffer são tratados para serem enviados para algum lugar e depois removidos
// maneiras de salvarmos e ler na memória de maneira performática
// O Node utiliza esse modelo, pois é mais rápido ler uma informação parcial ou não de forma binária
// do que seria caso fosse uma string

// BUffer foi uma API criada pelo Node, em função da incapacidade do JS em ler binário
// Buffer- Forma nativa que o node criou para lermos dados binários
// JS nunca teve uma forma nativa de lidar com valores binários
// Mais eficiente de escrever e ler da memória de maneira baixo nível


// Criando buffer:

const buffer = Buffer.from("hello")
console.log(buffer.toJSON())