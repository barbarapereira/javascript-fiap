let n1 = parseFloat(prompt('Entre com a 1ª nota: '));
let n2 = parseFloat(prompt('Entre com a 2ª nota: '));
let n3 = parseFloat(prompt('Entre com a 3ª nota: '));
let media = ((n1 + n2 + n3)/3).toFixed(1);

if (media < 4) {
  document.getElementById('resultado').innerHTML = `Aluno reprovado com média ${media}`;
}
else if (media < 7) {
  document.getElementById('resultado').innerHTML = `Aluno em Prova Final com média ${media}`;
}
else if (media >= 7) {
  document.getElementById('resultado').innerHTML = `Aluno Aprovado com média ${media}`;
}
else {
  document.getElementById('resultado').innerHTML = `Dado inválido`;
}



