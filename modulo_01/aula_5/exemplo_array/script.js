/**============** Tipos de declaração array **============**
const carros = ["Renegate", "Toro", "Ranger"];

const carros = [
  "Renegate", 
  "Toro", 
  "Ranger"
];

const carros = [];
carros[0] = "Renegate";
caros[1] = "Toro";
carros [2] = "Ranger";
*/
/**const carros = new Array("Renegate","Toro","Ranger");
============** Acessando um array **============
 let x = carros[0]; //imprime renegade
 * **/

/**============** Alterar um array **============*
 carros[0] = "Onix";// na posição 0 substitui renegade e imprime onix
 **/

/**============** Acesar todo o vetor**============
 console.log(carros);*/

/*const pessoa = ["João", "Rua x"]; 
 console.log(pessoa[1]);*/
 
 /**============** Criando Objeto**============
 const pessoa = ${
   primeiroNome: "Bárbara",
   endereco: "Rua 12",
   idade: "31"
};
console.log(pessoa.primeiroNome);

const meuArray = [];
const carros = new Array("Renegate","Toro","Ranger");

console.log(meuArray[0] = Date(Date.now()));// na primeira posição, adiciona o conteúdo da data atual
console.log(meuArray[1] = carros);//adiciona o array de carros na segunda posição de meuArray*/

/**============** Métodos com Array **============*/

const frutas = ["banana ", "Laranja ", "maçã ", "manga "];
console.log(frutas);//imprime todas as frutas do array
//quantidade total de elementos do vetor
console.log(`Length: ${frutas.length}\n\n`);
//retornando o ultimo elemento
console.log(`Length-1: ${frutas.length-1}\n\n`);
//acessando o vetor através de uma variável
let posicao = parseInt(prompt("Digite uma posição"));
console.log(`retorno por variável ${frutas[posicao]}\n\n`);

//push => adicionando um elemento ao fim da lista
frutas.push('Morango ')
console.log(`Push: ${frutas}\n\n`);

//pop => remove o ultimo elemento da lista
frutas.pop;
console.log(`Pop: ${frutas}\n\n`);

//shift => reemove o primeiro elemento da lista
frutas.shift;
console.log(`Shift: ${frutas}\n\n`);

//unshift => adiciona um elemento noinício da lista
frutas.unshift('Morango ')
console.log(`Unshift: ${frutas}\n\n`);

//delete => remove o ultimo elemento da lista
delete frutas[2];
console.log(`Delete: ${frutas}\n\n`);

//splice => cria um novo array podendo inserir / remover ou executar as 2 funcionalidades 
frutas.splice(1,1,"Limão","Kiwi");
console.log(`Splice: ${frutas}\n\n`);

//join => adiciona um separador entre os itens do vetor. Se não passar nenhum parâmetro a virgula é assumida como padrão
frutas.join(" - ");
console.log(`Join: ${frutas}\n\n`);

//concat => cria um novo vetor concatenando outros 2 vetores recebidos por parâmetro, adicionando o conteúdo no final
const verduras = ["couve","brócolis"];
const comidas = frutas.concat(verduras);
console.log(`Concat: ${comidas.join(" - ")}\n\n`);

//slice => retorna um novo array com as informações cortada do array anterior
const verduras1 = comidas.slice(-2);
console.log(`Slice: ${verduras1}\n\n`);
console.log(`Vetor original para ver que não foi nada removido: ${comidas}\n\n`);

//sort => coloca o vetor em ordem alfabética, ou crescente, idependente como está originalmente
const nomes = ["Bárbara", "Maurício","Ana", "Pereira", "Nora"];
const numeros = [2,5,7,158,1,0,983,77];
console.log(`Sort - antes de ordenar: ${nomes}\n\n`);
console.log(`Sort: ${nomes.sort()}\n\n`);
console.log(`Sort - antes de ordenar: ${numeros}\n\n`);
console.log(`Sort: ${numeros.sort()}\n\n`);

//reverse => ordena de tras para frente o vetor, idependente como está originalmente
console.log(`reverse - antes de ordenar: ${nomes}\n\n`);
console.log(`Reverse: ${nomes.reverse()}\n\n`);
console.log(`reverse - antes de ordenar: ${numeros}\n\n`);
console.log(`Reverse: ${numeros.reverse()}\n\n`);

//Percorrendo um vetor com for
let listaNomes = "";
for(let i = 0; i < nomes.length; i++){
  listaNomes += nomes[i] + "<br>";
}
document.getElementById("for").innerHTML = listaNomes;

//percorrendo o vertor com forEach
let listaFrutas = "";
frutas.forEach(criarLista);
document.getElementById("forEach").innerHTML = listaFrutas;

function criarLista(itemLista) {
  listaFrutas += itemLista + "<br>";
}