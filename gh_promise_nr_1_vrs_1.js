/*Promise #01 - promise gera somente um único valor; mesmo que passe muitos parâmetros. Neste caso deve-se criar um 
Objeto ou array para passar mais valores*/

let a = 1
var b = 2

console.log(a)
console.log(b)

let p = new Promise(function(cumprirPromessa)
{
    cumprirPromessa(
        x : 3,
        y : 6
    })
})

p.then(function(valor){
    console.log(valor)
    console.log(valor.y)
    console.log(valor.x)
})