function sumar() { // a. igualdad extacta con toBe: sumar 10 + 10 = 20
    return 10 + 10;
}

function crearObjeto() { // b. comparación de objetos con toEquals
    return { id: 1, nombre: "test", activo: true };
}

function verificarValores(tipo) { // c. Verificar valores nulos y definidos
    if (tipo === 'null') return null;
    if (tipo === 'undefined') return undefined;
    return 'definido';
}

function cadenas() { // e. Coincidencia de cadenas
    return "Jest es un framework de testing";
}

function Array() { // f. Función para array
    return [1, 2, 3, 4, 5];
}

function PruebasAsincrona(exito) { // h. Función asíncrona
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (exito) {
                resolve('Éxito');
            } else {
                reject('Error');
            }
        }, 100);
    });
}

module.exports = {
    sumar,
    crearObjeto,
    verificarValores,
    cadenas,
    Array,
    PruebasAsincrona
};