// 10) Escreva um algoritmo que leia um valor inicial A e imprima a seqüência de valores do cálculo de
// A! e o seu resultado. Ex: 5! = 5 X 4 X 3 X 2 X 1 = 120

let A =10;
let multiplicacaoDosNumeros = 1;
for(i = A; i >= 1; i--)
{
    multiplicacaoDosNumeros *= i;
    document.write(multiplicacaoDosNumeros,' X ');
}
