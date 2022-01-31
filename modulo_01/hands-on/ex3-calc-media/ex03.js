let ac = parseFloat(prompt('Entre com a nota AC: '));
let ag = parseFloat(prompt('Entre com a nota Avaliação Geral: '));
let at = parseFloat(prompt('Entre com a nota Avaliação Trimestral: '));

alert(`A Média do aluno(a) é: ${((ac*0.20) + (ag *0.10) + (at * 0.70)).toFixed(2)}`)