/*
Dado un número n, escribir un algoritmo que determine la suma de sus
dígitos.
*/
const sumarDigitos = (numero = undefined) => {
  if(numero === undefined) return console.warn('No has ingresado un numero');
  if(typeof numero !== "number") return console.error(`El valor debe ser un número`);
  if(Math.sign(numero) !== 1) return console.error('El valor debe ser mayor a 0');
  if(!(/^[0-9]*$/.test(numero))) return console.warn('Intrudzuca solo números enteros');

  numero = numero.toString().split('');
  let aux = numero.map(el => parseInt(el));
  return console.info(`La suma de los dígitos de ${numero.join('')} es ${aux.reduce((previous,current) => previous+current)}`);

   
}
sumarDigitos(44);