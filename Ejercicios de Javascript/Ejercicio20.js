/*
Realizar un algoritmo que permita pedir 50 números naturales y
determine e imprima cuántos son pares, impares, positivos y negativos.
*/

// ESTÁ MAL NO LO HE CHECADO
const separarArreglo = (arreglo = undefined) => {
    if(arreglo === undefined) return console.warn("El arreglo debe de ser numerico");
    if(!(arreglo instanceof Array)) return console.error("No has ingresado un arreglo");
    if(arreglo.length === 0) return console.error("El arreglo está vacio");
    if(arreglo.length > 50) return console.error("Solo se aceptan un maximo de 50 numeros");
    for (const num of arreglo) {
        if(typeof num !== "number") return console.error(`"${num}" NO es un numero`);
    }
    console.log(arreglo.length);
    return console.info({
        pares: arreglo.filter(num => num % 2 === 0),
        impares : arreglo.filter(num => num % 2 === 1),
        positivos: arreglo.filter(num => Math.sign(num)=== 1),
        negativos: arreglo.filter(num => Math.sign(num)=== -1)
    });
}
separarArreglo([1,2,3,4,5,6,6,7,8,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,-2,2,2,2,2,2,2,2,2,2,2,4]);