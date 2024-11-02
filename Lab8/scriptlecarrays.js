const array = [
  [1, 2, 3, 4],
  [4, 0],
  [3, 5, 7, 0, 3, 1],
  [3, 4, -4, 1, 8],
];

const array2 = [0, 1, 2, 3, 4];
const array3 = [5, 6, 7, 8, 9];

function getSubArrayWithMaxSum(array) {
  let sum = -Infinity;
  let resArr = [];
  for (const arr of array) {
    const currentSum = arr.reduce((accumulator, num) => accumulator + num);
    if (currentSum > sum) {
      sum = currentSum;
      resArr = arr;
    }
  }
  return resArr;
}
console.log(getSubArrayWithMaxSum(array));

let string1 = "94021875870328693092478323793.2425326324";
let string2 = "15326235324326532723432.21546723";
function getSum(string1, string2) {
  let a = parseFloat(string1);
  let b = parseFloat(string2);
  let sum = a + b;
  return sum;
}
console.log(getSum(string1, string2));

function getSumOfArray(array) {
  let arraySum = 0;
  for (const num of array) {
    arraySum += num;
  }
  return arraySum;
}
console.log(getSumOfArray(array2) - getSumOfArray(array3));
