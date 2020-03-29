"use strict"

const user = {
  firstName: 'Tanya',
  job: 'JS Developer',
  sayHi(){
    alert(`Hello ${this.firstName}`)
  }
};

user.sayHi()

// const sayHi = user.sayHi;
// sayHi();

// (user.isAdmin ? user.sayHiAdmin : user.sayHi)();