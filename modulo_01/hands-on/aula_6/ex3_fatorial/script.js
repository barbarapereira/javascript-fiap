let numero = parseInt(prompt("Digite um valor para calcular o Fatorial:"));
alert(calculoFatorial(numero));

function calculoFatorial(valor) {
  let fat = 1; //inicializar o fat
  let i = 1;
  while (i <= valor){
    fat = fat * i;
    i++;
  }
  return fat.toString();
}

/* function calculoFatorial() {
  let numero = parseInt(document.getElementById('valor').value);
  let fat = 1; //inicializar o fat
  let i = 1;

  while (i <= numero){
    fat = fat * i;
    i++;
  }
  document.getElementById("res").innerHTML = fat.toString();
} */