//? Why do you need input validation
//~ Ex:
//! What if the user sends thr wrong body?

const express = require("express");
const app = express();
const port = process.env.PORT || 4000;

app.use(express.json());

const healthCheckUpRouteMiddleware = (req, res) => {
  const kidneys = req.body.kidneys;
  const kidneyLength = kidneys.length;

  res.send(`Your Kidney Length is ${kidneyLength}`);
};

app.post("/health-checkup", healthCheckUpRouteMiddleware);

app.listen(port, () => {
  console.log(`App is running on server ${port}`);
});

//! Error handling middleware
//~ This is a special type of middleware function in express that has 4 arguments instead of 3(err,req,res,next). Express recongnizes it as an error-handling middleware because of these 4 arguments
//* Global catches help you give the user a Better error message.

//? Global Catches=> Called only when there is something faulty in your validation
app.use((err, req, res, next) => {
  res.status(500).send("Something is faulty ");
});
