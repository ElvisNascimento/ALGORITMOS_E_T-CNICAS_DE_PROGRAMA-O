// 9) Escreva um algoritmo que leia um valor inicial A e uma razão R e imprima uma seqüência em
// P.G. contendo 10 valores.



let pTermo = 1;
let qRazao = 2;
let nTermo = 1000;

//formula:  T2 = T1 * Q;
for(i=pTermo;i < nTermo; i *= qRazao)
{
    document.write('i :', i,'<br>');
}

