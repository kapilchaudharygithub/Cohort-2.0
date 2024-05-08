//? Promises
//* Promises are syntatical sugar that make this async code more readable/managable.

//* It is just a class that makes callbacks and async functions slightly more readable.

//* return 3 states-->pending, resolve, reject

//?creating own  async func
//*It is just a wrapper on top of another async function,which is fine.
//* Usually all async functions you will write will be on top of JS provided async functions like setTimeout or fs.readFile.

//? ugly way
// const fs = require("fs");
// //my own async function
// function kapilsReadFile(cb) {
//   fs.readFile("./1.5/a.txt", "utf-8", function (err, data) {
//     if (err) {
//       cb(err);
//     }
//     cb(data);
//   });
// }
// // callback function to call
// function onDone(data) {
//   console.log(data);
// }

// kapilsReadFile(onDone);

//? cleaner way(Promise)
const fs = require("fs");
//my own async function
function kapilsReadFile() {
  console.log("Inside kapilsReadFile");
  return new Promise(function (resolve, reject) {
    console.log("Inside promise");
    fs.readFile("./1.5/a.txt", "utf-8", function (err, data) {
      console.log("before resolving");
      if (err) {
        resolve(err);
        // reject(err);
      }
      resolve(data);
    });
  });
}
// callback function to call
function onDone(data) {
  console.log(data);
}
// console.log("inside main function 1");
// let a = kapilsReadFile();
// console.log(a);
// kapilsReadFile().then(onDone);
// console.log("inside main function 2");

//? more paractical
//* whenever u create it, you need to passs in a function as the first argument which resolves the furst argument
//* It generally resolves immediately
var d = new Promise(function (resolve, reject) {
  setTimeout(function () {
    //?place for writer of the async function to do their maic(get ketchup) and call resolve at the end with the data
    resolve("Resolved");
  }, 1000);
});
function callback() {
  //*  Actually logging the data with what the function above resolved with
  console.log(d);
}
console.log(d);
//? .then gets called whenever ther async function resolves.
d.then(callback);
