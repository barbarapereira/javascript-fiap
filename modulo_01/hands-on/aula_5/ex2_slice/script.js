const a = ["Maçã","Banans","Uva","Abacate","Mamão","Abacaxi","Melancia","Morango"];
document.getElementById("vetA").innerHTML = a. join(" - ");
const b = a.slice(4);//a partir da 4 posição
document.getElementById("vetB").innerHTML = b. join(" - ");
