var Person = function(){}

Person.prototype.sayName = function(Name){
	console.log(Name);
}

var Man = function(){
}

Inherit.extend(Man , Person);
var man = new Man();

man.sayName("ddchen");

console.log(Man.prototype);