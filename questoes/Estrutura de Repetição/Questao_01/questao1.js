// 1) Desenvolver um algoritmo que efetue a soma de todos os números ímpares que são múltiplos de
// três e que se encontram no conjunto dos números de 1 até 500.
let numeros=[];

let soma;

for(i = 1 ;i < numeros.length;i++)
{
    if(numeros[i] % 2 !== 0 && numeros[i] % 3===0){
        soma += numeros[i];
    }
}
