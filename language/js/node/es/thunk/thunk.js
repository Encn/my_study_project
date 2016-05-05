var fs = require('fs');

var thunkify = require('thunkify');

var readFile = thunkify(fs.readFile);


var foo = function*() {
    var r1 =
        yield readFile('./test.txt');
    console.log(r1.toString());
};

var run = function(fn) {
    var gen = fn();

    function next(err, data) {
        var result = gen.next(data);
        if (result.done) return;
        result.value(next);
    }

    next();
};

run(foo);
