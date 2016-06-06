'use strict';

let f = function * (x) {
    return yield x + 1;
};

let ret = f(10);
console.log(ret.next());
