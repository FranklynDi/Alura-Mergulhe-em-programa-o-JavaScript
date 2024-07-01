alert('Boas vindas ao jogo do número secreto');
let numeroSecreto = 5;
console.log(numeroSecreto);
let chute;
let tentativas = 1;
//enquanto não for igual ao número secreto
while (chute != numeroSecreto) {
   chute = prompt('Escolha um número entre 1 e 10');

      // if em pportuguês seria o se ou seja se chute for igual ao n´mero secreto
    if (chute == numeroSecreto) {
       break;
    } else {
    if (chute > numeroSecreto) {
        alert(`O numero secreto é menor que ${chute}`);
            } else {
                alert(`O numero secreto é maior que ${chute}`);
            } 
            //tentativas = tentativas + 1;
            tentativas++;
    }
}
if (tentativas > 1){
    alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativas.`);
} else {
    alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativa.`);
}
