function calcTabuada() {
  let num = parseInt(document.getElementById('num').value);
  let res;
  let i = 1;
  let result = '';
  
  
  while( i <= 10) {
    res = num * i;
    result += res + '<br>';
    i++;
  }  
  document.getElementById('resultado').innerHTML = `${result}`
}
/*

do {
  res = num * i;
  document.write(res.toString() + '<br />');
  i++;
}while(i <= 10);

for(let i = 1; i <= 10; i++) {
  res = num * i;
  document.write(res.toString() + '<br />');
}
*/
