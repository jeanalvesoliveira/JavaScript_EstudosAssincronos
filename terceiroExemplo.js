// utilizando a lib request para consumir uma API

// chamando a lib request e atribuindo ela à const request
const request = require('request')
const API_URL = 'https://api.adviceslip.com/advice'

// fazendo a requisição na URL e tendo como retorno uma callback
request(API_URL, {headers: {'User-Agent': 'node.js'}}, (err, res, body) => {
    // imprimindo o body, formatado em JSON
    console.log(JSON.parse(body))
})