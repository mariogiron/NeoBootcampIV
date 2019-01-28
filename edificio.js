class Persona{

    constructor(pNombre, pApellidos, pEdad) {
        this.nombre = pNombre
        this.apellidos = pApellidos
        this.edad = pEdad
    }

    mostrar() {
        return `PERSONA: ${this.nombre} ${this.apellidos} (${this.edad})`
    }

}

class Casa{

    constructor(pPiso, pLetra) {
        this.piso = pPiso
        this.letra = pLetra
        this.inquilinos = []
    }

    agregarInquilino(pPersona) {
        this.inquilinos.push(pPersona)
    }

    mostrar() {
        let res = `CASA: piso ${this.piso} letra ${this.letra}`
        for (let i = 0; i < this.inquilinos.length; i++){
            res += '\n\t'
            res += this.inquilinos[i].mostrar()
        }
        return res
    }

}

class Edificio {

    constructor(pCalle, pNumero) {
        this.calle = pCalle
        this.numero = pNumero
        this.viviendas = []
    }

    agregarVivienda(pVivienda) {
        this.viviendas.push(pVivienda)
    }

    mostrar() {
        let res = `EDIFICIO: calle ${this.calle} número ${this.numero}`
        for (let i = 0; i < this.viviendas.length; i++){
            // res += '\n\t'
            res += '\n\t' + this.viviendas[i].mostrar()
        }
        return res
    }

}

let pers1 = new Persona('Manuel', 'Martínez', 45)
let pers2 = new Persona('Ana', 'García', 36)
let pers3 = new Persona('Raul', 'García', 76)

let casa1 = new Casa(1, 'a')
let casa2 = new Casa(1, 'b')
let casa3 = new Casa(2, 'a')
let casa4 = new Casa(2, 'b')

casa3.agregarInquilino(pers1)
casa3.agregarInquilino(pers2)
casa1.agregarInquilino(pers3)

let edif1 = new Edificio('Gran Via', 23)
edif1.agregarVivienda(casa1)
edif1.agregarVivienda(casa2)
edif1.agregarVivienda(casa3)
edif1.agregarVivienda(casa4)

console.log(edif1.mostrar())

console.log(edif1.viviendas[2].inquilinos[1].nombre)