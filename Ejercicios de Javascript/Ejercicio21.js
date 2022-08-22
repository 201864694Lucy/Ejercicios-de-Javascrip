/*
Desarrollar un algoritmo para calcular e imprimir el factorial de un
número dado.
*/

function factorial(numero = ""){
    let resultado = numero;
    if(!numero) return console.warn("No has ingresado el numero");
    if(typeof(numero)!="number") return console.error("Solo se acepta valor Numerico");
    for(let i = 0; i<=numero;i++){
        numero--; 
        resultado = resultado * numero;
        
    }
    console.log(resultado);
}
factorial(5);