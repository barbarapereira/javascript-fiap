//------------PARÂMETRO PADRÃO-----------
function retorna(a=2){
  return a;
}
console.log(` ${retorna(3)}`);//exibe 3
console.log(` ${retorna()}`);//exibe 2

/* 
//------------OPERADOR REST-----------
function frutas(a,b, ...c){
  console.log(`a => ${a}`);
  console.log(`b => ${b}`);
  console.log(`c => ${c}`);
}
frutas("Banana", "Maçã","Mamão", "Limão","Laranja");
function frutas(){
    let txt = "";
    for(let i = 0; i < arguments.length; i++){
      txt += (`${arguments[i]} \n`);
    }
    alert(txt);
}
frutas("Banana", "Maçã","Mamão", "Limão","Laranja");

(function(){
  alert("Executei sem ser chamada");
})();

function principal(){
  
}
function compra (valorCompra,desconto,frete){
  let valorFinal = (valorCompra - desconto) + frete;
} */