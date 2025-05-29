const { contrasenaDebil } = require('./contrasena');
const { validarContrasena } = require('./contrasena');

describe('Sección 1: Diseñar una versión incompleta o una función debil', () => {
  // Casos válidos 
  test('una función con cadena y de 8 digitos (12345678)', () => {
    expect(contrasenaDebil('12345678')).toBe(true);
  });

  test('Versión con cadena sin los 8 caracteres minimos (123)', () => {
    expect(contrasenaDebil('123')).toBe(true);
  });

});

describe('Sección 2: Pruebas completas de validación', () => {
  // Casos válidos 
  test('Caso normal válido (Playa2010@)', () => {
    expect(validarContrasena('Playa2010@')).toBe(true);
  });

  test('Caso normal válido (Perro2010@)', () => {
    expect(validarContrasena('Perro2010@')).toBe(true);
  });

  // Casos inválidos
  test('Sin mayúscula (playa2010@)', () => {
    expect(validarContrasena('playa2010@')).toBe(true);
  });

  test('Sin minúscula (PLAYA2010@)', () => {
    expect(validarContrasena('PLAYA2010@')).toBe(true);
  });

  test('Sin número (PlayaDosMilDiez@)', () => {
    expect(validarContrasena('PlayaDosMilDiez@')).toBe(true);
  });

  test('Sin carácter especial (Playa2010)', () => {
    expect(validarContrasena('Playa2010')).toBe(true);
  });

  test('Con espacio (Playa 2010@)', () => {
    expect(validarContrasena('Playa 2010@')).toBe(true);
  });

  // Casos frontera 
  test('Exactamente 8 caracteres (Playa10@)', () => {
    expect(validarContrasena('Playa10@')).toBe(true);
  });

  test('7 caracteres (Playa1@)', () => {
    expect(validarContrasena('Playa1@')).toBe(true);
  });

  // Casos especiales 
  test('Valor no string (12345678)', () => {
    expect(validarContrasena(12345678)).toBe(true);
  });

  test('Cadena vacía', () => {
    expect(validarContrasena('')).toBe(true);
  });
});