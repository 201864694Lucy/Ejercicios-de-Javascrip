/*
Escribir un algoritmo que lea varios caracteres, uno a la vez, y que
se detenga cuando sea dada alguna de las vocales y la escriba.
*/
const separador=(cadena="")=>{
    if(!cadena) return console.warn("No ah ingresado una cadena");
    if(typeof(cadena)!="string")return console.error("No es una cadena");
    let arr=cadena.split("");
    for(let i=arr.length;i=0;i--){
        if(i==="o");
        
    }
    for(num of arr){
        if(num==="a"||num==="e"||num==="i"||num==="o"||num==="u") 
        return console.info(`En la cadena "${cadena}", "${num}" es la primera vocal que se ah encontrado`);
    }

}
separador("cabra");