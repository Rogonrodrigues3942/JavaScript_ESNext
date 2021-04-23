function falarDepois(tempo, frase){
    return new Promise((resolve, reject) =>{
        setTimeout(() =>{
            resolve(frase)  //resolve aceita apenas um parâmetro
        }, tempo * 1000)
    })
}

falarDepois(4, 'Deu certo!!')
.then(frase => frase.concat( '\nContinue estudando!!\n'))
.then(outraFrase => console.log(outraFrase))
.catch(erro => console.log(erro))