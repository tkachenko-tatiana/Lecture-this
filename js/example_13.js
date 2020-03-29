// Стрелочная функция

let user = {
  firstName: 'Tanya',
  job: 'JS Developer',
  sayHi: () => {
    alert(`Hello ${this.firstName}`)
  }
}

user.sayHi();

user.sayHi.call(user);


const obj = { 
  bar() {
    return () => {
      console.log(this);
    }
  }
};

const foo = obj.bar();
foo();