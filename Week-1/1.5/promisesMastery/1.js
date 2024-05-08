//? Promise
//~ Readability enhancer
//~ Solve the prblm of inversion of control
// IN JS promises are special type of objects that get returned immediately when we call them

//* Promises act as a placeholder for the data/result for hope to get back sometime in future
//* In that promise object we can attach the funcitonallity we want to create once the future task is done
//* Once the future task is done , promises will automatically executing the attached functionallity

// native to js-->creation of a promise object is sync to nature.
// Normal Js function

//? States of promise object
//~ Pending
//default state(when we create )
// represents-->work in progress
//~ fulfilled
// if the operation is completed successfully
//~ rejected
// if the operation is not successful then it goes in rejected state

//? How to create a promise
//~ new Promise(callBack)
// promise constructor
//new -->tells it is a object
//~ callBack/executor function-->contains two parameters(res,rej)
// Inside this function we can write our time consuming /non-time consuming task.
// res/rej --->are normal function whenever they called either they go in resolve or reject state which you called and if you didn't call anyone then prmise remains in pending state
//~ value
//pending state===>undefined
//resolve state==> value  gets updated/assigned with the argument of res
//rejec state==> value  gets updated with the argument of rej

//^ Example-1
// function fun(x) {
//   return new Promise((res, rej) => {
//     for (i = 0; i < x; i++) {
//       console.log(i);
//     }
//     res(x * x);
//   });
// }

// fun(5).then((x) => {
//   console.log("Calling callback", x);
// });

//^ Example-2
function getRandomInt(num) {
  return new Promise((res, rej) => {
    if (num % 2 == 0) {
      res(num);
    } else {
      rej(num);
    }
  });
}
c = getRandomInt(3);

console.log(c);

// .then(fulfillhandler,rejectionhandler)
// c.then(
//   (val) => {
//     console.log("resolve: ", val);
//   },
//   (val) => {
//     console.log("reject: ", val);
//   }
// );
