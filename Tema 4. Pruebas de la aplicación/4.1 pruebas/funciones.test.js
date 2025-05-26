const {
    sumar,
    crearObjeto,
    verificarValores,
    cadenas,
    Array,
    PruebasAsincrona
} = require('./funciones');

test('10 + 10 es igual a 20', () => { // a. Igualdad exacta con toBe
    expect(sumar()).toBe(20);
});

test('comparación de objetos idénticos', () => { // b. Comparación de objetos con toEqual
    const obj1 = crearObjeto();
    const obj2 = { id: 1, nombre: "test", activo: true };
    expect(obj1).toEqual(obj2);
});

describe('Verificación de valores especiales', () => { // c. Verificación de valores nulos y definidos
    test('debe retornar null', () => {
        expect(verificarValores('null')).toBeNull();
    });
    
    test('debe retornar undefined', () => {
        expect(verificarValores('undefined')).toBeUndefined();
    });
    
    test('debe retornar valor definido', () => {
        expect(verificarValores('any')).toBeDefined();
    });
});

const suma = require('./suma'); // d. Comparaciones numéricas (usando función suma)
describe('Comparaciones numéricas', () => {
    test('5 es mayor que 3', () => {
        expect(suma(3, 2)).toBeGreaterThan(3);
    });
    
    test('4 es menor que 5', () => {
        expect(suma(2, 2)).toBeLessThan(5);
    });
    
    test('6 es mayor o igual a 6', () => {
        expect(suma(3, 3)).toBeGreaterThanOrEqual(6);
    });
});

test('la cadena contiene "Jest"', () => { // e. Coincidencia de cadenas con regex
    expect(cadenas()).toMatch(/Jest/);
    expect(cadenas()).toMatch('testing');
});

test('el array contiene el número 3', () => {// f. Verificar el contenido de un arrays
    expect(Array()).toContain(3);
    expect([...Array(), 6]).toContain(6);
});

test('10 + 10 no es igual a 21', () => { // g. Negación de matchers con .not
    expect(sumar()).not.toBe(21);
});

describe('Pruebas asíncronas', () => { // h. Pruebas asíncronas con promesas
    test('resuelve correctamente', () => {
        return expect(PruebasAsincrona(true)).resolves.toBe('Éxito');
    });
    
    test('rechaza correctamente', () => {
        return expect(PruebasAsincrona(false)).rejects.toMatch('Error');
    });
});