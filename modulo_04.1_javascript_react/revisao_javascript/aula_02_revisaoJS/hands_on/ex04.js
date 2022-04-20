const arr = ["Barbara", "ALine", "Anderson", "Marcelo", "Arlete"];


const filtro = arr.filter(element => {
    return element[0].toLowerCase() === "a"
})

console.log(filtro)
filtro.push(1);
filtro.push(2);
filtro.push(3);
filtro.push(4);
filtro.push(5);
console.log(filtro)


const pessoa = {
    nome: 'João',
    idade: 32,
    trocaNome: (n) => {
     return nome = n;
    }
}

console.log(pessoa);
pessoa.idade = 25;
pessoa.nome = pessoa.trocaNome("Maria");
console.log(pessoa);