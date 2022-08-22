/*
Escribir el algoritmo que permita emitir la factura correspondiente a una
compra de un articulo determinado, del que se adquieren una o varias
unidades. El IVA es del 15% y si el precio neto ( precio venta mas IVA) es
mayor de 50.00 pesos se debe realizar un descuento del 5%.
*/
let importe=0,impuestos=0,subtotal=0, total=0,descuento=0;
function factura(precio="", unidad ){
    if(!precio || !unidad) return console.warn("Los datos no estan completos");
    if(typeof(precio || unidad)!="number") return console.error("Solo se aceptan numeros");
    if(Math.sign(precio || unidad)=== -1) return console.error("El valor no puede ser negativo");
    importe = precio*unidad;
    impuestos=(importe*15)/100;
    subtotal=importe;
    total=importe+impuestos;
    if(total>50){
        descuento=(total*5)/100;
        console.info(`Subtotal:  ${subtotal}`)
        console.info(`Descuento:  ${descuento}`);
        console.info(`Impuestos transladados:  ${impuestos}`);
        console.info(`Total:  : ${total-descuento}`);
    }else{
        descuento=(total*5)/100;
        console.info(`Subtotal:  ${subtotal}`)
        console.info(`Descuento:  ${descuento = 0}`);
        console.info(`Impuestos transladados:  ${impuestos}`);
        console.info(`Total:  : ${total}`);

    }
}
factura(100,1);