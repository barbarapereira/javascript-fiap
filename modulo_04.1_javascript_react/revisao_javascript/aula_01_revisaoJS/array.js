
//formas de inicializar um array
let a = [1,2,3,4,5]
const b = new Array(1,2,3,4,5,6)

console.log(a);
console.log(b);

let val = b[1];
console.log(val);
console.log(b[0]);

b[1] = 10;
console.log(b[1]);

console.log(b.length);

console.log('push: \n');
b.push(99);
console.log(b);

console.log('pop: \n');
let val1 = b.pop();
console.log(val1);
console.log(b);

console.log('join: \n');
let val2 = b.join(", ")
console.log(val2);

console.log('reverse: \n');
b.reverse()
console.log(b);

console.log('sort: \n');
const c  = ["Carla", "Gustavo", "Thiago", "Clovis"];
c.sort();
console.log(c);

console.log('concat: \n');
const d = c.concat("Roberto", "Giovanna")
const e = c.concat(b,["Roberto", "Giovanna"])
console.log(e);

console.log('slice: \n');
const f = e.slice(3)
console.log(f);

console.log('splice: \n');
f.splice(2,1,"d", "e")
console.log(f);

console.log(" ------- ");
const arr1 = [1,2,3]
const arr2 = [1,2,3,1]

arr1.push(4)
arr1.push(5)
console.log(arr1);
val = arr1.pop()
console.log(val);
console.log(arr1);

arr2.unshift(4)
arr2.unshift(5)
console.log(arr2);
val = arr2.shift()
console.log(val);
console.log(arr2);


for (let index = 0; index < arr2.length; index++) {
    const element = arr2[index];
    console.log(element);
}

arr2.forEach(element => {
    element.join()
    console.log(element);
});

const arr3 = arr2.map(element => {
    return element *2;
})
console.log(arr3);

const arr4 = arr2.filter(element => {
    return element%2 === 0
    // if(element%2 === 0){
    //     return true;
    // }
    // return false;
})
console.log(arr4);

console.log(arr2.indexOf(1));
console.log(arr2.lastIndexOf(1));