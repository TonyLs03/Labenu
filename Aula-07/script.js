/* 
operações básicas: 

alert(3 + 6);

alert(3 - 6);

alert(3 * 5);

alert(20 / 4);


resto % (quando desejamos saber se o número é ímpar/par é bastante usado)

alert(7 % 3);

precedência de operadores (1.primeiro se resolve multiplicações e divisões, depois 
    2. soma e subatração):
    para mudar a ordem basta usar parênteses "()"
    
alert((5 + 2) * 6);
*/

const a = prompt("Digite o primeiro n");
const b = prompt("Digite o segundo n");

const soma = Number(a) + Number(b);

alert(soma);
