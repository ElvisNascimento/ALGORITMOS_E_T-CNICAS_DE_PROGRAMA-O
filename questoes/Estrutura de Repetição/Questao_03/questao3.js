// 3) Desenvolver um algoritmo que leia um número não determinado de valores e calcule e escreva a
// média aritmética dos valores lidos, a quantidade de valores positivos, a quantidade de valores
// negativos e o percentual de valores negativos e positivos.

numero=[10,10,6];

let soma=0;
let quantidade_Positivos = 0;
for(i = 0; i < numero.length; i++)
{
    soma += soma + numero[i];
}
console.log("media:", soma / numero.length);
