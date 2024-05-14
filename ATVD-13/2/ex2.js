
function calcularINSS(salarioBruto) {
    let taxaINSS = 0.08; 
    return salarioBruto * taxaINSS;
}

function calcularSalarioLiquido(salarioBruto, descontoINSS) {
    return salarioBruto - descontoINSS;
}

function calcularFolhaPagamento() {

    let nomeFuncionario = prompt("Digite o nome do funcionário:");
    let salarioBruto = parseFloat(prompt("Digite o salário bruto do funcionário:"));

    let descontoINSS = calcularINSS(salarioBruto);

    let salarioLiquido = calcularSalarioLiquido(salarioBruto, descontoINSS);

    console.log(`Nome do Funcionário: ${nomeFuncionario}`);
    console.log(`Salário bruto: R$${salarioBruto.toFixed(2)}`);
    console.log(`Valor do INSS: R$${descontoINSS.toFixed(2)}`);
    console.log(`Salário líquido: R$${salarioLiquido.toFixed(2)}`);

    document.getElementById('mostrarNome').innerHTML = (`O nome do funcionário é: ${nomeFuncionario}`);
    document.getElementById('mostrarSB').innerHTML = (`O seu salario bruto é: ${salarioBruto.toFixed(2)}`);
    document.getElementById('mostrarINSS').innerHTML = (`O valor do INSS foi de: ${descontoINSS.toFixed(2)}`);
    document.getElementById('mostrarSL').innerHTML = (`O valor do sal: ${salarioLiquido.toFixed(2)}`);
}

calcularFolhaPagamento();


