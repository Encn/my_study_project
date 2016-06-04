const s1 = Symbol.for('a');

const s2 = Symbol('a');

const s3 = Symbol.for('a');

console.log(s1 === s2);

console.log(s1 === s3);



// --------------------->

'use strict';

var s1 = Symbol['for']('a');

var s2 = Symbol('a');

var s3 = Symbol['for']('a');

console.log(s1 === s2);

console.log(s1 === s3);
