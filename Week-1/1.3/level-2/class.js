// const dog = {
//   name: "doggie",
//   legCount: 2,
//   speaks: "bhow bhow",
// };
// const cat = {
//   name: "cat",
//   legCount: 2,
//   speaks: "meow meow",
// };
// function printStr(animal) {
//   console.log(`animal ${animal["name"]}  ${animal["speaks"]}`);
// }

// printStr(cat);

//? class creates blueprint
//& blueprint=atttributes+functions
class Animal {
  constructor(name, legCount, speaks) {
    this.name = name;
    this.legCount = legCount;
    this.speaks = speaks;
  }
  speak() {
    console.log(`hi ${this.name} makes a noise ${this.speaks}`);
  }
  //? static methods -->associated to class itself not to objects
  static myType() {
    console.log("Animal");
  }
}

//? creating object
let dog = new Animal("dog", 4, "bhow bhow");
let cat = new Animal("cat", 4, "meow meow");
//? call function on object
cat.speak();
dog.speak();
//? calling static methods
Animal.myType();
