// Variável é um local na memória do computador onde você pode alocar valores
// valores que poderão ser alterados durante a execução do software
// por isso chamamos de variáveis.

// tipagem dinâmica, ou seja, atribui o tipo quando recebe o valor
var number = 10;
console.log(number)


// typeof, que responsável por trazer o tipo da variável

console.log(typeof number);

var name = "Adriano";
console.log(typeof name);

// Realiza a soma normal por considerar ambos do mesmo tipo de variável
var n1 = 10;
var n2 = 20;
console.log(n1 + n2);

// Realiza a concatenação dos dois valores por considerar dois tipos diferentes de variáveis, por trabalha com string
var n1 = 10;
var n2 = "20";
console.log(n1 + n2);


var n1 = 10;
var n2 = "20";

n1 = "1" + 5;

console.log(n1 + n2);