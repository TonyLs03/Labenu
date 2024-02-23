/* 
operadores relacionais (servem para compara valores: MAIOR, menor, igual dIfErEnTe)
alert(500 > 2); true

alert(100 < 4); false

alert(6 < 6); false

alert(500 >= 4); true

alert(100 <= 4); false

alert(6 <= 6); true

= atribuição
== ou === igualdade

quando usado 2 iguais == ele verfica apenas o VALOR
mas quando usamos o 3 iguais === vai ser verifica tanto o tipo quanto o valor

alert(3 == 4); false

alert(10 == 10); true

alert("batata" == "limão"); false

alert("1" == 1); true

alert("1" === 1); false

! (exclamação) significa NÃO
!= não igual, desigualdade (para valor)
!== diferença de valor e tipo

alert("1" != 1); FALSE

alert("1" !== 1); TRUE

IMPORTANTE: 
    O mais comum é verificar VALOR e TIPO usando === e !==


const capital = prompt("Qual a capital do seu país?");
alert(capital === "Brasília");
true
*/

const capital = prompt("Qual a capital do seu país?");
alert(capital.toLowerCase().replace('í', 'i') === "brasilia");
true
