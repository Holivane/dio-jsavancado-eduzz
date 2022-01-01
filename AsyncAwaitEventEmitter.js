// Async/Await
const asyncTimer = async () => new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(12345)
    }, 1000)
})
const simpleFunc = async () => { //a palavra async torna a função uma promise
    const data = await asyncTimer() //await faz esperar a realização da Promise
    return data
}

simpleFunc().then(data => {
    console.log(data)
})