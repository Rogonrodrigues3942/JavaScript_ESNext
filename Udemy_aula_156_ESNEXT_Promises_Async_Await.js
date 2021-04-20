console.log('\n***********\nESNEXT - Async / Await - 13ª aula  - versão enxuta\n*****************\n')
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
/**Recurso implantado a partir do ES8
 * Objetivo de simplificar o uso do promises
 */
let obterAlunos = async() =>{
    const ta = await getTurma('A')
    const tb = await getTurma('B')
    const tc = await getTurma('C')
    return [].concat(ta,tb,tc)
}
/* Retorna um objeto asuncFunction*/
obterAlunos()
.then(alunos => alunos.map(a => a.nome))
.then(nomes => console.log(nomes))