let mes = parseInt(prompt('Digite um número de 1 a 12 para ver o mês referente'));

switch(mes) {
  case 1:
    document.getElementById('texto').innerHTML = `Janeiro`;
  break;
  
  case 2:
    document.getElementById('texto').innerHTML = `Fevereiro`;
  break;

  case 3:
    document.getElementById('texto').innerHTML = `Março`;
  break;

  case 4:
    document.getElementById('texto').innerHTML = `Abril`;
  break;

  case 5:
    document.getElementById('texto').innerHTML = `Maio`;
  break;
  
  case 6:
    document.getElementById('texto').innerHTML = `Junho`;
  break;

  case 7:
    document.getElementById('texto').innerHTML = `Julho`;
  break;

  case 8:
    document.getElementById('texto').innerHTML = `Agosto`;
  break;

  case 9:
    document.getElementById('texto').innerHTML = `Setembro`;
  break;
  
  case 10:
    document.getElementById('texto').innerHTML = `Outubro`;
  break;

  case 11:
    document.getElementById('texto').innerHTML = `Novembro`;
  break;

  case 12:
    document.getElementById('texto').innerHTML = `Dezembro`;
  break;

  default:
    document.getElementById('frase').innerHTML = `Digite um número válido entre 1 e 12`;
  break;
}