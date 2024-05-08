//? async await
//* Syntatic sugar  (Still uses callbacks,promises under the hood)
//? async await syntax
//* makes codxe much more readabale than callbacks/promises
//* usually used on caller side, not on the side where you define async function

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
kapilsReadFile().then(onDone(data));
// callback function to call
function onDone(data) {
  console.log(data);
}
// onDone(kapilsReadFile);
async function main() {
  let value = await kapilsReadFile();
  console.log(value);
}
// main();

var d = new Promise(function (resolve, reject) {
  setTimeout(function () {
    //?place for writer of the async function to do their maic(get ketchup) and call resolve at the end with the data
    resolve("Resolved");
  }, 1000);
});
// function callback() {
//   //*  Actually logging the data with what the function above resolved with
//   console.log(d);
// }
// console.log(d);

async function main2() {
  const value = await d;
  console.log(value);
}
// d.then(callback);
// main2();
