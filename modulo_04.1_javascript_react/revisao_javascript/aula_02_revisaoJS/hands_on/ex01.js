// EX01 - Vamos rodar um aplicativo que:
// • Crie uma função chamada calculaPorcentagem que, quando chamada, irá 
// retornar o valor do parâmetro vezes 3.
// • Essa função deve ser utilizada usando uma arrow function.
// • Chamar a função calculaChamado e colocar o resultado no console
console.log("EXERCICIO: 01");
const calculaPorcentagem = (a) => {
    
    return console.log( a*3);
}

calculaPorcentagem(10);


// EX02 - Vamos rodar um aplicativo que:
// • Crie uma função chamada addInfo que irá receber vários parâmetros e irá 
// juntá-los em uma única string separados por pipe |.
// • Chamar a função addInfo com os parâmetros “1”, “2” e “3” e colocar no console.
// • Chamar a função addInfo com os parâmetros “1”, “2”, “3”, “4” e “5” e colocar no 
// console.
console.log("EXERCICIO: 02");
const addInfo = (a1, ...b1) => {
    console.log(a1);
    console.log(b1);

    //const c = [a1,b1].join(" | ");
    const c = a1;
    c.concat(b1)
    return console.log(c.join(" | "));
    
}
addInfo(1,2,3,4,5);

// Vamos rodar um aplicativo que:
// • Crie uma função chamada addInfo que irá receber um parâmetro com valor 
// opcional “a” e irá juntar com a string “nome: ”.
// • Chamar a função addInfo com os parâmetros “Roberto” e colocar no console.
// • Chamar a função addInfo sem parâmetros e colocar no console
// console.log("EXERCICIO: 03");
console.log("EXERCICIO: 03");
const addInfo1 = (infoName = "a") => {
    return `Nome: ${infoName}`;
}

console.log(addInfo1("Bárbara"));
console.log(addInfo1());
