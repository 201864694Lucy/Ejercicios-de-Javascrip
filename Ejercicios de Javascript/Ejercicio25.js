/*
El ing. De sistemas de un banco de crédito necesita conocer de una
lista de 2500 cuentas cuál es la que posee mayor cantidad y cuál es la que
posee menor cantidad, de dinero. Escriba un algoritmo que realice lo
anterior, sin ordenar las cuentas.
*/
const cuenta = () => {
    const cuentas=[];
     for (let i = 0; i <= 2500; i++) {
        cuentas[i]= (Math.round(Math.random() * 1000)+1000);  
     }
    return console.info(`${cuentas}\n
    Valor mayor: ${Math.max(...cuentas)}\n
    Valor menor: ${Math.min(...cuentas)}`);  
}   
cuenta();

