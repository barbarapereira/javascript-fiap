//Baseado em um código, exiba o produto relacionado

let codigo = parseInt(prompt('Digite um código entre 1 a 4'));
let produto;

switch(codigo) {
  case 1:
    produto = 'Coca-Cola';
    break;

  case 2:
    produto = 'Sorvete';
    break;

  case 3:
    produto = 'Bolacha';
    break;

  case 4:
    produto = 'Chocolate';
    break;

  default:
    produto = 'Entre com o Código válido';

}
alert(produto);