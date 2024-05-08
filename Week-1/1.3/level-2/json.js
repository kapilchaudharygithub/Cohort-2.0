// object to json
const users = {
  name: "Kapil",
  age: 24,
  gender: "male",
};
// JSON.parse();
// JSON.stringify()
console.log(JSON.stringify(users));
const user = JSON.stringify(users);
console.log(JSON.parse(user));
