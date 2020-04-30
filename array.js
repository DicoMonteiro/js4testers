// var avengers = new Array()

var avengers = ['Ironman', 'Spiderman', 'Thor', 'Capitain American', 'Black Panther', 'Black Window']
console.log(avengers)

avengers.push('Hulk')
console.log(avengers)

avengers.push('Anti-man')
console.log(avengers)
// avengers.pop() // pop remove o último registro do array
// avengers.shift() //shift remove o primeiro registro do array

// Pegar a posição do indice pelo nome do registro no array
var indice = avengers.indexOf('Spiderman')
// Excluir o registro pelo indice, passando o indice e a quantidade de elemento a ser removido, 
// pois se não passar nada, vai remover todos os dados apartir do indice
avengers.splice(indice, 1)

// Pegar a posição do indice pelo nome do registro no array
var indice = avengers.indexOf('Anti-man')
// Excluir o registro pelo indice, passando o indice e a quantidade de elemento a ser removido, 
// pois se não passar nada, vai remover todos os dados apartir do indice
avengers.splice(indice, 1)

console.log(avengers)

var newavengers = ['Spiderman', 'Anti-man', 'Capitan Marvel', 'Doctor Stranger']
// Concatenar um array com outro
var result = avengers.concat(newavengers)
console.log(result)