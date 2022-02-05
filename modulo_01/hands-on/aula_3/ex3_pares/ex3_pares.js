function calcular() {

  let n1 = parseInt(document.getElementById('n1').value);
  let n2 = parseInt(document.getElementById('n2').value);
  let qtdPares = 0;
  let i = n1 + 1;

  if(n1 < n2) {
    do {
      //validar se o número é par
      if(i % 2 == 0) {
        qtdPares ++;
      } 
      i++;     
    } while(i < n2);
    document.getElementById('res').innerHTML = `Possui ${qtdPares.toString()} numeros pares`;
  }
  else {
    document.getElementById('res').innerHTML = 'O primeiro número deves ser maior do que o segundo'
  }
 
}