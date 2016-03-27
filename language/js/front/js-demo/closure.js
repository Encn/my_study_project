//simple closure
var closure = function() {
	var name = "kino";
	return function() {
		return name;
	};
}();
console.log(closure());

//simple singleton
var singleton = function() {
	return function() {
		return "I'm a singleton!";
	}
}();
console.log(singleton());

//singletonClass
var singletonClass = function(fn) {
	var instance;
	return instance || (instance = fn.apply(this, arguments));
};

var singletonInst = singletonClass(function(){
	return "I'm a singletonInst!";
});

console.log(singletonInst);

//anonymous function module
window.module = (function(document){
	var newDiv = document.createElement('div');
	body.appendChild(newDiv);
})(document)
//声明依赖，私有作用域


