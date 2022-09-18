// 3) Desenvolver um algoritmo que leia um número não determinado de valores e calcule e escreva a
// média aritmética dos valores lidos, a quantidade de valores positivos, a quantidade de valores
// negativos e o percentual de valores negativos e positivos.

let numeros=[10,1,6,-6,-3,22,-47,12];
// numeros = [10,10,10,10,10,10,10,10,10]

let soma=0;
let quantidade_Positivos = 0;
let quantidade_Negativos = 0;
let percentualNegativo = 0;
let percentualPositivo = 0;


for(i = 0; i < numeros.length; i++)
{
    soma +=(numeros[i]);
    if(numeros[i] > 0){
        quantidade_Positivos++;
    }else{
        quantidade_Negativos++;
    }
}

let media = soma / numeros.length;
percentualNegativo = (quantidade_Negativos * 100)/numeros.length ;
percentualPositivo = (quantidade_Positivos * 100)/numeros.length;

document.write("Media:", media ,'<br>');
document.write("Quantidade de positivos : ", quantidade_Positivos,' Numeros <br>');
document.write("Quantidade de negativos : ", quantidade_Negativos,' Numeros <br>');
document.write("percentual Positivo : ", percentualPositivo,'% <br>');
document.write("percentual de negativos : ", percentualNegativo,'% <br>');

