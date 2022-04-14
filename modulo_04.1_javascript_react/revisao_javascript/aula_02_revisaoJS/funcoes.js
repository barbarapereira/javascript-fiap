const fnc = (a, b) => {
    return a*b;
}

console.log(fnc(2,3));

const fnc1 = (a, ...b) => {
    console.log(a);
    console.log(b);
}
fnc1(1,2,3,4);

const fnc2 = (a=2) => {
    console.log(a);
}
fnc2(1);
fnc2("1");
fnc2([1,2,3]);
fnc2({
    a: 1,
    b:2
});

console.log(" -------- ");
const fnc3 = (fn) => {
    let ax = 1;
    if(typeof fn === 'function'){
        fn()
    } else if(typeof fn === 'number'){
        console.log(fn);
    }
    console.log(ax);
}

fnc3(fnc2);
fnc3(2);



