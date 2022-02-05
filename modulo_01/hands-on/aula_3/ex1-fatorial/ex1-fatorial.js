function calculoFatorial() {
  let numero = parseInt(document.getElementById('valor').value);
  let fat = 1; //inicializar o fat
  let i = 1;

  while (i <= numero){
    fat = fat * i;
    i++;
  }
  document.getElementById("res").innerHTML = fat.toString();
}