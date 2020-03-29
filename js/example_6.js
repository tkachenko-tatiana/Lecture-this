function baz() {
  // стек вызовов: `baz`
  // поэтому наша точка вызова — глобальная область видимости

  console.log( "baz" );
  bar(); // <-- точка вызова для `bar`
}

function bar() {
  // стек вызовов: `baz` -> `bar`
  // поэтому наша точка вызова в `baz`

  console.log( "bar" );
  foo(); // <-- точка вызова для `foo`
}

function foo() {
  // стек вызовов: `baz` -> `bar` -> `foo`
  // поэтому наша точка вызова в `bar`

  console.log( "foo" );
}

baz();



