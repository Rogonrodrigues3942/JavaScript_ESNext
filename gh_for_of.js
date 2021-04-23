console.log('Percorrendo o array de caracteres')
for (let letras of 'cod3r')
 console.log(letras)

 console.log('\n')
console.log("Apresentando os índices")
const assuntosEcma = ['Map','Set', 'Promise']

for (let i in assuntosEcma)
    console.log(i)

console.log("Apresentando os valores do array assuntosEcma")
console.log('\n')
for(assunto of assuntosEcma)
    console.log(assunto)

const assuntosMap = new Map([
    ['Map', {abordado: true}],
    ['Set', {abordado: true}],
    ['Promise', {abordado: false}]
])

console.log('\n')
for (let assunto of assuntosMap)
    console.log(assunto)

console.log('\n')
for (let chave of assuntosMap.keys())
    console.log(chave)

console.log('\n')
for(let valor of assuntosMap.values())
    console.log(valor)

console.log('\n')
for (let [ch, vl] of assuntosMap.entries())
    console.log(ch, vl)