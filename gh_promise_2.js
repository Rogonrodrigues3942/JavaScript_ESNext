setTimeout(function(){
    console.log("executando callback...")
    setTimeout(function(){
        console.log("executando callback...")},2000
)},2000)

function esperarPor(tempo = 2000){
    return new Promise( function(resolve){
        setTimeout(function(){
            console.log('Executando Promise...')
            resolve('Visshhhi')
        }, tempo)
    })
}

esperarPor(3000).then(texto => console.log(texto))

esperarPor()
.then(esperarPor)
.then(esperarPor)