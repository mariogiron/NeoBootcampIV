// let prom = new Promise((resolve, reject) => {
//     for (let i = 0; i < 100000; i++) {
//         console.log(i)
//     }
//     resolve()
// })

// prom.then(() => {
//     console.log('Finaliza la promesa')
// }).catch(() => {
//     console.log('Error!')
// })

let prom2 = new Promise((resolve, reject) => {
    let numRandom = Math.floor(Math.random() * 100)
    if (numRandom > 50) {
        // reject(numRandom)
        throw new SyntaxError('Te has colao!')
    } else {
        resolve(numRandom)
    }
})

prom2.then((num) => {
    console.log(`El número es menor de 50 (${num})`)
}).catch((num) => {
    // console.log(`El número es mayor de 50 (${num})`)
    throw new Error('Te has colao!')
})
