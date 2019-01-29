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

export default Asignatura