// 12) Escreva um algoritmo que leia o número de identificação, as 3 notas obtidas por um aluno nas
// 3 verificações e a média dos exercícios que fazem parte da avaliação, e calcule a média de
// aproveitamento, usando a fórmula:
// MA := (nota1 + nota 2 * 2 + nota 3 * 3 + ME)/7
// A atribuição dos conceitos obedece a tabela abaixo. O algoritmo deve escrever o número do aluno,
// suas notas, a média dos exercícios, a média de aproveitamento, o conceito correspondente e a
// mensagem 'Aprovado' se o conceito for A, B ou C, e 'Reprovado' se o conceito for D ou E.
// Média de aproveitamento Conceito
// >= 90 A
// >= 75 e < 90 B
// >= 60 e < 75 C
// >= 40 e < 60 D
// < 40 E 

let alunoID = 1;
let nota1 = 100;
let nota2 = 78;
let nota3 = 58;
let notaConceito;

let mediaExercicios = (nota1 + nota2 + nota3) /3;

let mediaAproveitamento = (nota1 + nota2 * 2 + nota3 * 3 + mediaExercicios)/7;

if(mediaAproveitamento >= 90)
{
    notaConceito = 'A';
}
if(mediaAproveitamento >= 75 && mediaAproveitamento < 90)
{
    notaConceito = 'B';
}
if(mediaAproveitamento >=60 && mediaAproveitamento < 75)
{
    notaConceito = 'C';
}
if(mediaAproveitamento >= 40 && mediaAproveitamento < 60)
{
    notaConceito = 'D';
}
if( mediaAproveitamento < 40)
{
    notaConceito = 'E';
}

document.write('ID do Aluno é : ',alunoID,'<br>');
document.write('Nota 1: ',nota1,'<br>');
document.write('Nota 2: ',nota2,'<br>');
document.write('Nota 3: ',nota3,'<br>');
document.write('ME : ',mediaExercicios.toFixed(1),'<br>');
document.write('MA : ',mediaAproveitamento.toFixed(1),'<br>'); //toFixed(1) serve pra diminuir o numero de casas deciamis de um numero para o numero que esta dentro do parentese.
document.write('Nota: ',notaConceito,'<br>');