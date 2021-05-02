/*Promise #01 - promise gera somente um único valor; mesmo que passe muitos parâmetros. Neste caso deve-se criar um 
Objeto ou array para passar mais valores*/

let a = 1
var b = 2

console.log(a)
console.log(b)

let p = new Promise(function(cumprirPromessa)
{
    cumprirPromessa(['Rogério', 'Rafael', 'Samuel', 'Flor'])
})

p.then(valor => valor[2])
.then(primeiro => primeiro[0])
.then(letra => console.log(letra))

/*Observe que o resultado da operação then passa para próxima operação then; 
ocorre sucessivamente encadeando a passagem de valores.*/