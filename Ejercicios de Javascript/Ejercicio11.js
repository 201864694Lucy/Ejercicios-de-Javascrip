/*
Una tienda se dedica a la venta de computadoras, cada vendedor
tiene un sueldo mensual pero además de su sueldo gana una comisión por
venta: Si el monto de venta es mayor de 10,000 la comisión será del 15%.
Si el monto de venta es mayor o igual a 5,000 y menor de 10,000 la
comisión es del 5%. Si el monto de la venta es menor que 5,000 no tiene
comisión. Escribir un algoritmo que calcule el sueldo total de cada
vendedor.
*/
//EL SUELDO MENSUAL QUE SE LE ASIGNO A LOS VENDEDORES EN LA SOLUCION DEL PROBLEMA ES DE $3000
let sueldoMensual=3000;
function vendedor(venta=undefined){
    if(!venta) return console.error("No ah ingresado el monto de la venta");
    if(typeof(venta)!="number") return console.warn("Solo se aceptan valores numericos");
    if(Math.sign(venta)===-1) return console.error("No se aceptan numeros menor de cero");
    if(venta>=10000){
        sueldoMensual=sueldoMensual+((venta*15)/100);
        console.info(`Es te mes ha ganado una comision del 15% de su venta`)
        console.info(`Su suelde del mes + la comision es de $ ${sueldoMensual}`)
    }
    if(venta>=5000 && venta<10000){
        sueldoMensual=sueldoMensual+((venta*5)/100);
        console.info(`Es te mes ha ganado una comision del 5% de su venta`)
        console.info(`Su suelde del mes + la comision es de $ ${sueldoMensual}`)
    }
    if(venta<5000) {console.info(`Es te mes no ha logrado una comisio`)
    console.info(`Su suelde del mes es de $ ${sueldoMensual}`)}
}
vendedor(10000);