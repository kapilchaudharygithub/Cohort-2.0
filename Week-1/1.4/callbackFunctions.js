//? callback functions
//? Step-1: can you call a function inside another function
//~ square,sumOfSquares(a,b)
function square(n) {
  return n * n;
}
function cube(n) {
  return n * n * n;
}
// function sumOfSquares(a, b) {
//   return square(a) + square(b);
// }
// function sumOfCubes(a, b) {
//   return cube(a) + cube(b);
// }

function sum(a, b, cb) {
  return cb(a) + cb(b);
}
// console.log(sumOfSquares(2, 3));
// console.log(sumOfCubes(2, 3));
console.log(sum(2, 3, cube));

//? Anonymous Functions
console.log(
  sum(2, 3, function (n) {
    return n * n;
  })
);
