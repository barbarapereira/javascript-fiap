// FUNÇÕES 
console.log("------------ ARROW ------------");
const fnc = (a, b) => {
    return a*b;
}
console.log(fnc(2,3));


// FUNÇÕES REST
console.log("------------ REST ------------");
const fnc1 = (a, ...b) => {
    console.log(a);
    console.log(b);
}
fnc1(1,2,3,4);


// PARÂMETROS PADRÕES
console.log("------------ PARÂMETROS PADRÕES ------------")
const fnc2 = (a=2) => {
    console.log(a);
}
fnc2(1); //primario
fnc2("1");//string
fnc2();//vazio
fnc2([1,2,3]);//arrray
fnc2({ //objeto
    a: 1,
    b:2
});

const fnc3 = (fn) => {//verificando se o argumento é uma função

    if(typeof fn === 'function'){ 
        let ax = 1
        fn()
        console.log(`ax-> ${ax}`);
    }
     else if(typeof fn === 'number'){
        console.log(fn);
    }
    
    else if(typeof fn === 'boolean'){
        console.log(fn);
    }
}
    //console.log(ax);
    //não funciona fora do 

fnc3(fnc2);//passando uma outra função como parâmetro
fnc3(2);


// LIMITADORES DE PARÂMETROS
console.log("------------ ESCOPO DE FUNÇÃO ------------")

