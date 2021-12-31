// utilizando a lib axios para consumir uma API

// chamando a lib axios e atribuindo ela à const request
const axios = require('axios')
const API_URL = 'https://api.adviceslip.com/advice'

// fazendo a requisição na URL e o axios retorna uma promise, e desta vez utilizaremos o async await
// contudo o await só funciona dentro de uma função async, então precisamos criar esta função
const getdata = async (axios, API_URL) => {
    const res = await axios.get(API_URL)
    console.log(res.data)
}

getdata(axios, API_URL)