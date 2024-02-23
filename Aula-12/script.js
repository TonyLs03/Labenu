const nome = prompt("Qual o seu nome?");
const pais = prompt("Em qual país você mora?");
const querJogar = confirm(`oi ${nome} de ${pais}, você quer jogar um game?`);

const podeJogar =
    nome.length > 1 &&
    (pais === "Brasil" || pais === "Portugal") &&
    querJogar === true;

    alert(podeJogar);

if (podeJogar) {
    let pergunta = "Quanto é 1+1?"
    let respostaCorreta = "2"
    let respostaUsuario = prompt(pergunta)

    let premio = 0

    if(respostaUsuario === respostaCorreta) {
        alert("Você acertou!")
        premio += 100
    } else {
        alert("Você errou ;(")
    }

    alert(`Prêmio acumulado: R$ ${premio}`)

} else {
    alert("Não podemos jogar ;(");
}
