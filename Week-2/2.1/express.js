//? What is express
// node js framework
//~ Framework
// used to help  deveopers to  build web apps in less time.
//gives a lot of inbuilt features and inbuilt libraries.
//? Major Adavantages / prblms solved by express
//Routing-->if_else(for get,put)
// Middlewares
// TemplateEngine-->used for includinf dynamic content

//?  Major Adavantages /
// Easy to learn
// High Performance
// Templte Engine

//? Creating server using http

const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
/// Handle request
app.get("/main", (req, res) => {
  res.send("On the main page");
});

app.listen(port, () => {
  console.log(`App is listening on the ${port}`);
});


//? How express works?
//express github/lib
// it uses http and createServer function from nodeJS
// we are just using the wrapper functions.

// send function internally uses the  end function.


//? Middleware in express
// request handler allow user to intercept  the request and modify them and call next middleware/