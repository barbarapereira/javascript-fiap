let a = parseInt(prompt(`digite o primeiro valor do triângulo: `));
let b = parseInt(prompt(`digite o segundo valor do triângulo: `));
let c = parseInt(prompt(`digite o terceiro valor do triângulo: `));



if (a < (b + c) && b < (a + c) && c < (a + b)) {
  document.getElementById('triangulo').innerHTML = 'É um triangulo';
  
  if (a == b && a == c) {
    document.getElementById('saida').innerHTML = 'Triângulo Equilátero';
  }
  else if (a === b || a === c || b === c) {
    document.getElementById('saida').innerHTML ='Triângulo Isósceles';
  }
  else {
    document.getElementById('saida').innerHTML ='Triângulo Escaleno';
  }
} else {
  document.getElementById('saida').innerHTML ='Não forma um triângulo';
}