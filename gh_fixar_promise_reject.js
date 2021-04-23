function falarDepois(tempo, frase){
    return new Promise((resolve, reject) =>{
        setTimeout(() =>{
            reject(frase), tempo  * 1000
        })
    })
}

falarDepois(3, "Fixando exercício de Promise!")
.then(exemplo => exemplo.concat('\nContinue refazendo exemplos!'))
.then(prefeicao => prefeicao.concat("\nPerfeicao se aproxoimará com muita prática."))
.then(fim => console.log(fim))
.catch(erro => console.log('Erro tratado'))