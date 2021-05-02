/*Promise #01 - promise gera somente um único valor; mesmo que passe muitos parâmetros. Neste caso deve-se criar um 
Objeto ou array para passar mais valores*/

const primeiroElemento = string => string[2]
const primeiraLetra = string => string[0]
const letraMinuscula = letra => letra.toLowerCase()

new Promise(function (resolve) {
    resolve(['Rogério', 'Rafael', 'Samuel', 'Flor'])
})
.then(primeiroElemento)
.then(primeiraLetra)
.then(letraMinuscula)
.then(console.log)

/*Observe que o resultado da operação then passa para próxima operação then; 
ocorre sucessivamente encadeando a passagem de valores.*/