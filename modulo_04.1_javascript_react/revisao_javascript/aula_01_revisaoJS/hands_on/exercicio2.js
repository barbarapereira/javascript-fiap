/**Vamos inicializar um novo aplicativo que deve realizar os seguintes procedimentos:
• criar um array de 5 posições com valores strings.
• Realizar um filtro desse array com todos os itens que começa com a letra a.*/

const a = ['Ana', 'Bárbara', 'Alice', 'Carla', 'Maria']

const arr = a.filter(element => {
    // return console.log(element[0].toLowerCase() === "a");
    return console.log(element.startsWith("A"));
})
