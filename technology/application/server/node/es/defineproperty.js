/**
 * proxy by using defineProperty
 */

var a = {};

var bvalue = null;

Object.defineProperty(a, 'b', {
    set: (value) => {
        bvalue = ++value;
    },
    get: () => {
        return bvalue;
    }
});

a.b = 10;
console.log(a.b);
