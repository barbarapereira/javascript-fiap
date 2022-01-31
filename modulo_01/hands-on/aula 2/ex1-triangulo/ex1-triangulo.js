let a = parseInt(prompt(`digite o primeiro valor do triângulo: `));
let b = parseInt(prompt(`digite o segundo valor do triângulo: `));
let c = parseInt(prompt(`digite o terceiro valor do triângulo: `));



if (a < (b + c) && b < (a + c) && c < (a + b)) {
  console.log('é um triangulo');
  
  if (a == b && a == c) {
    console.log('Triângulo Equilátero');
  }
  else if (a === b || a === c || b === c) {
    console.log('Triângulo Isósceles');
  }
  else {
    console.log('Triângulo Escaleno');
  }
} else {
  console.log('Não forma um triângulo');
}