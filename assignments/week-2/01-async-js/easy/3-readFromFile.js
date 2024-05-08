const fs = require("fs");

// fs.readFile("./file.txt", (err, data) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(data.toString());
//   }
// });
// readFile();
//? ugly way
function readFileAsync(cb) {
  fs.readFile("./file.txt", (err, data) => {
    if (err) {
      cb(err);
    } else {
      cb(data.toString());
    }
  });
  
}
function callback(data) {
  console.log(data);
}
// readFileAsync(callback);

function readFileAsync2() {
  return new Promise((res, rej) => {
    fs.readFile("./file.txt", (err, data) => {
      if (err) {
        res(err);
      } else {
        res(data.toString());
      }
    });
  });
}
// readFileAsync2().then(callback);

async function main() {
  await readFileAsync2().then(callback);
}
main();
