/**
 * Aplicar um desconto de 20% quando receber o cupom de desconto "DESCONTO20" ou 
 * quando a compra for acima de R$ 1000,00
 */

let valorCompra = parseFloat(prompt(`Valor da compra: `));
let cupom = prompt(`Cupom de desconto`);

if(valorCompra > 1000 || cupom == 'DESCONTO20') {
  valorCompra -= valorCompra * 0.2;
}
else {
  valorCompra;
}
alert(`Valor final da compra R$${valorCompra}`);