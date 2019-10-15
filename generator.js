function* generator(i) {
  yield i;
  yield i + 10;
}

var gen = generator(10);

// console.log(gen.next().value);
// expected output: 10
// console.log(gen.next().value);
// expected output: 20

function* logGenerator() {
  console.log(0);
  console.log(1, yield);
  console.log(2, yield);
  console.log(3, yield);
}

var loggen = logGenerator();

// the first call of next executes from the start of the function
// until the first yield statement
loggen.next();             // 0
loggen.next('pretzel');    // 1 pretzel
loggen.next('california'); // 2 california
loggen.next('mayonnaise'); // 3 mayonnaise