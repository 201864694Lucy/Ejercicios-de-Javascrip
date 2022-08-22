/*
Escribir un algoritmo que calcule la media de 100 números dados e
imprima su resultado.
*/
const separarArreglo = (arreglo = undefined) => {
    if(arreglo === undefined) return console.warn("El arreglo debe de ser numerico");
    if(!(arreglo instanceof Array)) return console.error("No has ingresado un arreglo");
    if(arreglo.length === 0) return console.error("El arreglo está vacio");
    if(arreglo.length > 100) return console.error("Solo se aceptan un maximo de 100 numeros");

    for (const num of arreglo) {
        if(typeof num !== "number") return console.error(`"${num}" NO es un numero`);
    }
    console.info(`Promedio General: ${promedio = (arreglo.reduce((previous, current) => current += previous)) / arreglo.length}`);
    

}
separarArreglo([1,2,3,4,5,6,6,7,8,5,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2]);