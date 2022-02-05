let kmInicio = parseFloat(prompt(`KM do início da viagem`));

let kmFim = parseFloat(prompt(`KM do fim da viagem`));

let litros = parseFloat(prompt("Digite a quantidade de litros de combustível"))

let kmPorLitro = ((kmFim - kmInicio)/litros).toFixed(2);

alert(`Este veículo faz ${kmPorLitro}km por litro`);