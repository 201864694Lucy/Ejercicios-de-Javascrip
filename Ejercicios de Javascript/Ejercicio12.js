/*
Katthy organiza una fiesta en la cual una computadora controla el
ingreso mediante 5 claves. Si se ingresa al menos una clave incorrecta la
computadora imprimirá "TE EQUIVOCASTE DE FIESTA" y no permitirá el
ingreso. Si las 5 claves son correctas imprimirá "BIENVENIDO A LA FIESTA".
Escribir un algoritmo que realice lo anterior.
Las Claves son:
1: "TIENES"
2: "QUE SER"
3: "INVITADO"
4: "PARA"
5: "INGRESAR"
*/
const clave=(clave1="",clave2="",clave3="",clave4="",clave5="")=>{
    if(!clave1&&!clave2&&!clave3&&!clave4&&!clave5) return console.error("No has ingresado nada");
    if(!clave1||!clave2||!clave3||!clave4||!clave5) return console.error("Las claves no estan completas");
    if(typeof(clave1)!="string"||
       typeof(clave2)!="string"||
       typeof(clave3)!="string"||
       typeof(clave4)!="string"||
       typeof(clave5)!="string") return console.error("Solo se aceptan palabras");
    if(
        clave1.toUpperCase()==="TIENES" &&
        clave2.toUpperCase()==="QUE SER" &&
        clave3.toUpperCase()==="INVITADO" &&
        clave4.toUpperCase()==="PARA" &&
        clave5.toUpperCase()==="INGRESAR" 
        )return console.info("BIENVENIDO A LA FIESTA")
        else console.info("TE EQUIVOCASTE DE FIESTA");

}
clave("tienes","QUE SER","INVITADO",2,"ingresar");