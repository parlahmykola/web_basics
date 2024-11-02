function Worker(name, age, yearOfBirth) {
  this.name = name;
  this.age = age;
  this.yearOfBirth = yearOfBirth;
}
let workerJohn = new Worker("John", "18", "2000");
console.log(workerJohn);

function ShopWorker(name, age, yearOfBirth, placeOfWork) {
  this.name = name;
  this.age = age;
  this.yearOfBirth = yearOfBirth;
  this.placeOfWork = placeOfWork;
}
ShopWorker.prototype = Object.create(Worker.prototype);
ShopWorker.prototype.constructor = ShopWorker;
let shopAssistant = new ShopWorker("Maria", "17", "2001", "Watsons");

console.log(shopAssistant);
