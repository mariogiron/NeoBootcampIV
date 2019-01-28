class Profesor {
    constructor(pNombre, pApellidos, pExperiencia) {
        this.nombre = pNombre
        this.apellidos = pApellidos
        this.experiencia = pExperiencia
    }
    mostrarProfesor() {
        return `PROFESOR (nombre: ${this.nombre}, apellidos: ${this.apellidos}, experiencia:${this.experiencia})`
    }
}

class Asignatura {
    constructor(pNombre, pProfesor) {
        this.nombre = pNombre
        this.profesor = pProfesor
    }
    mostrarAsignatura(muestraProfesor) {
        let res = `ASIGNATURA (nombre: ${this.nombre})\n`
        if (muestraProfesor) {
            res += `Asignatura impartida por:\n`
            res += this.profesor.mostrarProfesor()
        }
        return res
    }
}

class Estudiante {
    constructor(pNombre, pApellidos) {
        this.nombre = pNombre
        this.apellidos = pApellidos
        this.asignaturas = []
    }

    agregarAsignatura(asignatura) {
        this.asignaturas.push(asignatura)
    }

    mostrarEstudiante() {
        let res = `ESTUDIANTE (nombre: ${this.nombre}, apellidos: ${this.apellidos})\n`
        res += 'Estas son las asignaturas que cursa:\n'
        for (let i = 0; i < this.asignaturas.length; i++) {
            res += this.asignaturas[i].mostrarAsignatura(true)
        }
        return res
    }
}

class Universidad {
    constructor(pNombre) {
        this.nombre = pNombre
        this.alumnos = []
    }

    agregarAlumno(pAlumno) {
        this.alumnos.push(pAlumno)
    }

    obtenerAlumnosAsignatura(nombreAsignatura) {
        let cont = 0
        // for (let alumno in this.alumnos) {
        //     console.log()
        //     for (let asignatura in this.alumnos[alumno].asignaturas) {
        //         if(this.alumnos[alumno].asignaturas[asignatura] === nombreAsignatura) cont++
        //     }
        // }
        for (let i = 0; i < this.alumnos.length; i++) {
            for (let j = 0; j < this.alumnos[i].asignaturas.length; j++) {
                if (this.alumnos[i].asignaturas[j].nombre === nombreAsignatura) {
                    cont++
                }
            }
        }
        return cont
    }

    mostrarUniversidad() {
        let res = `UNIVERSIDAD(nombre: ${this.nombre})\n`
        for (let i = 0; i < this.alumnos.length; i++) {
            res += this.alumnos[i].mostrarEstudiante()
        }
        return res
    }
}

let profesor1 = new Profesor('Ramón', 'García', 5)
let profesor2 = new Profesor('Rosa', 'Martinez', 9)

let algebra = new Asignatura('Álgebra', profesor1)
let electronica = new Asignatura('Electrónica', profesor2)
let fisica = new Asignatura('Física', profesor2)

let estudiante1 = new Estudiante('Pepe', 'Ortiz')
let estudiante2 = new Estudiante('Ana', 'Jiménez')
let estudiante3 = new Estudiante('Lola', 'López')
estudiante1.agregarAsignatura(algebra)
estudiante1.agregarAsignatura(fisica)
estudiante2.agregarAsignatura(electronica)
estudiante3.agregarAsignatura(algebra)
estudiante3.agregarAsignatura(electronica)
estudiante3.agregarAsignatura(fisica)

let uni1 = new Universidad('UC3M')
uni1.agregarAlumno(estudiante1)
uni1.agregarAlumno(estudiante2)
uni1.agregarAlumno(estudiante3)
console.log(uni1.mostrarUniversidad())
console.log(uni1.obtenerAlumnosAsignatura('Electrónica'))