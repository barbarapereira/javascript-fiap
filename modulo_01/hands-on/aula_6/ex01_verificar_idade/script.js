let idade = parseInt(prompt("Digite a sua idade"));
alert(verificarIdade(idade));

function verificarIdade(idade){
  if(idade < 18){
    return `Você é menor de idade`;
  } else{
    return `Você é maior de idade`;
  }
}

/* function verificarIdade(){
  let idade = parseInt(document.getElementById("idade").value);
  if(idade >= 18){
    document.getElementById("res").innerHTML = `É maior de idade e tem ${idade} anos.`
  }else{
    document.getElementById("res").innerHTML = `É menor de idade e tem ${idade} anos.`
  }
} */