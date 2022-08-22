/*
Dadas N notas de un estudiante, escribir un algoritmo que calcule:
a) Cuántas notas tiene desaprobadas.
b) Cuántas aprobadas.
c) El promedio de notas.
d) El promedio de notas aprobadas y el de desaprobadas.
*/
let desA = [], apro = [];
const notas = (arreglo = []) => {

    if (!arreglo) return console.warn("Ingresa las notas"); 
    if (!Array.isArray(arreglo)) return console.warn("Debe ser una serie de notas"); 
    for (let num of arreglo) {
      if (typeof num !== "number") {
        return console.log("El arreglo debe de ser numericos")
      }
      desA = arreglo.filter(num => num <=5);
      apro = arreglo.filter(num => num >=6);
    }
    console.info(`Notas Desaprobados ${desA}`);
    console.info(`Notas Aprobados ${apro}`);
    console.info(`Promedio General: ${promedio = (arreglo.reduce((previous, current) => current += previous)) / arreglo.length}`);
    console.info(`Promedio Desaprobadas: ${promedio = (desA.reduce((previous, current) => current += previous)) / desA.length}`);
    console.info(`Promedio Aprobadas: ${promedio = (apro.reduce((previous, current) => current += previous)) / apro.length}`);
    
}
    
    notas([1,2,7,6]);