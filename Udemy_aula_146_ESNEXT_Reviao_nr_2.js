console.log('\n***********\nESNEXT - Revisão  - 2ª aula \n*****************\n')
//Arrow function
const soma = (a, b) => console.log(a+b)
soma(1,1)
soma(2, 3)

//Arrow function - this
const lexico1 = () => console.log(this === exports)
lexico1()

const lexico2 = lexico1.bind({})
lexico2()

// parametro default
function log(texto = 'Node') {
    console.log(texto)
}

log()
log(undefined)
log(null)
log()

//Operador rest/spread
function total(...numeros){
    let soma = 0
    numeros.forEach(n => soma+=n)
    return soma
}

console.log(total(2,3,4,5,6))