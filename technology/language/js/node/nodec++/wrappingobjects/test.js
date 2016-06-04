'use strict';

const addon = require('./build/Release/addon');

var obj = new addon.MyObject(10);
console.log(obj.PlusOne());
console.log(obj.PlusOne());
console.log(obj.PlusOne());
