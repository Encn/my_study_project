'use strict';

let log = console.log; // eslint-disable-line
//
{
    log('--------------demo1-------------');
    function* idMaker () {
        var index = 0;
        while(index < 3)
            yield index++;
    }

    let gen = idMaker();

    log(gen.next());
    log(gen.next());
    log(gen.next());
    log(gen.next());
}

//
{
    log('--------------demo2-------------');
    function* idMaker () {
        var index = 0;
        while(index < 3)
            yield index++;
    }

    let gen = idMaker();

    for(let n of gen) {
        log(n);
    }
}

// for ... of
{
    log('--------------demo3-------------');
    let a = [11, 12, 13];

    for(let n of a) {
        log(n);
    }
}

// for ... of
{
    log('--------------demo4-------------');
    let a = {
        [Symbol.iterator] () {
            let count = 0;
            return {
                next () {
                    count ++;
                    if(count < 10)
                        return { done: false, value: count * count };
                    else {
                        return { done: true, value: undefined };
                    }
                }
            };
        }
    };

    for(var n of a) {
        log(n);
    }
}

// yield*
{
    log('--------------demo5-------------');
    function * anotherGenerator (i) {
        yield i + 1;
        yield i + 2;
        yield i + 3;
        return 10;
    }

    function * generator (i) {
        yield i;
        var y = yield* anotherGenerator (i);
        yield i + y;

        return 50;
    }

    var gen = generator(10);

    // with for..of loops (see below), the final returned value would be thrown away.
    // for(var n of gen) {
    //     console.log(n);
    // }
    log(gen.next());
    log(gen.next());
    log(gen.next());
    log(gen.next());
    log(gen.next());
    log(gen.next());
    log(gen.next());
}

// yield value
{
    log('--------------demo6-------------');

    function * generator (i) {
        var x = yield i;
        var y = yield x + 10;

        return x + y;
    }

    var it = generator(10);

    log(it.next());
    log(it.next(20)); // x -> 20
    log(it.next(50)); // x -> 20, y -> 50
}

// for of 2
{
    log('--------------demo7-------------');

    function *foo () {
        yield 1;
        yield 2;
        yield 3;
        yield 4;
        yield 5;
        return 6;
    }

    for (var v of foo()) {
        log( v );
    }
    // 1 2 3 4 5

    log( v ); // still `5`, not `6` :(
}


// try catch 0
{
    log('--------------demo8-------------');

    function *foo () {
        try {
            var x = yield 3;
            log('x: ' + x);
        }
        catch(err) {
            log('foo ' + err);
        }
    }

    let it = foo();
    it.next();

    it.throw('oops!');
}

// try catch 1
{
    log('--------------demo9-------------');

    function *foo () {}

    let it = foo();
    try {
        it.throw('oops!');
    } catch (err) {
        log(err);
    }
}

// try catch 2
{
    log('--------------demo10-------------');

    function *foo () {
        var x = yield 3;
        var y = x.toUpperCase();
        yield y;
    }

    let it = foo();

    it.next();

    try {
        it.next(42);
    } catch (err) {
        log('catched::::: ' + err);
    }
}

// simplest async
{
    // wrapper
    let sleep = (time) => {
        setTimeout(() => it.next(100), time);
    };
    var foo = function*() {
        log('--------------demo11-------------');
        let r1 = yield sleep(10);
        log(r1);
        return r1;
    };

    let it = foo();

    it.next();
}
