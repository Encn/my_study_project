/**
 * 它的用法类似于var，但是所声明的变量，只在let命令所在的代码块内有效。
 */
!(function() {
	{
		let a = 10;
		var b = 1;
	}
	try {
		console.log(a);
	} catch (e) {
		console.log(e);
	}
	console.log(b);
})();

!(function() {
	var arr = [1, 2, 3];
	for (let i = 0; i < arr.length; i++) {}
	try {
		console.log(i);
	} catch (e) {
		console.log(e);
	}
})();

!(function() {
	var a = [];
	for (var i = 0; i < 10; i++) {
		a[i] = function() {
			console.log(i);
		};
	}
	a[6]();
})();

!(function() {
	var a = [];
	for (let i = 0; i < 10; i++) {
		a[i] = function() {
			console.log(i);
		};
	}
	a[6]();
})();

/**
 * let不会发生变量提升
 */

/**
 * let 不允许重复声明
 */

/**
 * const 与let类似
 * const 用来声明常量，不可以修改
 */
{
	const PI = 3.1415;
	console.log(PI);
}