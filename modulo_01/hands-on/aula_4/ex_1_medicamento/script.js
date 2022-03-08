function calcular() {
  let preco = parseFloat(document.getElementById("preco").value);
  let qtd = parseInt(document.getElementById("qtd").value);
  let res = 0;

  if(qtd > 1){
    res = Math.floor(qtd*preco).toFixed(2).toString();
    document.getElementById("res").innerHTML = `Valor com desconto R$ ${res}`

  }
  else{
    res = preco.toString();
    document.getElementById("res").innerHTML = `Valor à pagar R$ ${res}`

  }
}