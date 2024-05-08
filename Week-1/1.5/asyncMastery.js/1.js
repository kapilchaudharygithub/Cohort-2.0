//? Async programming with JS
//~ Js is synchronous in nature
// execute one line at a time
// move to next line when first line is finished no matter  how much time it is gonna took to complete, it waits for it whenever the first line is complete then moves to then next one.

//If we  execute valid esmaScript which is given by the standards
// for native to JS

//~ Js is single threaded
// One task at a time. (uses only one core no effect wheather your computer has 10 cores or 1 same time is going to execute the task)

// console.log("Hi we are starting");

// for (let i = 0; i < 1000000000; i++) {
//   //Sleeep
// }
// console.log("Done");

//? Mechanism by which js can get rid of synchronous and single threaded
//setTimeout-->part of runtime,browser/node
// console.log("Hi");
// setTimeout(()=>{
//     console.log("waiting for some time");
// },4000)
// console.log("last line has finished");

//~ Event queue
// stores asyn callback
//~ Event Loop-->medium of communication between event queue and call stack
// it keeps on checking wheather the callstack is empty or not
// and no global code is left
//* If empty
// going to pick one callback from event queue and put it into stak;

// function setMyTimeout() {
//   console.log("My timeout started");
//   for (let i = 0; i < 100000000; i++) {}
//   console.log("My timeout ended");
// }

// setMyTimeout();
// setInterval(() => {
//   console.log("Set interval is here");
// }, 0);
// setMyTimeout();
