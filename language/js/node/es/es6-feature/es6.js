let log = console.log; //eslint-disable-line

// constant
{
    // es6
    const PI = 3.1415;
    log(PI);

    // es5
    var env = {};
    Object.defineProperty(env, 'PI', {
        value: 3.1415,
        enumerable: true,
        writable: false,
        configurable: false
    });
}

// block-scoped variable
{
    // es6
    let x = [];
    for (let i = 0; i < 2; i++) {
        x[i] = function () {
            return i * 2;
        };
    }
    // es5
    for (var i = 0; i < 2; i++) {
        (function (i) {
            x[i] = function () {
                return i * 2;
            };
        })(i);
    }
}

// block-scoped functions
{
    // es6
    {
        let a = 1;
        a++;
    }
    // es5
    (function () {
        var a = 1;
        a++;
    })();
}

// arrow functions

// extended parameter handling
{
    let a = (x, y = 7) => y;
    a(2);
    let b = function (x, y, ...a) {
        return a;
    };
    b();

    let str = 'foo';
    let chars = [...str];
    log(chars);
    let p1 = [1, 2, 3];
    let p2 = [4, 5, ...p1]; // [4, 5, 1, 2, 3]
    log(p2);
    let f = () => {};
    f(7, 8, ...p2); // f(7, 8, 4, 5, 1, 2, 3)
}

// template literals

{
    // access string raw
    let q = (strings, ...values) => {
        log(strings, values);
    };

    q `foo\n${42 + 1} bar`;
    log(String.raw `foo\n${42 + 1} bar`);
}

// extended literals

{
    log(0b111110111 === 503);
    log(0o767 === 503);
    log('𠮷'.length);
    log('𠮷'.codePointAt(0) === 0x20BB7);
    for (let codepoint of '𠮷') log(codepoint);
    // es5
    log(parseInt('111111', 2));
}

// enhanced object properties

{
    // computed property names
    let obj = {
        foo: 'bar',
        ['baz' + 123]: 42
    };
    log(obj);
    // method properties
    obj = {
        foo (a, b) {
            return b;
        },
        * quux (x, y) { // generator
            return y;
        }
    };
    log(obj);
}

// destructuring assignment

{
    // array matching
    let list = [1, 2, 3];
    let [a = 4, , b, r = 7] = list;
    [b, a] = [a, b];
    log(a, b, r);
    // object mathing, shorthand notation, deep matching
    let {
        op: d,
        lhs: {
            op: e
        },
        rhs: f
    } = {
        op: 123,
        lhs: {
            op: 45
        },
        rhs: 30
    };
    log(d, e, f);
}

// modules

// class
{
    class Shape {
        constructor () {}
    }

    class next extends Shape {
        constructor () {
            super();
            this._test = 1;
        }

        static ok () {}

        set test (v) {
            log('-------set------');
            this._test = v;
        }

        get test () {
            log('-------get-------');
            return this._test;
        }
    }
    var i = new next();
    i.test = 20;
    log(i.test);
}

// symbol type
{
    log(Symbol('foo') !== Symbol('foo'));
    const foo = Symbol();
    log(typeof foo);
    let obj = {};
    obj[foo] = 'foo';
    log(JSON.stringify(obj));
    log(Object.keys(obj));
    log(Object.getOwnPropertyNames(obj));
    log(Object.getOwnPropertySymbols(obj));

    log(Symbol.for('app') === Symbol.for('app'));
    let app = Symbol.for('app');
    log(Symbol.keyFor(app));
}

// iterator
{
    let fibonacci = {
        [Symbol.iterator] () {
            let pre = 0, cur = 1;
            return {
                next () {
                    [pre, cur] = [cur, pre + cur];
                    return {
                        done: false,
                        value: cur
                    };
                }
            };
        }
    };
    for (let n of fibonacci) {
        if(n > 1000) {
            log(n);
            break;
        }
    }
}

// generator
{
    let fibonacci = {
        *[Symbol.iterator] () {
            let pre = 0, cur = 1;
            for(;;) {
                [pre, cur] = [cur, pre + cur];
                yield cur;
            }
        }
    };

    for (let n of fibonacci) {
        if(n > 1000) {
            log(n);
            break;
        }
    }

    function *range (start, end ,step) {
        while (start < end) {
            yield start;
            start += step;
        }
    }
    for(let i of range(0, 20, 2)) {
        log(i);
    }
}

// Map/Set & WeakSet/WeakMap
{
    let s = new Set();
    s.add('hello').add('goodbye').add('hello');
    log(s.size);
    log(s.has('hello'));
    for(let key of s.values()) {
        log(key);
    }

    let m = new Map();
    m.set('hello', 42);
    m.set(s, 34);
    log(m.get(s));
    log(m.size);
    for(let [key, val] of m.entries()) {
        log(key + '=' + val);
    }

    let obj = {};
    let weakSet = new WeakSet(); // memory-leak-free
    weakSet.add(obj);
    log(weakSet.has(obj));
    // weakSet.delete(obj);
    obj = null;
    log(weakSet.has(obj));
}

// typed array
{
    let buffer = new ArrayBuffer(24);
    let id = new Uint32Array(buffer, 0, 1);
    id[0] = 7;
    let username = new Uint8Array(buffer, 4, 16);
    username = 'ddchen';
    let amountDue = new Float32Array(buffer, 20, 1);
    amountDue = 42.0;
    log(id);
    log(username);
    log(amountDue);
}

// new built-in methods
{
    let dst = {};
    Object.assign(dst, {a: 1}, {b: 2});
    log(dst);
    log([1, 2, 3, 4].find(x => x > 3));
    log('foo'.repeat(3));
    log('hello'.startsWith('ello', 1));
    log('hello'.endsWith('hell', 4));
    log('hello'.includes('ell'));
    log('hello'.includes('ell', 1));

    log(Number.isNaN(42));
    log(Number.isFinite(Infinity));
    log(Number.isSafeInteger(9007199254740992));
    log(Math.abs((0.1 + 0.2) - 0.3) < Number.EPSILON);
    log(Math.trunc(42.7));
    log(Math.trunc(-42.7));
}

// Promise

// meta-programming
{
/*
    let target = {
        foo: 'Welcome, foo'
    };
    let proxy = new Proxy(target, {
        get (receiver, name) {
            return name in receiver ? receiver[name] : `Hello, ${name}`;
        }
    });

    log(proxy.foo);
    log(proxy.world);
*/

    let obj = { a: 1 };
    Object.defineProperty(obj, 'b', { value: 2 });
    obj[Symbol('c')] = 3;
    log(Reflect.ownKeys(obj));
}
