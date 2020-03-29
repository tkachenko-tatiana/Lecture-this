let user = {
  firstName: 'Tanya',
  job: 'JS Developer',
  sayHi(){
    alert(`Hello ${user.firstName}`)
  }
}

user.sayHi();

const admin = { ...user, isAdmin: true };
user = null;

admin.sayHi(); // What will be the output?

// How can we fix it?