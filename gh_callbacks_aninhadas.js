//sem utilização de promise

const http = require('http')

const getTurma = (letra, callback) => {
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`

    http.get(url, res =>{
        let resultado = ''

        res.on('data', dados=>{
            resultado += dados
        })

        res.on('end', () => {
            callback(JSON.parse(resultado))
        })
    })
}

let nomes = [] //array vazio para receber nomes de alunos

getTurma('A', alunos => {
    nomes = nomes.concat(alunos.map(a => `A: ${a.nome}`))
    getTurma('B', alunos => {
        nomes = nomes.concat(alunos.map(a => `B: ${a.nome}`))
        getTurma('C', alunos => {
            nomes = nomes.concat(alunos.map(a => `C: ${a.nome}`))
            console.log(nomes)
        })
    })
        
        
})

    
/*getTurma('B', alunos => {
    nomes = nomes.concat(alunos.map(a => `B: ${a.nome}`))
    console.log(nomes)
})

getTurma('C', alunos => {
    nomes = nomes.concat(alunos.map(a => `C: ${a.nome}`))
    console.log(nomes)
})*/
