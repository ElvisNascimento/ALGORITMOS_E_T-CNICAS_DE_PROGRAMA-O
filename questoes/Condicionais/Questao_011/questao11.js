// 11) Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço
// normal de etiqueta e a escolha da condição de pagamento. Utilize os códigos da tabela a seguir
// para ler qual acondição de pagamento escolhida e efetuar o cálculo adequado.
// Código Condição de pagamento
// 1 À vista em dinheiro ou cheque, recebe 10% de desconto
// 2 À vista no cartão de crédito, recebe 15% de desconto
// 3 Em duas vezes, preço normal de etiqueta sem juros
// 4 Em quatro vezes, preço normal de etiqueta mais juros de 10%


//alterei a 4 condicao de duas vezes para quatro vezes, pois ela estava conflitando com a 3 condicao de pagamento.



let valorProduto = 200;  // ALTERE AQUI O VALOR DO PRODUTO
//ESCOLHA UM METODO DE PAGAMENTO DEIXANDO A VARIAVEL EM TRUE DO METODO ESCOLHIDO.
let pag_Av_Dinheiro = true;
let pag_Av_Cartao = false;
let pag_Parcelado_2x = false;
let pag_Parcelado_4x = false;

let valorFinalProduto;

if( pag_Av_Dinheiro === true)
{
   valorFinalProduto = valorProduto - (valorProduto*10)/100;
}
if( pag_Av_Cartao === true)
{
    valorFinalProduto = valorProduto - (valorProduto*15)/100;
}
if( pag_Parcelado_2x === true)
{
   valorFinalProduto = valorProduto;
}
if( pag_Parcelado_4x === true)
{
    valorFinalProduto = valorProduto + (valorProduto*10)/100;
}

document.write(valorFinalProduto);