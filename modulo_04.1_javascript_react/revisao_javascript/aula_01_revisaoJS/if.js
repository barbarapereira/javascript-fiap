
a = "1"
b = 0
if(a === 1){
    b = 2    
    c = 2    
} else {
    b = 3
}
console.log(a);
console.log(b);

c = "3"
if(c !== 3){
    d = 0        
} else {
    d = 1
}
console.log(c);
console.log(d);


c = 2
if(c <= 3){
    d = 0
} else {
    d = 1
}
console.log(c);
console.log(d);

c = 2
if(c < 3){
    d = 0
} else if(c === 3){
    d = 1
} else { 
    d = 2   
}
console.log(c);
console.log(d);


e = new Date()
if(e instanceof Date){
    f = 1
} else {
    f = 2
}

g = 5
h = 7
if(g === 5 && h < 10 ){
    i = 0
} else {
    i = 1
}

console.log(g);
console.log(h);
console.log(i);

if(g === 5 || h > 10 ){
    i = 0
} else {
    i = 1
}
console.log(g);
console.log(h);
console.log(i);