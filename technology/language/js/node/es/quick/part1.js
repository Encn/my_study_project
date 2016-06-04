// arrow and lexical this
!() => {
	let arr = [1, 2, 3, 4];
	let newArr = arr.map(v => v + 1);
	console.log(newArr);

	let b = a => console.log(this);
	b();

	var ok = {
		name: "ddchen",
		test() {
			arr.forEach(f => console.log(this.name + "_" + f));
		}
	}

	ok.test();
}();

// classes
!() => {

	class Man {
		constructor(name) {
			this.name = name;
		}
		go(place) {
			console.log("go place " + this.name);
		}
	}

	class JumpMan extends Man {
		constructor(name, h) {
			super(name);
			this.h = h;
		}
		go(place) {
			super.go(place);
			console.log("where " + this.h);
		}
	}

	let man = new Man("ddchen");
	man.go();

	let jumpMan = new JumpMan("ddchen", "beijing");
	jumpMan.go();
}();

// Enhanced Object Literals
!() => {
	var superObj = {
		name: "super ddchen"
	}

	var handler = 100;

	var obj = {
		__proto__: superObj,
		handler,
		run() {
			console.log("run " + super.name);
		},
		// dynamic property name
		["prop_" + (() => 42)()]: 42
	}

	console.log(obj);
	obj.run();
}();

// template setting
!() => {
	`This is simple template string.`
	//

	let name = "ddchen";
	let res = `Hello \n ${name}`;
	console.log(res);
}();

// destructuring
!() => {
	let [a, , b] = [1, 2, 3];
	console.log(a, b);

	let {
		op, lhs, rhs
	} = {
		op: 11,
		lhs: 21,
		rhs: 31
	};
	console.log(op, lhs, rhs);

	let g = ({
		name: x
	}) => {
		console.log(x);
	};
	g({
		name: 5
	});

	let [w] = [];
	console.log(w === undefined);

	let [s = 1] = [];
	console.log(a === 1);
}();

// default + Rest + Spread
!() => {
	let f = (x, y = 12) => {
		// y is 12, if not passed or passed as undefined
		return x + y;
	}
	console.log(f(3) === 15);
	console.log(f(3, undefined) === 15);

	let f2 = (x, ...y) => {
		// y is an Array
		return x * y.length;
	}
	console.log(f2(3, 4, 5) === 6);

	let f3 = (x, y, z) => {
		return x + y + z;
	}
	let list = [1, 2, 3];
	console.log(f3(...list) === 6);
}();

// let + const
!() => {
	let x; {
		const x = "new one";
		// x = "foo" // error
	}
	x = "bar";
	// let x = "inner"; //error: already declared in block
}();

// Iterators + For...Of
!() => {
	let fibonacci = {
		[Symbol.iterator]() {
			let pre = 0,
				cur = 1;
			return {
				next() {
					[pre, cur] = [cur, pre + cur];
					return {
						done: false,
						value: cur
					}
				}
			}
		}
	}

	for (var n of fibonacci) {
		if (n > 1000) break;
		console.log(n);
	}
}();

// Generators
!() => {
	var fibonacci = {
		[Symbol.iterator]: function*() {
			var pre = 0,
				cur = 1;
			for (;;) {
				var temp = pre;
				pre = cur;
				cur += temp;
				yield cur;
			}
		}
	}
	for (var n of fibonacci) {
		if (n > 1000) break;
		console.log(n);
	}
}();

// Map + Set + WeakMap + WeakSet
!() => {
	var s = new Set();
	s.add("hello").add("goodbye").add("hello");
	console.log(s.size === 2);
	console.log(s.has("hello"));

	var m = new Map();
	m.set("hello", 42);
	m.set(s, 34);
	console.log(m.get(s) === 34);

	var wm = new WeakMap();
	wm.set(s, {
		extra: 42
	});
	console.log(wm.size === undefined);

	var ws = new WeakSet();
	ws.add({
		data: 2
	});
}();

// Symbols
!() => {
	var key = Symbol("key");
	console.log(typeof key === "symbol");

	function MyClass(privateData) {
		this[key] = privateData;
	}

	MyClass.prototype = {
		doStuff: function() {
			console.log(this[key]);
		}
	}
	var c = new MyClass("haha!");
	console.log(c[key]);
}();

// Math + Number + String + Object APIs
!() => {

	console.log(Number.EPSILON);
	console.log(Number.isInteger(Infinity));
	console.log(Number.isNaN("NaN"));
	console.log(Math.acosh(3));
	console.log(Math.hypot(3, 4));

	console.log("abcde".includes("cd"));
	console.log("abc".repeat(3));

	console.log(Array.of(1, 2, 3));
	console.log([1, 2, 3].fill(7, 1));

	console.log([1, 2, 3].findIndex(x => x === 2));
	console.log(["a", "b", "c"].entries());
	console.log(["a", "b", "c"].keys());
	console.log(["a", "b", "c"].values());

}();

// Promises
!() => {
	let timeout = (duration = 0) => {
		return new Promise((resolve, reject) => {
			setTimeout(resolve, duration);
		});
	}

	let p = timeout(1000).then(() => {
		console.log("go!");
		return timeout(2000);
	}).then(() => {
		throw new Error("hmm");
	}).catch(err => {
		console.log("err!");
		return Promise.all([timeout(100), timeout(200)])
	});
}();

// Reflect API
!() => {
	var O = {
		a: 1
	};
	Object.defineProperty(O, 'b', {
		value: 2
	});

	O[Symbol('c')] = 3;

	console.log(Reflect.ownKeys(O));

	function C(a, b) {
		this.c = a + b;
	}
	var instance = Reflect.construct(C, [20, 22]);
	console.log(instance.c);
}();

// Tail Calls
!() => {
	let factorial = (n, acc = 1) => {
		if (n <= 1) return acc;
		return factorial(n - 1, n * acc);
	};
	// Stack overflow in most implementations today,
	// but safe on arbitrary inputs in ES2015
	console.log(factorial(100000));
}();

// await
!() => {
	var p1 = new Promise(
		(resolve, reject) => setTimeout(() => resolve(2), 1000)
	);

	var p2 = new Promise(
		(resolve, reject) => setTimeout(() => resolve(3), 2000)
	);

	var test = async function() {
		var d = await p1 + await p2;

		console.log(d);
		return d;
	}

	test();
}();