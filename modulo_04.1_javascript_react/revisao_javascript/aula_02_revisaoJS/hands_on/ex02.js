// EX02 - Vamos rodar um aplicativo que:
// • Crie uma função chamada addInfo que irá receber vários parâmetros e irá 
// juntá-los em uma única string separados por asterisco *.
// • Chamar a função addInfo com os parâmetros “1”, “2” e “3” e colocar no console.
// • Chamar a função addInfo com os parâmetros “1”, “2”, “3”, “4” e “5” e colocar no 
// console.
console.log("EXERCICIO: 02");
const addInfo = (a, ...b) => {
    //const addInfo = (...arr) => { --> forma simplificada
    console.log(a);
    console.log(b);

    const c = [a];
    const arr = c.concat(b);
    return console.log(arr.join(" * "));
    
}
addInfo(1,2,3,4,5);