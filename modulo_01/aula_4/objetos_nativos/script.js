console.log(`************ Usada para variáveis do tipo number ************`)
//pega uma data e converte para ma string através do  método toString
let d = new Date();
console.log(d.toString());

//imprime o valor primitivo passado na classe Number
n = new Number(1000);
console.log(n.valueOf());

console.log(`************ Usada para variáveis do tipo string ************`)
let s = new String("Criando uma string");
console.log(s);
console.log(`quantidade de carasteres: ${s.length}`);
console.log(`o caractere da posição 4 é: ${s.charAt(4)} e o código unicode é ${s.charCodeAt(4)}`);

let p = "o método concat escreve um conteúdo";
console.log(`${p.concat(" e concatena com outro.")}`);

let i = new String("criando, uma, String");
console.log(`a palavra uma começa na posição: ${i.indexOf("uma")}`);
console.log(`last|IndexOf pela o ultimo caractere da frase,  a letra m está na posição: ${i.lastIndexOf("m")}`);
let v = /S/;
console.log(`método match retorna a própria ocorrência quando encontrada ou null => ${i.match(v)}`);

let num = prompt("Digite, um número: ");
let teste = parseFloat(num.replace(",","."));
alert(teste.toFixed(2));

console.log(`exemplo split: => ${i}`);
console.log(`split divide a string em uma lista ordenada: ${i.split(",")[2]}`);
console.log(`split divide a string em uma lista ordenada: ${i.split(",")[1]}`);
console.log(`split divide a string em uma lista ordenada: ${i.split(",")[0]}`);

console.log(`toUpperCase:  ${i.toUpperCase()}`);
console.log(`toLocaleLowerCase:  ${i.toLocaleLowerCase()}`);