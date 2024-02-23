/*
operadores lógicos

const mussarela = true;
const calabresa = false;
alert(mussarela && calabresa);
false

Operador E=&& (nesse caso ambos tem que ser true)
Tabela verdade (&&) 
    a   b       resutlado
 true   true    true
 true   false   false
 false  true    false
 false  false   false

##################################################

const mussarela = true;
const calabresa = false;
alert(mussarela || calabresa);
true

Operador OU=|| (nesse caso um dos valores tem que ser true)
Tabela verdade (||) 
    a   b       resutlado
 true   true    true
 true   false   true
 false  true    true
 false  false   false

 ##########################################################

Operador NÃO(NOT, !) inverte valores
Tabela verdade (!)
  a     resultado
true    false
false   true

#####################################
const mostarda = false;
alert(!mostarda)

precedência de operadores (assim como em números podemos alterar a ordem usando parênteses)
1.Operador NÃO: !
2.Operador E: &&
3.Operador OU: ||
*/

const nome = prompt("Qual o seu nome?");
const pais = prompt("Qual o seu país?");
const querJogar = confirm(`oi ${nome} de ${pais}, quer participar do Labeshow?`);

const podeJogar = nome.length > 1 &&
(pais === "Brasil" || pais === "Portugal") &&
querJogar === true;

alert(podeJogar);
