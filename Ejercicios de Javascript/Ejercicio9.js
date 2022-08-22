/*
Escribir el algoritmo que lea una hora y que muestre la programación de
acuerdo al horario en que se transmite “dibujos animados ” : Si es de 10 a
12 horas, “ tele serie ” : si es de 13 a 16 horas, “ novelas repetidas ” :
si es de 16 a 18 horas, “dibujos animados ” : si es de 18 a 22 horas,
“noticiero” : si es de 22 a 23 horas.
*/ 
function horario(hora=""){
    if(!hora) return console.warn("No has ingresado la hora");
    if(typeof(hora)!="number") return console.error("Solo se aceptan numeros");
    if(Math.sign(hora) === -1) return console.error('El numero no puede ser negativo');
    if(hora>23) return console.warn("La hora debe de ser menor de 24");
    if(hora<10) return console.warn("La hora debe de ser mayor de 9");
    if(hora>=10 && hora<=12) return console.info("Dibujos animados");
    if(hora>=13 && hora<=16) return console.info("Tele serie");
    if(hora>16 && hora<=18) return console.info("Novelas repetidas");
    if(hora>18 && hora<=22) return console.info("Dibujos animados");
    if(edad>22 && edad<=23) return console.info("Noticiero");
}
horario(22);