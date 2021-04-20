console.log('\n***********\nESNEXT - Promise - 10ª aula \n*****************\n')
function falaDepoisDe(segundos, frase){
    return new Promise((resolve, reject) =>{
        setTimeout(() =>{
            resolve(frase)
        }, segundos * 1000)
    })
}

falaDepoisDe(3, 'Que legal!!')
.then(frase => frase.concat('?!?'))
.then(outraFrase => console.log(outraFrase))