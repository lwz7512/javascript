/**
 * FROM:
 * 
 * https://medium.com/coding-in-simple-english/es6-pop-quiz-shorthand-method-property-names-45c23384e67a
 */

const actions = {
  step: 0,
  printCount: function () {
    console.log(this.step)
  },
  takeStep: function () {
    this.step++
  }
}
actions.takeStep()
actions.printCount() // 1

// Shorthand method names

const actions_sh = {
  step: 0,
  printCount() {
    console.log(this.step)
  },
  takeStep() {
    this.step++
  }
}
actions_sh.takeStep()
actions_sh.printCount() // 1

// concise methods

const hello = {  world: function() {
  console.log('Hello World!')
}}
hello.world() // Hello World!

const helloAgain = { world() {
  console.log('Hello World!')
}}
helloAgain.world() // Hello World!

// object properties

const getEmail = username => `${username}@gmail.com`
function getUser (username) {
  const email = getEmail(username)
  return {
    username: username,
    email: email
  }
}
console.log(getUser("MrRoboto")) //  Object { username: "MrRoboto", email: "MrRoboto@gmail.com" }


// shorthand property names

// const getEmail = username => `${username}@gmail.com`
function getUser_sh (username) {
  const email = getEmail(username)
  return {
    username,
    email
  }
}
console.log(getUser_sh("MrRoboto")) //  Object { username: "MrRoboto", email: "MrRoboto@gmail.com" }

// concise objects

const [name, age, gender] = ["Derek","30","Male"]
const wordyObject = {
  name: name,
  age: age,
  gender: gender
}
const conciseObject = {
  name,
  age,
  gender
}
console.log(wordyObject) // Object { name: "Derek", age: "30", gender: "Male" }
console.log(conciseObject) // Object { name: "Derek", age: "30", gender: "Male" }
