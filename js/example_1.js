// simple object

const someUser = {
  firstName: 'Tanya',
  job: 'JS Developer',
  sayHi: function(){
    alert(`Hello ${user.firstName}`)
  }
}

const user = {
  firstName: 'Tanya',
  job: 'JS Developer',
  sayHi(){
    alert(`Hello ${user.firstName}`)
  }
}

user.sayHi();

// any problem?