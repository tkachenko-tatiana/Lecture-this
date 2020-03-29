let user = {
  firstName: 'Tanya',
  sayHi() {
    console.log(this.firstName);
  },
  asyncSayHi() {
    setTimeout(function() {
      this.sayHi();
    }, 2000)
  }
};

user.sayHi();
user.asyncSayHi();


// How can I fix it?