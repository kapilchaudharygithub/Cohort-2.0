function findSum(n) {
  let ans = 0;
  for (let index = 0; index < n; index++) {
    ans += index;
  }
  return ans;
}

function findSumTill100() {
  //   return findSum(100);
  console.log(findSum(100));
}
setTimeout(findSumTill100, 1000);
console.log("Hello world");
