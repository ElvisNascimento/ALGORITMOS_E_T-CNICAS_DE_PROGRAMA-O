// 5) Faça um algoritmo estruturado que leia uma quantidade não determinada de números positivos.
// Calcule a quantidade de números pares e ímpares, a média de valores pares e a média geral dos
// números lidos. O número que encerrará a leitura será zero. 


let numeros=[10,20,33,47,0,57,39,13];
let quantidadePar = 0;
let quantidadeImpar = 0;
let somaPares = 0;
let somaDeTodosOsNumeros = 0;

for(i = 0; i < numeros.length; i++)
{
    if(numeros[i] === 0)
    {
        break;
    }
    if(numeros[i] % 2 === 0)
    {
        quantidadePar++;
        somaPares += numeros[i];
    }else{
        quantidadeImpar++;
    }
    somaDeTodosOsNumeros += numeros[i];
}
let MediaPares = somaPares /quantidadePar;
let MediaGeral = somaDeTodosOsNumeros /numeros.length 

document.write('Quantidade de Numeros Pares = ',quantidadePar,'<br>')
document.write('Quantidade de Numeros Impares = ',quantidadeImpar,'<br>')
document.write('Media de Numeros Pares = ',MediaPares,'<br>')
document.write('Media de Geral dos Numeros = ',MediaGeral,'<br>')
