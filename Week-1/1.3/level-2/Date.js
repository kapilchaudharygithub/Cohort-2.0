//?1. new Date
const currentDate = new Date();

//? Getting various components of date
//! Months are zero indedxed , so adding 1

console.log(currentDate.getMonth() + 1);
console.log(currentDate.getDate());
console.log(currentDate.getFullYear());
console.log(currentDate.getHours());
console.log(currentDate.getMinutes());
console.log(currentDate.getSeconds());
//! epoch timestamp from 1970
console.log(currentDate.getTime());

//? Setting components of date
currentDate.setFullYear(2022);
currentDate.setMonth(11);
console.log(currentDate);
