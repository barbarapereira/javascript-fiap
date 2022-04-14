var now = new Date();
var data = new Date(2022,3,12,19,39,00);
console.log(data);

dif =  now - data;
console.log(dif);

console.log(now.getUTCFullYear());//ano
console.log(now.getDate());//dia
console.log(now.getDay());//dia da semana
console.log(now.getHours());//hora
console.log(now.toLocaleString());// dia mes e ano

