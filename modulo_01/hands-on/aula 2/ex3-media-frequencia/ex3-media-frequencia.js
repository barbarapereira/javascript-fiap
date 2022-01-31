let nota1 = parseFloat(prompt('Entre com a 1ª nota'));
let nota2 = parseFloat(prompt('Entre com a 2ª nota'));
let aulaMinistrada = parseFloat(prompt('Quantas aulas foram ministradas?'));
let aulaAssistida = parseFloat(prompt('Quantas aulas foram assistidas?'));
let frequencia = (aulaAssistida / aulaMinistrada) * 100;

let media = (nota1 + nota2)/2;

if (media >= 7 && frequencia > 75) {
  document.getElementById('media').innerHTML = 
  `Aluno aprovado com média ${media.toFixed(1
    )} e frequência de ${frequencia.toFixed(1)}%`  
}
else {
  document.getElementById('media').innerHTML = 
  `Aluno reprovado com média ${media.toFixed(1
    )} e frequência de ${frequencia.toFixed(1)}%`
}

