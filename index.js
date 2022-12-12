function soma(valor1, valor2) {
    return Number(valor1) + Number(valor2);
}

function menos(valor1, valor2) {
    return Number(valor1) - Number(valor2);
}

function div(valor1, valor2) {
    return Number(valor1) / Number(valor2);
}

function mult(valor1, valor2) {
    return Number(valor1) * Number(valor2);
}

let valor1;
let valor2;
let operacao = "";

do {
    operacao = prompt("Qual operação você quer realizar? (soma) - (menos) - (div) - (mult) ou sair");

    while (
        operacao != "soma" && operacao !="menos" && operacao != "div" && operacao != "mult" && operacao != "sair"
        ) {
        alert(`Operação Invalida!`)
        operacao = prompt("Qual operação você quer realizar? (soma) - (menos) - (div) - (mult) ou sair");
        }

    if (operacao === "sair") {
        break;
    }

    valor1 = prompt(`Insira o primeiro valor:`);
    valor2 = prompt(`Insira o segundo valor:`);

    switch (operacao) {
        case 'soma':
            alert(`O resultado da ${operacao} é ${soma(valor1, valor2)}`);
        break;

        case 'menos':
            alert(`O resultado da ${operacao} é ${menos(valor1, valor2)}`);
        break;

        case 'div':
            alert(`O resultado da ${operacao} é ${div(valor1, valor2)}`);
        break;

        case 'mult':
            alert(`O resultado da ${operacao} é ${mult(valor1, valor2)}`);
        break;
    }
}

while(operacao === "soma" || operacao === "div" || operacao === "menos" || operacao === "mult");
alert(`Até a próxima!`)