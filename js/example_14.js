// Проигнорированный this

function foo() {
	console.log( this );
}

foo.call( null );
foo.call( undefined );