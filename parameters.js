function operaciones(a, b) {
    let suma = a + b
    let resta = a - b
    return [suma, resta]
}

let [s, r] = operaciones(9, 4)

let p = {
    nombre: 'Roberto',
    apellidos: 'Sanz',
    edad: 25,
    mostrar: function () {
        
    }
}

p.mostrar()
p.nombre

// function mostrar({nombre, apellidos, edad}) {
//     console.log(nombre, apellidos, edad)
// }

// function mostrar(persona) {
    
// }

function mostrar(nombre, apellidos, edad) {
    
}

mostrar('Uno', 'Dos', 4)

mostrar(p.nombre, p.apellidos, p.edad)
mostrar({
    nombre: 'Ana',
    apellidos: 'Marrtin',
    edad: 45
})
// mostrar(89)

function suma (a, b) {
        return a+b
    }
    function multiplicacion (a, b) {
        return a*b
    }


export { suma, multiplicacion}