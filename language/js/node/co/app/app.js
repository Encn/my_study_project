var co = require('co');
var fs = require('fs');
var thenify = require('thenify');

function sleep (ms) {
    return function (done) {
        setTimeout(done, ms);
    };
}

var write = function (txt, cb) {
    fs.writeFile('test.md', txt, function (err) {
        if (err) {
            throw err;
        }
        console.log('writeFile');
        cb && cb(null);
    });
};

var read = function () {
    return new Promise(function (resolve, reject) {
        fs.readFile('test.md', function (err, data) {
            if (err) {
                reject(err);
            } else {
                console.log('read file %s', data)
                resolve(data);
            }
        });
    });
};

function* first() {
    console.log('before');
    yield sleep(500);
    console.log('after');
}

function* second() {
    console.log('write before');
    yield thenify(fs.writeFile)('test.md', 'hello!')
    console.log('write after');
}

function* third() {
    console.log('read before');
    var result =
        yield read();
    console.log('third %s', result);
    console.log('read after');
    return result;
}

module.exports = {
    first: first,
    second: second,
    third: third
};

var preTest = function () {
    co(function*() {
        yield first;
        yield second;
        var data =
            yield third;
        console.log('result %s', data);
    });
};
