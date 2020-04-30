// Loops (laços de repetições)

// FOR é movido por declaração
for (var a = 0; a < 10; a++) {
    // console.log(a);
    console.log(`Repetindo por ${a} é menor que 10.`)
}

// WHILE é movido por condição, na qual ele fica no loop enquanto a condição for verdadeira

var i = 0

while (i <= 10) {
    console.log(`Repetindo por ${i} é menor ou igual a 10.`)
    i++;
}

// FOREACH é movido por condição

var avengers = ['Ironman', 'Spidermand', 'Thor', 'Capitain American', 'Black Panther', 'Black Window']

avengers.forEach(function (value, key) {
    console.log(`${value} na posição ${key}`)
})