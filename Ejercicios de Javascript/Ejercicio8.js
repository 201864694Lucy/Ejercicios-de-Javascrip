/*
Escribir el algoritmo que muestre el mensaje de acuerdo a la edad
ingresada: Si la edad es de 0 a 10 años “niño”, si la edad es de 11 a 14
años “púber” , si la edad es de 15 a 18 años “ adolescente” , si la edad
es de 19 a 25 años “joven” , si la edad es de 26 a 65 años “ adulto” , si
la edad es mayor de 65 “anciano”.
*/

function edad(edad=""){
    if(!edad) return console.warn("No has ingresado la edad");
    if(typeof(edad)!="number") return console.error("Solo se aceptan numeros");
    if(Math.sign(edad) === -1) return console.error('El numero no puede ser negativo');
    if(edad<=10) return console.info("Niño");
    if(edad>10 && edad<15) return console.info("Púber");
    if(edad>=15 && edad<=18) return console.info("Adolescente");
    if(edad>=19 && edad<=25) return console.info("Joven");
    if(edad>=26 && edad<=65) return console.info("Adulto");
    if(edad>65) return console.info("Anciano");
}
edad(-1);
