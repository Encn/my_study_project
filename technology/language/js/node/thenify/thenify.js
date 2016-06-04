//
var thenify = require('thenify');
var log = console.log; // eslint-disable-line
var fs = require('fs');
var somethingAsync = thenify(
    (cb) => {
        setTimeout(cb, 500);
    });

var read = (cb) => {
    fs.readFile('test.md', 'utf8', (err, data) => {
        if (!err) {
            cb(null, data);
        }
    });
};

module.exports = () => {
    somethingAsync(() => {
        log(1);
    }).then(() => {
        log(2);
    });
    thenify(fs.readFile)('test.md', 'utf8').then((data) => {
        log(data);
    });
    thenify(read)().then((data) => {
        log(3);
        log(data);
    });
};
