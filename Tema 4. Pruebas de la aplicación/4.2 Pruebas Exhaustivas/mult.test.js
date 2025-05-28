const {multiplicacion} = require('./mult');

describe('Caso prueba Jest', () => {
    // Caso normal
    test('mult de 2*3', () => {
        expect(multiplicacion(2, 3)).toBe(6); });

    test('caso con decimales', () => {
        expect(multiplicacion(1.5, 4.5)).toBe(6.75); });

    test('caso frontera', () => {
        expect(multiplicacion(0, 5)).toBe(0); });
    
    test('caso frontera', () => {
        expect(multiplicacion(Number.MAX_SAFE_INTEGER, 2)).toBe(Number.MAX_SAFE_INTEGER*2); });

    test('caso frontera invalido', () => {
        expect(multiplicacion(100000000000000000, 2)).toBe(200000000000000000); });

     test('caso invalido', () => {
        expect(multiplicacion(a, 2)).toBe.NAN();  });

     test('caso invalido', () => {
        expect(multiplicacion(undefined, 2)).toBe.NAN(); });

     test('caso invalido sin argumentos', () => {
        expect(multiplicacion()).toBe.NAN(); });

     test('caso invalido coexión', () => {
        expect(multiplicacion('2', '3')).toBe.NAN(); });

     test('nulo', () => {
        expect(multiplicacion(null, 5)).toBe(0); });

     test('caso con argumentos negativos', () => {
        expect(multiplicacion(-3, 2)).toBe(-6); });

     test('caso con ambos casos negativos', () => {
        expect(multiplicacion(-3, -2)).toBe(6); });

    });

