/*
Escribir un algoritmo que lea una cantidad y calcule el descuento
considerando que si la cantidad dada está por encima de 100 el descuento
es el 10% y si está por debajo de 100 el descuento es el 2%.
*/
let descuento = 0;
function cantidad(cantidad = ""){
    if(!cantidad) return console.warn("No has ingresado un dato");
    if(typeof(cantidad)!="number") return console.error("Solo se aceptan numeros");
    if(Math.sign(cantidad)=== -1) return console.error("El valor no puede ser negativo");
    if(cantidad<100){
        descuento=cantidad-((cantidad*2)/100)
        console.info(`El precio con descuento es de $${descuento}`);
    }
    if(cantidad>=100){
        descuento=cantidad-((cantidad*10)/100)
        console.info(`El precio con descuento es de $${descuento}`);
    }
    
}

cantidad();