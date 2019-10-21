const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };

const returnedTarget = Object.assign(target, source);

console.log(target);
// expected output: Object { a: 1, b: 4, c: 5 }

console.log(returnedTarget);
// expected output: Object { a: 1, b: 4, c: 5 }

const user = { name: 'lwz', age: 40 }
const newUser = Object.assign({}, user, { age: 42 })
console.log(newUser)
const spreadUser = { ...user, age: 42 }
console.log(spreadUser)