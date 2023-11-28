function calculoVerificar() {
    const cpfInput = document.getElementById('cpfInput');
    const resultadoVar = document.getElementById('resultado');

    const digitosCPF = cpfInput.value.trim();

    if (digitosCPF.length !== 9 || !/^\d+$/.test(digitosCPF)) {
        resultadoVar.textContent = 'Coloque 9 dígitos válidos!';
        return;
    }

    const cpfArray = digitosCPF.split('').map(Number);

    const verificarUm = calcularcpfArray(cpfArray, 10);
    const verificarDois = calcularcpfArray(cpfArray.concat(verificarUm), 11);

    const cpfWithVerifiers = digitosCPF + verificarUm + verificarDois;
    resultadoVar.textContent = `CPF completo: ${cpfWithVerifiers}`;
}

function calcularcpfArray(cpfArray, multiplo) {
    const soma = cpfArray.reduce((acc, digit, index) => acc + digit * (multiplo - index), 0);
    const resto = soma % 11;
    return resto < 2 ? 0 : 11 - resto;
}