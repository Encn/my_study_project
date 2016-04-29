'use strict';

let log = console.log;

log(`string text`);
log(`number ${1 + 2}`);

let tag = (strings, ...values) => {
    console.log(strings[0]);
    console.log(strings[1]);
    console.log(values[0]);
    console.log(values[1]);
    return 'haha';
}

let a = 3, b = 4;

log(tag `hello ${a + b} world ${a * b}`);

// return not string

let tag2 = (strings, ...values) => {
    log(strings.raw);
    return {
        a: 1
    }
}

log(tag2 `hello ${0} world!`);
