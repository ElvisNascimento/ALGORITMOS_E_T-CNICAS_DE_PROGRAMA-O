// 9) Tendo como dados de entrada a altura e o sexo de uma pessoa, construa um algoritmo que
// calcule seu peso ideal, utilizando as seguintes fórmulas:
// ● para homens: (72.7 * h) – 58;
// ● para mulheres: (62.1 * h) – 44.7.

let altura = 1.50;
let sexo = 'F';
let pesoIdeal;

if(sexo === 'M')
{
    pesoIdeal = (72.7 * altura) - 58;
}
if(sexo === 'F')
{
    pesoIdeal = (62.1 * altura) - 44.7;
}
document.write('pesoideal : ', pesoIdeal);