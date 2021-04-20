console.log('\n***********\nESNEXT - Rest & Spread (...)-   - 4ª aula \n*****************\n')
/*Usar ...(rest/spread) como parâmetro de funções, neste caso junta os dados atua como rest.
Spread é usado para alocar dados de uma estrutura ( array/objeto) em outra estrutura de mesmo tipo.*/

console.log('1º exemplo - usando spread  em objeto')
const funcionario = {nome: 'Ana', salario: 12334.99}
const clone = {ativo: true, ...funcionario}
console.log(clone)

console.log('\n2º exemplo - usando spread  em array')
const grupoA = ['João', 'Pedro', 'Glória']
const grupoFinal = ['Rafael', ...grupoA,'Samuel']
console.log(grupoFinal)