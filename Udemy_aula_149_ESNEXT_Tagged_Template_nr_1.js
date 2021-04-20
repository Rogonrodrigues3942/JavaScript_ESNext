console.log('\n***********\nESNEXT - Tagged Template #1- 5ª aula \n*****************\n')
function tag(partes, ...valores){
    console.log(partes)
    console.log(valores)
    return 'Outra coisa!!'
}

const aluno ='Gui'
const situacao = 'Aprovado'
console.log(tag `${aluno} está ${situacao}.`)
console.log(`${aluno} está ${situacao}.`)