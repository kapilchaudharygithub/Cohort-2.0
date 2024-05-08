//? Middleware -->used for pre-checks
//~ Authentication
//~ Input Checks

//? Before we proceed let's add constraints to our route.

//~ 1. User needs to send a kidneyId as a query param which should be a number from 1-2(humans only have 2 kidneys)
//~ 2. User should should send a username and passwords in the headers.

const express = require("express");
const app = express();
const port = process.env.PORT || 4000;
const userValidatorMiddleware = (req, res, next) => {
  const username = req.headers.username;
  const password = req.headers.password;

  if (username === "Kapil" && password === "pass") {
    res.status(200);
  } else {
    res.status(403).json({
      login: "Authentication failed",
    });
    return;
  }
  next();
};

const kidneyCheckerMiddleware = (req, res, next) => {
  const kidneyId = parseInt(req.query.kidneyId);

  if (isNaN(kidneyId) || kidneyId > 2 || kidneyId < 1) {
    res.status(411).send("Please provide a valid kidney ID");
    return;
  } else {
    next();
  }
};

const healthCheckUpRouteMiddleware = (req, res) => {
  res.send("Your Kidney is Fine");
};

let re = 0;
const countTotalNoRequestsMiddleware = (req, res, next) => {
  re++;

  console.log(re);
  res.status(200);
  next();
};
//? use middleware for all
//~ app.use(express.json())-->use for body don't know type of para
// app.use(userValidatorMiddleware)

app.get(
  "/health-checkup",
  userValidatorMiddleware,
  kidneyCheckerMiddleware,
  countTotalNoRequestsMiddleware,
  healthCheckUpRouteMiddleware
);

app.listen(port, () => {
  console.log("Running on PORT", port);
});
