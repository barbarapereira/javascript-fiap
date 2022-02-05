function calcular() {
  let n1 = parseInt(document.getElementById('valor1').value);
  let n2 = parseInt(document.getElementById('valor2').value);
  let res = 0;

  if(n1 < n2) {
    for(let i = n1 + 1; i < n2; i++) {
      res += i;
    }
    document.getElementById('res').innerHTML = `A Soma entre ${n1} e ${n2} = ${res.toString()}`;

  }
  else {
    document.getElementById('res').innerHTML = 'O primeiro número deves ser maior do que o segundo'
  }
 
}