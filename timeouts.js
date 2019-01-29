// let cont = 0

// let interval = setInterval(() => {
//     console.log(cont++)
//     if (cont == 10) {
//         clearInterval(interval)
//     }
// }, 1000)

// setTimeout(() => {
//     console.log('Ejecuto Timeout')
// }, 3000)

// console.log('FINAL!!')

let saludar = saludo => console.log(`El saludo es ${saludo}`)
saludar('Hola')

let sumar = (a, b) => {
    return a + b
}
console.log(sumar(3, 6))

let precios = [300, 235, 123, 590, 90, 198]

// let preciosMitad = precios.map(function (value) {
//     return value*0.5
// })
let preciosMitad = precios.map(value => value*0.5)
console.log(preciosMitad)

let preciosMayores = precios.filter(value => value > 250 && value < 400)
console.log(preciosMayores)

let valueMenor200 = precios.find(value => value < 50)
console.log(valueMenor200)

let preciosDoble = []
precios.forEach(value => {
    console.log(value)
    console.log(value * 2)
    if (value < 100) {
        preciosDoble.push(value * 2)
    }
})
console.log(preciosDoble)

let todosMayores100 = precios.every(value => value > 100)
console.log(todosMayores100)

let preciosOrdenados = precios.sort((a,b) => {
    // if (a < b) {
    //     return 1
    // } else if (a == b) {
    //     return 0
    // } else {
    //     return -1
    // }
    return b-a
})
console.log(preciosOrdenados)

let suma = precios.reduce((a, b) => a+b)
console.log(suma)
