//? Callback
/**
 *
 * x-->number
 * fun-->HOF-->takes fn as argument
 */



function func(x, fn) {
  console.log(x);
  fn();
}

// func(5, () => {
//   console.log("Callback has been called");
// });

setTimeout(() => {
  console.log("setTimeout called after 4.9 s");
}, 4000);

function fun2(x, fn) {
  for (let i = 0; i <= x; i++) {
    console.log(x);
  }
  fn(x * x);
}

// fun2(5, (z) => {
//   console.log(z);
// });
