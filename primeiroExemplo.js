// código síncrono
console.log('--- COMEÇO DO CÓDIGO ---')

// função setTimeout executa a função depois do tempo passado em milisegundos
// mas não trava o restante do código
setTimeout(() => {
    console.log('conteúdo assíncrono')
}, 2000)

// e aqui temos outro código síncrono, que é executado antes da função setTimeout
for (let i = 0; i <= 1000; i++) {
    console.log(i)
}
