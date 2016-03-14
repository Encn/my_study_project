var f1 = function() {
    try {
        throw new Error('123');
        console.log('here!');
        return 200;
    } catch (err) {
    }
    return 100;
}

var res1 = f1();

console.log(res1);


var f2 = function() {
    try {
        throw new Error('123');
        console.log('here!');
        return 200;
    } catch (err) {
        return 10;
    }
    return 100;
}

var res2 = f2();

console.log(res2);

var f3 = function() {
    throw new Error('123');
    console.log('here!');
    return 100;
};

var res3 = f3();

console.log(res3);