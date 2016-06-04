'use strict';

let fun1 = function * (y) {
    console.log('y ' + y);
    let x = yield 4 + y;
    console.log('x ' + x);
    let z = yield 9 + x;
    console.log('z ' + z);
    return x;
};

let fun2 = function * () {
    let k = yield * fun1(10);
    console.log('k ' + k);
};

let g = fun2();
let t1 = g.next();
console.log(t1);
let t2 = g.next(t1.value);
// g.next();
