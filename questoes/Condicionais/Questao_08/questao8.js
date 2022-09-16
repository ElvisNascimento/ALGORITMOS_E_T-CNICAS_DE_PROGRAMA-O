// 8) Escreva um algoritmo que leia três Numeroes inteiros e diferentes e mostre-os em ordem
// decrescente.

let valorA =12;
let valorB =473;
let valorC =91;

let varSuporte = valorA;

//maior entre A e B
if(valorB > valorA)
{
    varSuporte = valorB;
    valorB = valorA;
    valorA = varSuporte;
}
//maior entre C e A
if(valorC > valorA)
{
    varSuporte = valorC;
    valorC = valorA;
    valorA = varSuporte;
}
//maior entre C e B
if(valorC > valorB)
{
    varSuporte = valorC;
    valorC = valorB;
    valorB = varSuporte;
}


document.write('Maior = ',valorA ,'<br>','Intermediario = ', valorB,'<br>' , 'Menor = ',valorC ,'<br>');