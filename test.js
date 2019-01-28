class Cuidador{

    constructor(pNombre, pProvincia) {
        this.nombre = pNombre
        this.provincia = pProvincia
    }

}

class Animal {

    constructor(pNombre, pCuidador) {
        this._nombre = pNombre
        this.cuidador = pCuidador
    }

    get nombre() {
        return this._nombre.toLowerCase()
    }

    set nombre(newNombre) {
        this._nombre = newNombre
    }

    mostrar() {
        return `Me llamo ${this.nombre} y tengo de cuidador a ${this.cuidador.nombre} (${this.cuidador.provincia})`
    }

}

class Perro extends Animal {

    constructor(pNombre, pCuidador, pRaza='Bulldog') {
        super(pNombre, pCuidador)
        this.raza = pRaza
    }

    hablar() {
        return 'Guau guau!'
    }

}

class Gato extends Animal{

    constructor(pNombre, pCuidador, pPelo) {
        super(pNombre, pCuidador)
        this.pelo = pPelo
    }

    hablar() {
        return 'Miau miau!'
    }

}

let cuidador = new Cuidador('Ramón', 'Murcia') 

let animal1 = new Animal('Tobby', cuidador)
console.log(animal1.nombre)
animal1.nombre = 'NuevoNombre'
console.log(animal1.mostrar())

let perro1 = new Perro('Tom', cuidador, 'Yorkshire')
console.log(perro1.nombre)
console.log(perro1.mostrar())
console.log(perro1.hablar())

let gato1 = new Gato('Gary', cuidador, true)
console.log(gato1.mostrar())
console.log(gato1.hablar())

// function operacion(a, b, oper='+') {
//     switch (oper){
//         case '+':
//             return a + b
//         case '-':
//             return a - b
//         case '*':
//             return a * b
//         case '/':
//             return a/b
//     }
// }
// operacion(3, 4, '+')
// operacion(3, 4, '-')
// operacion(3, 4)
