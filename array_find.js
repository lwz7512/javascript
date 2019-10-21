/**
 * The function and syntax of find() is very much like the Array.filter method, except it only returns a single element. Another difference is when nothing is found, this method returns a value of undefined.
 */

const trees = [ 
  "birch", 
  "maple", 
  "oak", 
  "poplar" 
];

const result = trees.find(tree => tree.startsWith("m"));

console.log(result)// "maple"

const deciduous = [
  { name: "birch", count: 4 },
  { name: "maple", count: 5 },
  { name: "oak", count: 2 }
];

const evergreens = [
  { name: "cedar", count: 2 },
  { name: "fir", count: 6 },
  { name: "pine", count: 3 }
];

// our testing function
const hasFiveOrMore = el => el.count >= 2;

const decResult = deciduous.find(hasFiveOrMore);
console.log(decResult)// { name: "maple", count: 5 }

const evgResult = evergreens.find(hasFiveOrMore);
console.log(evgResult)// { name: "fir", count: 6 }