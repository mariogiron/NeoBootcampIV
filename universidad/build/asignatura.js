"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Asignatura = function () {
    function Asignatura(pNombre, pProfesor) {
        _classCallCheck(this, Asignatura);

        this.nombre = pNombre;
        this.profesor = pProfesor;
    }

    _createClass(Asignatura, [{
        key: "mostrarAsignatura",
        value: function mostrarAsignatura(muestraProfesor) {
            var res = "ASIGNATURA (nombre: " + this.nombre + ")\n";
            if (muestraProfesor) {
                res += "Asignatura impartida por:\n";
                res += this.profesor.mostrarProfesor();
            }
            return res;
        }
    }]);

    return Asignatura;
}();

exports.default = Asignatura;