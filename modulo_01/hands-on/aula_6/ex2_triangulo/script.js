let l1 = parseInt(prompt(`digite o lado l do triângulo: `));
let l2 = parseInt(prompt(`digite o lado 2 do triângulo: `));
let l3 = parseInt(prompt(`digite o lado 3 do triângulo: `));

alert(verificarTriangulo(l1,l2,l3));

function verificarTriangulo(l1,l2,l3){
  
  //checar se os valores formam um triângulo
    if (l1 < (l2+ l3) && l2 < (l1 + l3) && l3 < (l1 + l2)) {

      if (l1 == l2 && l1 == l3) {
        return 'Triângulo Equilátero';
      }
      else if (l1 === l2 || l1 === l3 || l2 === l3) {
        return 'Triângulo Isósceles';
      }
      else {
        return 'Triângulo Escaleno';
      }
    } else {
    return 'Não forma um triângulo';
    }

}