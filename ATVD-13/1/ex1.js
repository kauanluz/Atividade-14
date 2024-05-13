/*
let a=10;
let b=5;
let diferenca = a - b;
alert("As variaveis definidas são 10 e 5 ")
alert("A diferença entre as duas variáveis é: " + diferenca);
//1-b
let aa = 2 * a;
let bb = 3 * b;
let diferencaB = aa + bb;

alert("A soma entre o dobro da primeira mais o triplo da segunda é : " + diferencaB);
//1-c
let mutiplicador= a * b;
alert ("As variáveis definidas são 10 e 5");
alert("A multiplicação das duas variáveis é: " + mutiplicador);
*/
function operacoesComVariaveis(variavel1, variavel2) {
   
    const diferenca = variavel1 - variavel2;
    
    const somaMultiplicacoes = (2 * variavel1) + (3 * variavel2);
    
    const multiplicacao = variavel1 * variavel2;
    
    console.log("Diferença entre as duas variáveis:", diferenca);
    console.log("O dobro da primeira mais o triplo da segunda variável:", somaMultiplicacoes);
    console.log("A multiplicação das duas variáveis:", multiplicacao);
}
operacoesComVariaveis(5, 3);

function mostrarVariaveisDoMaiorParaOMenor(variavel1, variavel2) {
    if (variavel1 > variavel2) {
        console.log(variavel1, variavel2);
    } else {
        console.log(variavel2, variavel1);
    }
}
mostrarVariaveisDoMaiorParaOMenor(8, 3);
