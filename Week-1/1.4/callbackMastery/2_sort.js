let arr = [1, 10, 9, 100, 1000, 11, 12, 3];
//? default implementation of sort is lexicographical(dictionary) order
// console.log(arr.sort());

//* sort is a HOF,, the sort function takes a  comparator funciton as an argument
//~ Reverse sorting
console.log(arr.sort((a, b) => b - a));
//~ Sorting from small to big
// console.log(arr.sort((a, b) => a - b));//^ a < b ---> a - b will negative ---> if the comp function gives negative then a is  placed before b,  if positive b is placed before a
