/*
Escribir un algoritmo que lea un tiempo en segundos y que calcule los
segundos restantes que le correspondan para convertirse exactamente en
minutos.
*/
let segundos2=0;
function leeSegundos (segundos = undefined){
    if(!segundos) return console.warn("No has ingresado los segundos");
    if(typeof(segundos)!="number") return console.error("Solo se acepta valor Numerico");
    if(Math.sign(segundos)=== -1) return console.error("El valor no puede ser negativo");
    if(segundos>60){
       segundos2 = segundos % 60;
       console.log(`Faltaron "${segundos2}" segundos para acompletar otro minuto`);   
    }
    else{
        console.log(`Faltaron "${60-segundos}" segundos para ser un minuto`);
    }

}
leeSegundos(70);