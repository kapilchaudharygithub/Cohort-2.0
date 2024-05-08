//? create http server
//* using external library "express"

// Import required modules
const express = require("express");

// Create an Express application
const app = express();
// const port = 2000;

//? access
const port = process.env.PORT || 2000;
//?$env:PORT = 3000
//~ used to set any new port

// Middleware to parse JSON bodies
app.use(express.json());

// Define a route
app.get("/", (req, res) => {
  res.send("Hello World KP");
});

app.get("/html-element", (req, res) => {
  res.send("<b>Bold Data</b>");
});

//? sending post request
app.post("/post-req", (req, res) => {
  console.log(req.headers["authorization"]);
  console.log(req.body);
  console.log(req.body.message);
  console.log(req.body.ans);
  // console.log(req.query.message);

  res.send({
    msg: "2 + 2 = 4",
  });
});

app.listen(port, () => {
  console.log(`Running on port ${port}`);
});

//? ipconfig-->IP -->run localhost on any device connected to same wifi
//? npm i nodemon-->so restart server with all changes =>npx nodemon fileName.js
