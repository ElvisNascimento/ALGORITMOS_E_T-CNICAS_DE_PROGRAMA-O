// 6) Escreva um algoritmo que lê dois valores booleanos (lógicos) e então determina se ambos são
// VERDADEIROS ou FALSOS.

let valorA = false;
let valorB = true;

if((valorA === valorB) === true){
    document.write('VERDADEIRO','<br>');
}else{
    document.write('FALSO','<br>');
}
if((valorA === valorB) === false){
    document.write('VERDADEIRO','<br>');
}else{
    document.write('FALSO','<br>');
}
if((valorA !== valorB) === true){
    document.write('VERDADEIRO','<br>');
}else{
    document.write('FALSO','<br>');
}
if((valorA !== valorB) === false){
    document.write('VERDADEIRO','<br>');
}else{
    document.write('FALSO','<br>');
}


// 6 questao;
// let x = false, y = false
// console.log((x && y))||(!x && !y))
//há 4 possibilidades.
//true + true = true;
//false+false = true;
//false+true = false;
//true+false = false;
