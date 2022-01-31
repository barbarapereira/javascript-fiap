let idade = parseInt(prompt(`Qual a sua idade?`));

if(idade > 12) {
  alert(`Você tem ${idade} anos. Pode joga!!`);
}
else if(idade == 12) {
  alert(`Você tem ${idade} anos. Pode jogar com a permissão dos seus pais`);
}
else {
  alert(`Você tem ${idade} anos. Não pode joga!! "(`);
}