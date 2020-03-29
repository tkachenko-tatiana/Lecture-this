// Жесткая привязка

function foo() {
	console.log( this.a );
}

const obj = { a: 2 };

const bar = function() {
	foo.call(obj);
};

bar();
setTimeout(bar, 100 );

// переиспользуемая вспомогательная функция

function bind(fn, obj) {
	return function(args) {
		return fn.apply(obj, args);
	};
}

const baz = bind(foo, obj);

baz();
setTimeout(baz, 100 );

// встроенный инструмент

const boundFoo = foo.bind(obj);