//? callback functions

function square(n) {
  return n * n;
}
function cube(n) {
  return n * n * n;
}
function sum(a, b, cb) {
  return cb(a) + cb(b);
}

console.log(sum(2, 3, square));
