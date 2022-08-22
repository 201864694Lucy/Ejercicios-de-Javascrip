/*
Calcular mediante un algoritmo repetitivo la suma de los N primeros
números naturales.
*/
function suma(numero = ""){
    let resultado = 0, num=numero;
    if(!numero) return console.warn("No has ingresado el numero");
    if(typeof(numero)!="number") return console.error("Solo se acepta valor Numerico");
    if(Math.sign(numero)===-1) return console.error("No se aceptan numeros negativos");
    for(let i = numero; i>=0;i--){ 
        resultado = resultado + numero;
        numero--;
        
    }
    console.log(`La suma de los ${num} primeros numeros naturales es: ${resultado}`);
}
suma(6);