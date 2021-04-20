console.log('\n***********\nESNEXT - Revisão  - 3ª aula \n*****************\n')
/**Novos recursos da classe objeto - Object.values - Object.entries */
const obj = { a: 1, b: 2, c: 3}

console.log(Object.values(obj))
console.log(Object.entries(obj))

console.log('\nMelhorias na declaração literal de objetos')
const nome = 'Carla'
const pessoa = {
    nome,
    ola(){
        return ', Oi gente!'
    }
}

console.log(pessoa.nome, pessoa.ola())

console.log('\nCriando classes')
class Animal{}
class Cachorro extends Animal{
    falar(){
        return 'Au au au!!'
    }
}

console.log('classe cachorro: ',new Cachorro().falar())