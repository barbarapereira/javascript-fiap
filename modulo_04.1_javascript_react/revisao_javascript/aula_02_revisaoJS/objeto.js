const pessoa = {
    nome: "Bárbara",
    sobrenome: "pereira",
    retornaNomeCompleto: () => {
        return (`${nome} ${sobrenome} \n`);
    }
};

console.log(pessoa.retornaNomeCompleto());

console.log("**************");

const info = {
    info1: 1,
    info2: 'aaa',
    info3: [1,2,3],
    info3: {
        prop1: 1,
        prop2: true
    }
}


const str = JSON.stringify(info);
console.log(str);

console.log("**************")
const info2 = {
    info1: 1,
    info2: 'aaa',
    info3: [1,2,3],
    info3: {
        prop1: 1,
        prop2: true
    },
    abrir: (param1) => {
        console.log(param1 + "\n")
    }
}

console.log("**************")
info2.abrir("teste método")
