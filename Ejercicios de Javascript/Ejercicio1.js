/*
A un trabajador le pagan según sus horas trabajadas y una tarifa de pago
por hora. Si la cantidad de horas trabajadas es mayor a 40 horas, la
tarifa se incrementa en un 50% para las horas extras. Escribir un
algoritmo que calcule el salario del trabajador dadas las horas trabajadas
y la tarifa.
*/
let tarifa=0;
 function salario(sueldo = "",horas ="" ){
    if(!sueldo || !horas) return console.warn("Los datos no estan completos");
    if(typeof(sueldo || horas)!="number") return console.error("Solo se aceptan numeros");
    if(Math.sign(sueldo || horas)=== -1) return console.error("El valor no puede ser negativo");
    if(horas>40){
        tarifa = sueldo + (horas*((sueldo/horas)*50)/100);
        console.info(`El salario total con la tarifa incluida es de:${tarifa} `)
    }else{console.info("Las horas trabajadas no es suficiente para agregar la tarifa.")
            console.info(`El sueldo es de:${sueldo}`)}
 }
salario(1000, 40);
