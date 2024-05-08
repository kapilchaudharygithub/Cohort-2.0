//? common  async functions
//* setTimeout
//* setInterval
//* fs.readFile-->to read a file from your file system.
//* Fetch -->to fetch some data from an API end point

const fs = require("fs");
fs.readFile("./1.5/a.txt", "utf-8", function (err, data) {
  if (err) {
    console.error("Error reading the file:", err);
    return;
  }
  console.log(data);
});
console.log("Hi there from main file");
