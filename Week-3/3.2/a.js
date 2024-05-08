// const ALL_USERS = [
//   {
//     username: "abc@gmail.com",
//     pass: "123",
//     name: "ABC",
//   },
//   {
//     username: "xyz@gmail.com",
//     pass: "456",
//     name: "XYZ",
//   },
//   {
//     username: "pqrs@gmail.com",
//     pass: "789",
//     name: "PQRS",
//   },
// ];

// function userExists(username, password) {
//   for (const user of ALL_USERS) {
//     if (user.username === username && user.pass === password) {
//       return true;
//     }
//   }
//   return false;
// }

// let a = userExists("abc@gmail.com", "12a3");
// console.log(a);

// function getLength(str) {
//   try {
//     return str.length;
//   } catch (err) {
//     return "Something went wrong";
//   }
// }

// console.log(getLength("as"));
// // console.log(isNaN("sd"));

async function name() {
  const res = await fetch("https://sum-server.100xdevs.com/sum?a=1&b=2");
  console.log(res.value);
  console.log("done");
}
