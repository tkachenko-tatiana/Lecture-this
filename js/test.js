// task 1
const context = { id: 2 };
const result = [1, 2, 3].find((el) => el === this.id, context)
console.log(result);

// task 2
function foo() {
  console.log(this);
}

let user = {
  baz: foo.bind(null)
};

user.baz();

// task 3
function makeUser() {
  return {
    name: "Bart",
    ref: this
  };
};

let user = makeUser();
console.log( user.ref.name );


// task 4
const user = {
  firstName: "Bart",
  sayHi(){
    console.log(`Hello ${this.firstName}`);
  }
};

(user.sayHi)();

// task 5
document.getElementById('form').addEventListener('submit', function() {
  console.log(this)
})

// task 6
'use strict'

const book = {
  price: 100,
  getPrice() {
    console.log(this.price);
  }
}

setTimeout(() => book.getPrice(), 200)

// task 7
function foo() {
  this.data = false;
  function Bar() {
    this.data = true;
  }
  return new Bar();
}
const bar = foo();
console.log(bar.data)


// task 8
function Foo(prop) {
  this.prop = prop;
  this.getProp = function () {
    return `${this.prop  } - this prop`;
  };
}
const obj = new Foo("foo");
console.log(obj.getProp());


// task 9
const bar = "xo xo";

const foo = {
  bar: "lorem ipsum"
};

function test () {
  return this.bar;
}

console.log(test.call(foo));

// task 10
const a = 5;

function test () {
  return this.a;
}

const bound = test.bind({a:15});

console.log(bound());

// task 11

const user = {
  firstName: "Bart",
  sayHi: function() {
    console.log(this.firstName);
  }
};

setTimeout(user.sayHi, 2000);

// task 12
const obj = {
  x: 4,
  foo: function() {
    console.log(this.x);
  }
};
obj.foo();

// task 13
const obj = {
  x: 4,
  foo: () => {
    console.log(this.x);
  }
};
obj.foo();