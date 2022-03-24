function paraCelsius(f){
  let c = (5/9)*(f-32);
 return c;
}

function paraFahrenheit(c){
  let f = (c*9/5)+32;
  return f;
}

function principal(){
  let temp = parseFloat(document.getElementById("grausF").value);
  let escala = document.getElementById("escala").value;

  if(escala == "F" || escala == "f"){
    alert(`Temperatura em graus = ${(paraCelsius(temp).toFixed(0)).toString()}°C`);
  }
  else{
    alert(`Temperatura em graus = ${(paraFahrenheit(temp).toFixed(0)).toString()}°F`);
  }
}
/* ----- Função sem parâmetro ------
 function paraCelsius(){
  let f = 80;
  let c = (5/9)*(f-32);
  alert(`Temperatura em grau °C = ${c.toString()}`)
}
paraCelsius(); */