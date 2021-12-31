// promises são usadas para encapsular um código que deve ser executado no futuro
// resolve é quando a requisição foi bem-sucedida
const promise = new Promise(resolve => {
    // recebe o retorno de uma requisição a alguma API por exemplo
    // aqui, ele está recebendo esta String
    resolve('promise data')
})

// quando receber, utilizamos o .then, que é o que faremos com os dados recebidos
// aqui, somente imprimimos o texto
promise.then(data => {
    console.log(data)
})


// e aqui temos nosso código síncrono, que é executado antes da promise acima
for (let i = 0; i <= 1000; i++) {
    console.log(i)
}