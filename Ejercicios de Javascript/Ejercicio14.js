/*
"TIENDAS PATITO" se encuentra de aniversario y ha programado una
serie de ofertas con la finalidad de brindar facilidades a sus clientes y
al a vez de incrementar sus ventas. Estas ofertas se basan específicamente
en un porcentaje de descuento sobre el total de compra el cual varia de
acuerdo al monto. Por un monto mayor o igual a $500 se hará un descuento
del 30%. Por un monto menor de $500 pero mayor o igual a 200 se hará un
descuento del 20%.Por un monto menor de $200 pero mayor o igual a 100 se
hará un descuento del 10%. Escribir un algoritmo que calcule la cantidad
total a pagar de una compra.
*/
let descuentoAplicado=0;
function descuento(total=""){
    if(!total) return console.warn("No has ingresado el total");
    if(typeof(total)!="number") return console.error("Solo se aceptan numeros");
    if(Math.sign(total)=== -1) return console.error("El total no puede ser negativo");
    if(total>=500){
        descuentoAplicado =total- ((total*30)/100);
        console.log(`El total a pagar con el descuento incluido es de: $ ${descuentoAplicado}`);
    }

    if(total<500 && total>=200){
        descuentoAplicado =total- ((total*20)/100);
        console.log(`El total a pagar con el descuento incluido es de: $ ${descuentoAplicado}`);
    }

    if(total<200 && total>=100){
        descuentoAplicado =total- ((total*10)/100);
        console.log(`El total a pagar con el descuento incluido es de: $ ${descuentoAplicado}`);
    }
}
descuento(500);