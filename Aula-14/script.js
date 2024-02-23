const nome = prompt("Qual o seu nome?");
const pais = prompt("Em qual país você mora?");
const querJogar = confirm(`oi ${nome} de ${pais}, você quer jogar um game?`);

const podeJogar =
    nome.length > 1 &&
    (pais === "Brasil" || pais === "Portugal") &&
    querJogar === true;

if (podeJogar) {
    let atual = 1
    let pergunta
    let respostaCorreta
    let respostaUsuario
    let premio = 0
    let errou = false

    while (!errou && atual <= 3) {

        if (atual === 1) {
            pergunta = "Qual a capital do Brasil?"
            respostaCorreta = "brasilia"
            respostaUsuario = prompt(pergunta).toLowerCase().replace("í", "i");
        }   else if (atual === 2) {
            pergunta = "quanto é 1 + 2 * 9 ?"
            respostaCorreta = 19
            respostaUsuario = Number(prompt(pergunta));
        }   else if (atual === 3) {
            pergunta = "O ornitorrinco é um mamífero que bota ovos? sim/não"
            respostaCorreta = "sim"
            respostaUsuario = prompt(pergunta)
        }

        if (respostaUsuario === respostaCorreta) {
            alert("Você acertou!")
            premio += 100
            atual++
        } else {
            alert("Você errou ;(")
            errou = true
        }

    alert(`Prêmio acumulado: R$ ${premio}`);
}

if (!errou) {
    alert("PARABÉNS!!! você acertou todas as perguntas!");
}

} else {
    alert("Não podemos jogar ;(");
}
