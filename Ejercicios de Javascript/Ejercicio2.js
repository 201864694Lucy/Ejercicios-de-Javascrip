/*
A un trabajador le descuentan de su sueldo el 10% si su sueldo es menor o
igual a 1000, por encima de 1000 y hasta 2000 el 5% del adicional, y por
encima de 2000 el 3% del adicional. Escribir un algoritmo que calcule el
descuento y sueldo neto que recibe el trabajador dado su sueldo.
*/
let sueldoNeto =0;
function descTrabajador(sueldo = ""){
    if(!sueldo) return console.error("No has ingresado el sueldo");
    if(typeof(sueldo) !== 'number') return console.error(" El valor debe ser numerico");
    if(sueldo<=1000) {
        sueldoNeto = sueldo - ((sueldo * 10) /100);
        console.info(`El sueldo base es $"${sueldoNeto}"`);
    }
    if(sueldo>1000 && sueldo<2000) {
        sueldoNeto = sueldo - ((sueldo * 5) /100);
        console.info(`El sueldo base es $"${sueldoNeto}"`);
    }
    if(sueldo>2000) {
        sueldoNeto = sueldo - ((sueldo * 3) /100);
        console.info(`El sueldo base es $"${sueldoNeto}"`);
    }
}
descTrabajador("no");