let saldo = parseFloat(prompt(`Digite seu saldo médio:`));

if (saldo > 600) {
  document.getElementById('credito').innerHTML = 
  `O seu saldo médio é R$${saldo.toFixed(2)} e receberá um crédito de R$${(saldo*=(40/100)).toFixed(2)}`;
}
else if (saldo > 400 && saldo <= 600) {
  document.getElementById('credito').innerHTML = 
  `O seu saldo médio é R$${saldo.toFixed(2)}  e receberá um crédito de R$${(saldo*=(30/100)).toFixed(2)}`;
}
else if (saldo > 200 && saldo <= 400) {
  document.getElementById('credito').innerHTML = 
  `O seu saldo médio é R$${saldo.toFixed(2)}  e receberá um crédito de R$${(saldo*=(20/100)).toFixed(2)}`;
}
else if (saldo > 0 && saldo <= 200) {
  document.getElementById('credito').innerHTML = 
  `O seu saldo médio é R$${saldo.toFixed(2)} e você não possui crédito`;
}