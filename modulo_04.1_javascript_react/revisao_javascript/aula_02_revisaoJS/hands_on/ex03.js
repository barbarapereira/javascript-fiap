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
