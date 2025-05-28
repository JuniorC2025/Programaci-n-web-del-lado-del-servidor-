function multiplicacionDos (a, b) {
    return a * b;
}

function multiplicacion (a, b) {
    if  (typeof a !== 'number'|| typeof b !== 'number' || !Number.isFinite(a) || !Number.isFinite(b) || !Number.isSafeInteger(a) || !Number.isSafeInteger(b)) {
        return NaN;
    }
    return a * b;
}
/*
console.group('pruebas manuales');
console.log('caso normal', multiplicacion(2,3));
console.log('caso con decimales', multiplicacion(1.5, 4.5));
console.log('caso frontera', multiplicacion(0, 5));
console.log('caso frontera', multiplicacion(Number.MAX_SAFE_INTEGER, 2));
console.log('caso frontera invalido', multiplicacion(100000000000000000, 2));
console.log('caso invalido', multiplicacion(a, 2));
console.log('caso invalido', multiplicacion(undefined, 2));
console.log('caso invalido sin argumentos', multiplicacion());
console.log('caso invalido coexión', multiplicacion('2', '3'));
console.log('nulo', multiplicacion(null, 5));
console.log('caso con argumentos negativos', multiplicacion(-3, 2));
console.log('caso con ambos casos negativos', multiplicacion(-3, -2));
*/

//console.groupEnd();
module.exports = {multiplicacion};