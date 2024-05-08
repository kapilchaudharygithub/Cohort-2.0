const users = {
  name: "Kapil",
  age: 24,
  gender: "male",
};

//? Object.keys()-->array of keys
console.log(Object.keys(users));

//? Object.values()-->array of values
console.log(Object.values(users));

//? Object.entries()-->nested array containing keys and values
console.log(Object.entries(users));

//? Object.hasOwnProperty()-->\used to checjk given prop is avail in the array , returns either true or false
console.log(Object.hasOwnProperty("name"));

//? Object.assign()-->used to add new key-value pair in new or existing array, or we can say use to merge 2 or more objects
console.log(Object.assign({}, { newProp: "newValue" }));
console.log(Object.assign(users, { newProp: "newValue" }));
