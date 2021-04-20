console.log('\n***********\nESNEXT - Refatorando Funções callback aninhadas - 12ª aula  - versão enxuta\n*****************\n')
const http = require('http')

const getTurma = (letra, callback) => {
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`
    
    return new Promise((resolve, reject) =>{

        http.get(url, res => {
            let resultado = ''
            res.on('data', dados =>{
                resultado += dados
            })
            res.on('end',() => {
                try{
                    resolve(JSON.parse(resultado))
                }catch(e){
                    resolve(e)
                }
            })
        })
    })
}

let nomes = []

Promise.all([getTurma('A'), getTurma('B'), getTurma('C'),getTurma('D')])
.then(turmas => [].concat(...turmas))
.then(alunos => alunos.map(aluno => aluno.nome))
.then(nomes => console.log(nomes))
.catch(e => console.log(e.message))