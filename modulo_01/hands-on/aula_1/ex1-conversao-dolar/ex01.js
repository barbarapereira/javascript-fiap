let dolar = parseFloat(prompt('Valor da doação em Dolares U$'));
let cambioEmReal = parseFloat(prompt('Cotação do dia em Real R$ '));

alert(`A ONG recebeu R$ ${(dolar * cambioEmReal).toFixed(2)} de doação `);