console.log('\n***********\nESNEXT - for of- 9ª aula \n*****************\n')
console.log('1º exemplo: o comando for of percorre os valores da estrutura.')
for(let x of 'Cod3r')
    console.log(x)

console.log('\n2º exemplo: o comando for in percorrendo índices e o comando for of percorre os valores da estrutura.')
const assuntosEcma = ['Map', 'Set','Promise']
for(let i in assuntosEcma)
    console.log(i)
console.log('\n')

for(let z of assuntosEcma)
    console.log(z)

console.log('\n3º exemplo: o comando for of  percorrendo índices e valores da estrutura.')
const assuntosMap = new Map([
    ['Map', {abordado: true}],
    ['Set',{abordado: true}],
    ['Promise', {abordado: false}]
])

for(let assunto of assuntosMap){
    console.log(assunto)
}

for(let chave of assuntosMap.keys()){
    console.log(chave)
}

for(let valor of assuntosMap.values()){
    console.log(valor)
}

/*/destructuring
for(let [ch,vl] of assusntosMap.entries()){
    console.log(ch, vl)
}*/