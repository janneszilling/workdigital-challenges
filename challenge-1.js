/**
 * Bitte erstelle eine Funktion, welche eine Reihe von Zahlen annimmt und anschließend die zweitgrößte Zahl zurückgibt.
 */

const secondLargest = (arr) => {
  let max = Math.max.apply(null, arr);
  arr.splice(arr.indexOf(max), 1);
  let secondMax = Math.max.apply(null, arr);
  return secondMax;
};

console.log(secondLargest([10, 40, 30, 20, 50]));
console.log(secondLargest([25, 143, 89, 13, 105]));
console.log(secondLargest([54, 23, 11, 17, 10]));
