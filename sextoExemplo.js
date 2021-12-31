// mesmo exemplo do quinto, mas fazendo várias requisições ao mesmo tempo

// chamando a lib axios e atribuindo ela à const request
const axios = require('axios')
const API_URL = id => `https://api.adviceslip.com/advice/${id}`
const indices =['1', '5', '7', '9', '12', '13']

// abaixo a função utilizando o await em cada requisição à API - resultando no tempo de +/- 5s para resolver
// const getdata = async (axios, API_URL) => {
//     console.time()
//     const res1 = await axios.get(API_URL('1'))
//     const res2 = await axios.get(API_URL('5'))
//     const res3 = await axios.get(API_URL('7'))
//     const res4 = await axios.get(API_URL('9'))
//     const res5 = await axios.get(API_URL('12'))
//     const res6 = await axios.get(API_URL('13'))
//     console.timeEnd()
// }

// a mesma função acima, mas utilizando o laço for para "encurtar" o código
// mas sem ganhos performáticos
const getData1 = async (axios, API_URL) => {
    console.time('Utilizando o await tradicionalmente')
    for (let id of indices) {
        const res = await axios.get(API_URL(id))
    }
    console.timeEnd('Utilizando o await tradicionalmente')
}

// para performar o código quando temos vários requisições ao mesmo tempo
// utilizamos o await uma única vez, em conjunto com o Promise.all([])
// agora utilizando o Promise.all([]), que coloca as promises para serem executadas em paralelo
// resultando no tempo de +/- 1s para resolver
const getData2 = async (axios, API_URL) => {
    console.time('com Promise.all([])')
    const promises = []
    for (let id of indices) {
        promises.push(axios.get(API_URL(id)))
    }
    await Promise.all(promises)
    console.timeEnd('com Promise.all([])')
}

getData1(axios, API_URL)
getData2(axios, API_URL)