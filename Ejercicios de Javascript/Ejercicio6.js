/*
Escribir un algoritmo que lea las horas trabajadas de una persona y la
tarifa de pago para calcular su salario e imprimirlo.
*/
function calcularSueldo(horas ="",tarifa =""){

    if(!tarifa || !horas) return console.warn("Los datos no estan completos");
    if(typeof(tarifa || horas)!="number") return console.error("Solo se aceptan numeros");
    if(Math.sign(tarifa || horas)=== -1) return console.error("El valor no puede ser negativo");
    let sueldo;
    sueldo = tarifa*horas;
    console.info(`El salario total es de: ${sueldo}`);
}
calcularSueldo(2,2.5);