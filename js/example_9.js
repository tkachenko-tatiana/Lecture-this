// Явная привязка

function foo() {
	console.log( this.a );
}

const obj = { a: 2 };

foo.call( obj );

function boo(arg) {
	console.log( this.a, arg );
}

boo.call(obj, 3)
boo.apply(obj, [3])