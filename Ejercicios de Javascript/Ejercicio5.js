/*
Escribir un algoritmo que lea un tiempo en minutos y que calcule los días,
horas y minutos que le corresponden.
*/
let minutos2 =0,horas=0, dias =0;
function leeMinutos (minutos = undefined){
    if(!minutos) return console.warn("No has ingresado los minutos");
    if(typeof(minutos)!="number") return console.error("Solo se acepta valor Numerico");
    if(Math.sign(minutos)=== -1) return console.error("El valor no puede ser negativo");
    dias = Math.floor(minutos/1440);
    horas = Math.floor((minutos%1440)/60);
    minutos2= (minutos%1440)%60;
    console.info(`Dias: "${dias}"`);
    console.info(`Horas: "${horas}"`);
    console.info(`Minutos: "${minutos2}"`);

}
leeMinutos(70);