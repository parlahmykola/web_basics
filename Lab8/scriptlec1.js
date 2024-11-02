console.log("1)");

let a = 1;
console.log(a);

let b = [
  [1, 2, 3],
  [1, 2, 3],
  [1, 2, 3],
  [1, 2, 3],
];
console.log(b);

let n = null;
console.log(n);

function c() {
  return "Hello World";
}
console.log(c());
console.log(c);

const object = {
  property1: 1,
};
console.log(object);

console.log("2)");

let x = "1";
let y = 1;
console.log(parseInt(x));
console.log(y.toString());

console.log("3)");
if (x == y) {
  console.log("equal ==");
} else {
  console.log("not equal ==");
}
if (x === y) {
  console.log("equal ===");
} else {
  console.log("not equal ===");
}

console.log("4)");
let userNum = parseInt(prompt("Your number:"));
let key = parseInt(prompt("Your key:"));
let resultOfEncrypt = userNum + key * key;
console.log(resultOfEncrypt);
let decision = prompt("Do you want to decrypt? y or n: ");
if (decision === "y") {
  let resultOfDecrypt = resultOfEncrypt - key * key;
  console.log(resultOfDecrypt);
}
