// 2) Desenvolver um algoritmo que leia a altura de 15 pessoas. Este programa deverá calcular e
// mostrar :
// a. A menor altura do grupo;
// b. A maior altura do grupo;

const alturaPessoas = [
    1.22,1.62,1.84,1.90,2.09,
    1.42,1.53,1.87,1.92,2.10,
    1.48,1.67,1.85,1.80,1.99,
]


let maiorAltura = 0;//setei o valor inicial 0 pra ser menor que as alturas na hora de comparar
let menorAltura = 10;//setei um valor mais alto que as alturas pra ter com o que ser comparado


for(i = 0; i < alturaPessoas.length;i++)
{
    if( alturaPessoas[i] > maiorAltura)
    {
        maiorAltura = alturaPessoas[i];
    }
    if(alturaPessoas[i] < menorAltura)
    {
        menorAltura = alturaPessoas[i];
    }
}

document.write('A menor altura do grupo é de: ',menorAltura,'m <br>');
document.write('A maior altura do grupo é de: ',maiorAltura,'m <br>');
