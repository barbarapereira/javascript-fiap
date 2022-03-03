const a = ["Bárbara","Mauricio","Karina"];
const b = ["Denise","Ana","Maria","Thiago"];

document.getElementById("vetA").innerHTML = a;
document.getElementById("vetB").innerHTML = b;

const c = a.concat(b);
document.getElementById("vetC").innerHTML = c.join(" - ");