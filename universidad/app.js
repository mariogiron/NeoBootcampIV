import Profesor from './profesor'
import Asignatura from './asignatura'

let prof1 = new Profesor('Ramiro', 'González', 5)
console.log(prof1.mostrarProfesor())

let algebra = new Asignatura('Álgebra', prof1)
let electronica = new Asignatura('Electrónica', prof1)
let fisica = new Asignatura('Física', prof1)

console.log(algebra.mostrarAsignatura(true))