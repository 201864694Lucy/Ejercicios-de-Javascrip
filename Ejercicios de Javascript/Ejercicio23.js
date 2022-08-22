/*
Escribir un algoritmo que calcule la suma y el producto de los
números pares comprendidos entre 20 y 400 incluyendo ambos.
*/ 
let sum=0, pro=0;
let arreglo= new Array();
const sumar=(num=20)=>{
    for(let i=num;i<=400;i++){
        if(i>=20 && i % 2 ===0){
            arreglo.push(i);
        }
    };
    console.info(`Suma: ${suma = (arreglo.reduce((previous, current) => current += previous))}`);
    console.info(`Multiplicacion: ${producto = (arreglo.reduce((previous, current) => current *= previous))}`);
      
}
sumar();