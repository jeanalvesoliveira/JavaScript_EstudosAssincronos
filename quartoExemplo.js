// utilizando a lib axios para consumir uma API

// chamando a lib axios e atribuindo ela à const request
const axios = require('axios')
const API_URL = 'https://api.adviceslip.com/advice'

// fazendo a requisição na URL e o axios retorna uma promise, e a tratamos com o .then
axios.get(API_URL).then(res => {
    console.log(res.data)
})