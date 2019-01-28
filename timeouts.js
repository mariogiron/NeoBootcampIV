let cont = 0

let interval = setInterval(function () {
    console.log(cont++)
    if (cont == 10) {
        clearInterval(interval)
    }
}, 1000)

setTimeout(function () {
    console.log('Ejecuto Timeout')
}, 3000)

console.log('FINAL!!')