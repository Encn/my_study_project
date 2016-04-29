'use strict';

let log = console.log; //eslint-disable-line

let p1 = new Promise((resolve) => {
    setTimeout(() => {
        resolve(20);
    }, 100);
});

p1.then((res) => {
    log(res + 1);
});

p1.then((res) => {
    log(res + 2);
});

p1.then((res) => {
    log(res + 3);
});

setTimeout(() => {
    p1.then((res) => {
        log(res + 4);
    });
}, 200);
