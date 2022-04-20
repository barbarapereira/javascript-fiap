/**amos inicializar um novo aplicativo que deve realizar os seguintes procedimentos:
• criar um array de 5 posições com valores strings.
• Juntar com um array de 3 posições
• Adicionar o item “1”
• Adicionar o item “2”
• Retirar a primeira posição do array*/

const arr = ['FIAP', 'SHIFT','JAVASCRIPT','REACT','ANGULAR'];
const arr1 = [4,5,6];

console.log(`\n array arr: ${arr.join(" - ")}`);
console.log(`\n array arr1: ${arr1}`);

arrConcat = arr.concat(arr1);
console.log(`\n array concatenado arrConcat: ${arrConcat}`);

arrConcat.push(1)
arrConcat.push(2)

console.log(`\n add os valores 1 e 2 com push: ${arrConcat}`);

arrConcat.shift();

console.log(`\n removendo com shift: ${arrConcat}`);
