console.log('Hola Mundo Typescript')

let num: number = 4
let cadena: string = 'Hola Mundo'

let bool: boolean = true

let arrNums: number[] = [1, 2, 3, 4]

let arrCadenas: Array<string> = ['uno', 'dos']

let chungo: any = 'Cadena'
chungo = 34
chungo = true
chungo = [1,2,3,4]

function suma(a: number, b: number): any {
    return a + b
}
function suma2(a, b) {
    return a+b
}

let s1 = suma(, true)
let s2 = suma2('Hola', 'Mundo')