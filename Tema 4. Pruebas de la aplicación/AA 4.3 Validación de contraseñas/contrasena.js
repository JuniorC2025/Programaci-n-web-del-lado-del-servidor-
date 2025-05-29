function contrasenaDebil(contrasena) {
  return typeof contrasena === 'string' && contrasena.length >= 8;
}

function validarContrasena(contrasena) {
  
  if (typeof contrasena !== 'string' || contrasena.length < 8) {
return NaN;
  }
  
  const speciales = /[@\/$%^&^()]/; 
  const may = /[A-Z]/;
  const min = /[a-z]/;
  const num = /[0-9]/;
  const pSignificativa = /(playa|perro|cantante|hija|2002|petcacab)/i;
  
  if (may.test(contrasena) && min.test(contrasena) && num.test(contrasena) &&
    speciales.test(contrasena) &&
    pSignificativa.test(contrasena) &&
    !contrasena.includes(" ")) {
return true;
    }
  return NaN;
}

module.exports = {
  contrasenaDebil, 
  validarContrasena};