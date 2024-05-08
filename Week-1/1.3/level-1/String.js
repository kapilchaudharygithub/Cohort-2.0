let name = "Kaapila";
//? 1. length
// console.log(name.length);
function getLength(str) {
  console.log("Original String: ", str);
  console.log("Length of String:", str.length);
}
// getLength(name);

//? 2. indexOf
console.log(name.indexOf("n"));
function findIndexOf(str, target) {
  console.log("Original String: ", str);
  if (str.indexOf(target) == -1) {
    console.log("Target not found ");
  } else {
    console.log("Index", str.indexOf(target));
  }
}
findIndexOf(name, "p");
//? 3. lastIndexOf
// console.log(name.lastIndexOf("n"));
function findLastIndexOf(str, target) {
  console.log("Original String: ", str);
  if (str.lastIndexOf(target) == -1) {
    console.log("Target not found ");
  } else {
    console.log("Index", str.lastIndexOf(target));
  }
}
// findLastIndexOf(name, "a");
// console.log(name.slice(1, 4));

//? 4. getSlice
function getSlice(str, start, end) {
  console.log("Original String: ", str);
  console.log("Sliced String: ", str.slice(start, end));
}
// getSlice(name, 1, 4);

//? 5. subString
// console.log(name.substring(1, 4));
function getSubstring(str, start, end) {
  console.log("Original String: ", str);
  console.log("Sliced SubString: ", str.substr(start, end));
}
// getSubstring(name, 1, 4);

//? 6. subStr-->last index is included
// console.log(name.substr(1, 4));
function getSubstr(str, start, end) {
  console.log("Original String: ", str);
  console.log("Sliced Subtr: ", str.substr(start, end));
}
// getSubstr(name, 1, 4);

//? 8. replace
// console.log(name.replace("K", "m"));
function replaceString(str, oldStr, newStr) {
  console.log("Original String: ", str);
  console.log(str.replace(oldStr, newStr));
}
// replaceString(name, "K", "j");

//? 7. replaceAll
// console.log(name.replaceAll("a", "m"));
function replaceAllString(str, oldStr, newStr) {
  console.log("Original String: ", str);
  console.log(str.replaceAll(oldStr, newStr));
}
// replaceAllString(name, "a", "j");

//? 8. split-->ur string into array based on delimitor

//? 9. trim
//? 10. trimStart
//? 11. trimEnd
//? 12. toUpperCase
//? 13. toLowerCase

console.log(name.split("a"));
