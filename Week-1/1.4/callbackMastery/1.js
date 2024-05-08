//? Higher order functions
//~ function taking another function as an argument
function f(x, fn) {
  /**
   * x-->number
   * fn-->function
   */
  console.log(x);
  fn();
}

// f(19,()=>{
//     console.log("I am an expression passed to a HOF");
// })





