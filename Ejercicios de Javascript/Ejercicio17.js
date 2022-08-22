/*
Modificar el ejercicio 1 para obtener la suma de los salarios de 200
trabajadores.
*/
let tarifa=0, sumaSueldos=0;
 function salario(sueldo = "",horas ="" ){
    if(!sueldo || !horas) return console.warn("Los datos no estan completos");
    if(typeof(sueldo || horas)!="number") return console.error("Solo se aceptan numeros");
    if(Math.sign(sueldo || horas)=== -1) return console.error("El valor no puede ser negativo");
    if(horas>40){
        tarifa = sueldo + (horas*((sueldo/horas)*50)/100);
        console.info(`El salario total con la tarifa incluida es de:${tarifa} `);
        console.info(`La suma de los salarios de los 200 trabajadores es de: $ ${tarifa*200}`);
    }else{console.info("Las horas trabajadas no es suficiente para agregar la tarifa.")
            console.info(`El sueldo es de:${sueldo}`)
            console.info(`La suma de los salarios de los 200 trabajadores es de: $ ${sueldo*200}`);
        }
            
 }
salario(1000, 40);
