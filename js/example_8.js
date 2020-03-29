// Неявная привязка

function foo() {
	console.log( this.a );
}

const obj = { a: 2, foo };
obj.foo();

const obj1 = { a: 12, obj };
obj1.obj.foo();

// но
const bar = obj.foo;
bar();

// или
function doFoo(fn) {
	fn();
}

doFoo( obj.foo );

// или
setTimeout( obj.foo, 100 );

// но
const button = document.getElementById('context');
button.addEventListener('click', function() {
  console.log('My context: ', this)
})