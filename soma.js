
// DOM - Document Object Model

// Netscape Navigator 2 e IE 3.0 (1996)
// Javascript
// Microsoft JScript => VBScript
// ECMAScript

// html => Pagina

// h1 = Cabeçalho/Titulo
// p = Paragrafos
// ul = Agrupadores de Listas
// li = Os itens da lista do elemento ul
// a = Link
// form = Formulários
// input do tipo texto = campos de texto
// input do tipo check = checkboxes
// input do tipo radio = buttons de radio
// textarea = Paragrafos
// button = botões
// span = elementos genéricos
// table = tabelas
// tds = colunas

// div = divisoes
// labels = textos


function soma() {
    var n1 = parseInt(document.getElementById("numberOne").value);
    var n2 = parseInt(document.getElementById("numberTwo").value);
    var result = n1 + n2
    var divResultado = document.getElementById("resultado")

    divResultado.append(`O resultado da soma de ${n1} com ${n2} é igual a ${result}`)
    console.log(result)
}
