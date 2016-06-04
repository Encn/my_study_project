1. check the es6 fetures supported by node.js
node --v8-options | grep harmony

2. use Babel
https://babeljs.io/
(1) install babel
```
$ npm install -g babel
```
(2) run Babel
```
$ babel-node
> console.log([1,2,3].map(x => x * x))
```
```
$ babel-node demo1.js
```
3. traceur
https://github.com/google/traceur-compiler