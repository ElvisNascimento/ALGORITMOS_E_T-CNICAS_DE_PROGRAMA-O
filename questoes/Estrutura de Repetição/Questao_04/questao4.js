// 4) Escrever um algoritmo que leia uma quantidade desconhecida de números e conte quantos deles
// estão nos seguintes intervalos: [0-25], [26-50], [51-75] e [76-100]. A entrada de dados deve
// terminar quando for lido um número negativo.

let numeros=[1,10,40,50,-30,80];

//intervalos de 0 a 25;
let inter1 = 0;
//intervalos de 26 a 50;
let inter2 = 0;
//intervalos de 51 a 75;
let inter3 = 0;
//intervalos de 76 a 100;
let inter4 = 0;

for(i = 0; i < numeros.length; i++)
{
    if(numeros[i] < 0)
    {
        break;
    }
    if(numeros[i] > 0 && numeros[i] < 25)
    {
        inter1++;
    }
    if(numeros[i] > 26 && numeros[i] < 50)
    {
        inter2++;
    }
    if(numeros[i] > 51 && numeros[i] < 75)
    {
        inter3++;
    }
    if(numeros[i] > 76 && numeros[i] < 100)
    {
        inter4++;
    }
}
document.write('intervalos entre 0 e 25 = ',inter1,'<br>');
document.write('intervalos entre 26 e 50 = ',inter2,'<br>');
document.write('intervalos entre 51 e 75 = ',inter3,'<br>');
document.write('intervalos entre 76 e 100 = ',inter4,'<br>');