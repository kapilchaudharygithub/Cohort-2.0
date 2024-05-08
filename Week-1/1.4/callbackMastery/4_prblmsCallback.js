//? Problem with callbacks
//~ 1. Readability
// Code become hard to understand , what it actually wants to do
//~ 2.Callback hell
//  Pyramid of doom
//~ 3. Inversion of control(Promises can resolve this issue)
//  due to callbacks , I am passing control of how execution should be called to doTask

let arr = [1, 10, 1000, 9, 2, 3, 11];

// arr.sort((a,b)=>a-b)

function doTask(x, fn) {
  //  Implementation done by team A
  fn(x * x); //Calling square
}

doTask(5, (num) => {
  console.log(num);
});
