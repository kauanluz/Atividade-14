function calcularDiferenca(){
    let a = parseInt(document.getElementById('numeroA').value);
    let b = parseInt(document.getElementById('numeroB').value);

    let diferenca = a - b;
    console.log(`As variaveis definidas são: ${a} e ${b}.`)
    console.log(`A diferença entre as duas variáveis é: ${diferenca}`);

    document.getElementById('mostrarVariaveis').innerHTML = (`As variaveis definidas são: ${a} e ${b}.`)
    document.getElementById('mostrarDiferenca').innerHTML = (`A diferença entre as duas variáveis é: ${diferenca}`);
}

function somaMultiplica(){
    let a = parseInt(document.getElementById('numeroA').value);
    let b = parseInt(document.getElementById('numeroB').value);

    let aa = 2 * a;
    let bb = 3 * b;
    let diferencaB = aa + bb;

    console.log(`A soma entre o dobro da primeira mais o triplo da segunda é : ${diferencaB}`);
    document.getElementById('mostrarSomaMultiplica').innerHTML = (`A soma entre o dobro da primeira mais o triplo da segunda é : ${diferencaB}`);
}
//1-c
function multiplicarVariaveis(){
    let a = parseInt(document.getElementById('numeroA').value);
    let b = parseInt(document.getElementById('numeroB').value);

    let mutiplicador= a * b;
    console.log(`A multiplicação das duas variáveis é: ${mutiplicador}.`);

    document.getElementById('mostrarMultiplicacao').innerHTML = (`A multiplicação das duas variáveis é: ${mutiplicador}.`);
}

function mostrarDoMaiorParaOMenor() {
    let a = parseInt(document.getElementById('numeroA').value);
    let b = parseInt(document.getElementById('numeroB').value);

    let maiorNumero = a;
    let menorNumero = b;

    if (b > a) {
        maiorNumero = b;
        menorNumero = a;
    }

    console.log(`O maior número é: ${maiorNumero}. E o menor é: ${menorNumero}.`);

    document.getElementById('showDoMaiorParaOMenor').innerHTML = (`O maior número é: ${maiorNumero}. E o menor é: ${menorNumero}.`);
}

