/*
Dadas 3 longitudes, escribir un algoritmo que determine mediante un
mensaje si tales longitudes forman un triangulo: equilátero (cuando sus
tres lados son iguales), isósceles (cuando dos de sus lados son iguales) o
escaleno (cuando sus tres lados son diferentes), o no forman triangulo
(cada lado tiene que ser menor que la suma de los otros dos).
*/
function triangulo(lado1 = 0, lado2 = 0, lado3 = 0){
    if(!lado1 && !lado2 && !lado3) return console.warn("No has ingresado los valores");
    if(typeof(lado1 && lado2 && lado3)!="number") return console.error("Solo se aceptan numeros");
    if(Math.sign(lado1 && lado2 && lado3) === -1) return console.error('Los valores no puede ser negativo');
    if(lado1>(lado2+lado3)) return console.warn("Las longitudes no forman un tringulo");
    if(lado2>(lado1+lado3)) return console.warn("Las longitudes no forman un tringulo");
    if(lado3>(lado1+lado2)) return console.warn("Las longitudes no forman un tringulo");
    if(lado1 === lado2 && lado2=== lado3) return console.info("Se forma un triangulo equilatero");
    if(lado1===lado2 || lado1==lado3) return console.info("Se forma un triangulo isóceles");
    if(lado2===lado1 || lado2==lado3) return console.info("Se forma un triangulo isóceles");
    if(lado3===lado1 || lado3==lado2) return console.info("Se forma un triangulo isóceles");
    else return console.info("Se forma un triangulo escaleno");
}
triangulo(4,6,7);

