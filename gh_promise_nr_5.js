/*Tratamento de erro com promisse - aula 5 sobre promisse*/
function funcionarOuNao(valor, chanceErro)
{
    return new Promise((resolve, reject) =>{
        try{
            if(Math.random() < chanceErro){
                reject('Ocorreu um erro!')
            }
            else{
                resolve(valor)
            }
        }
        catch (e){
            resolve(e)
        }
    })
}

funcionarOuNao('Testando ...', 0.5)
.then( v => `Valor: ${v}`)
.then(
    v => console.log(v),
    err => console.log(`Erro esperado: ${err}`)
)
.then(() => console.log('Quase fim!!'))
.catch(err => console.log(`Erro: ${err}`))
.then(() => console.log('Fim!'))