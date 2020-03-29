// "Контексты" в вызовах API

const arr = [1,2,3];

const context = { id: 15 };

arr.forEach(function(el) {
  console.log(el, this.id)
}, context)
