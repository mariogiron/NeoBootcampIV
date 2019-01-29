'use strict';

var _profesor = require('./profesor');

var _profesor2 = _interopRequireDefault(_profesor);

var _asignatura = require('./asignatura');

var _asignatura2 = _interopRequireDefault(_asignatura);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var prof1 = new _profesor2.default('Ramiro', 'González', 5);
console.log(prof1.mostrarProfesor());

var algebra = new _asignatura2.default('Álgebra', prof1);
var electronica = new _asignatura2.default('Electrónica', prof1);
var fisica = new _asignatura2.default('Física', prof1);

console.log(algebra.mostrarAsignatura(true));