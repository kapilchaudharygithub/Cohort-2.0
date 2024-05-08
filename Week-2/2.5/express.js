const express = require("express");
//? not  a node bundled library so we have to install it from node
function calculateSum(n) {
  let ans = 0;
  for (let i = 1; i <= n; i++) {
    ans += i;
  }
  return ans;
}
const port = process.env.PORT || 3000;
const app = express();
app.get("/", (req, res) => {
  res.send("Hello");
});
app.get("/callSum", (req, res) => {
  const n = parseInt(req.query.n);
  const ans = calculateSum(n);
  res.send(ans.toString());
});

app.listen(port, () => {
  console.log("port is running on: ", port);
});











