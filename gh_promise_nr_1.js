//Promise #01 - promise gera somente um único valor; mesmo que passe muitos parâmetros.

let a = 1
var b = 2

console.log(a)
console.log(b)

let p = new Promise(function(cumprirPromessa)
{
    cumprirPromessa(3)
})

p.then(function(valor){console.log(valor)})