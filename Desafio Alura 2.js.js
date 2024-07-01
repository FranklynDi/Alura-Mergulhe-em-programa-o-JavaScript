let diaDaSemana = prompt('Qual o dia da semana?');
if (diaDaSemana == 'Sabado') [ 
    alert('Bom fim de semana!');
    ] else if (diaDaSemana == 'Domingo'){
        alert('Bom fim de semana!');
    }else { 
        alert('Boa semana!');
    }

    let numero = prompt('Digite um positivo ou negativo');
    if (numero > 0) {
        alert('Numero Positivo');
    } else {
        alert('Numero Negativo');
    }

    let pontuacao = 105;
    if (pontuacao >= 100){
        console.log('Parabéns, você venceu!');
    } else {
        console.log('Tente novamente para ganhar.')
    }

    let saldoConta = 500; // Exemplo de saldo
    alert(`Seu saldo é de R$${saldoConta}.`);

    let nome = prompt('Qual o seu nome?');
    alert(`Boas vindas ${nome}`);
    