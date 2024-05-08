//? Let's create an in memory hospital(story all data in a variable)
//~ You need to create 4 route (4 things that the hostpital can do)
//* 1. GET-->User can check how many kidneys they have and their health(health of kidneys)
//* 2. POST-->User can add new kidney
//* 3. PUT-->User can replace a kidney, make it healthy
//* 4. DELETE-->User can remove a kidney
var users = [
  {
    name: "John",
    kidneys: [],
  },
];
// var users = [
//   {
//     name: "John",
//     kidneys: [
//       {
//         healthy: false,
//       },
//       {
//         healthy: false,
//       },
//       {
//         healthy: true,
//       },
//       {
//         healthy: false,
//       },
//     ],
//   },
// ];
const express = require("express");
const app = express();
const port = process.env.PORT || 4000;
app.use(express.json());

app.get("/", (req, res) => {
  //* 1. GET-->User can check how many kidneys they have and their health(health of kidneys)
  const user = users[0];
  const kidneys = user.kidneys;
  const totalKidneys = kidneys.length;
  const goodKidneys = kidneys.filter((kidney) => kidney.healthy == true);
  const totalGoodKidneys = goodKidneys.length;
  const totalBadKidneys = totalKidneys - totalGoodKidneys;

  res.send(
    totalKidneys == 0
      ? "Sorry you have no kidneys"
      : `<p>
  Total kidneys:${totalKidneys}
  <p>
  <p>
  Total Good kidneys:${totalGoodKidneys}
  <p>
  <p>
  Total Bad kidneys:${totalBadKidneys}
  <p>
  `
  );
});
app.post("/", (req, res) => {
  //* 2. POST-->User can add new kidney

  const isHealthy = req.body.isHealthy;
  users[0].kidneys.push({ healthy: isHealthy });
  // console.log(kidneys);
  // console.log(users[0].kidneys.length);
  // console.log(users[0].kidneys);

  res.json({
    msg: "New kidneys added successful",
  });
});
app.put("/", (req, res) => {
  //* 3. PUT-->User can replace a kidney, make it healthy
  const user = users[0];
  const kidneys = user.kidneys;
  const badKidneys = kidneys.filter((kidney) => kidney.healthy == false);

  if (kidneys.length == 0) {
    res.json({ msg: "You have no kidney" });
  } else if (badKidneys.length == 0) {
    res.json({ msg: "All Kidneys are already good" });
  } else {
    kidneys.map((kidney) => (kidney.healthy = true));
    res.json({ msg: "Kidneys repaired successful" });
  }
});

app.delete("/", (req, res) => {
  const user = users[0];
  const kidneys = user.kidneys;
  const goodKidneys = kidneys.filter((kidney) => kidney.healthy == true);
  const badKidneys = kidneys.filter((kidney) => kidney.healthy == false);
  if (kidneys.length == 0) {
    res.json({
      msg: "You have no kidney for deleting",
    });
  } else if (badKidneys.length == 0) {
    res.status(411).json({
      msg: "All kidneys are already healthy",
    });
  } else {
    users[0].kidneys = goodKidneys;

    res.json({
      msg: "Unhealthy kidneys removed successfully",
    });
  }
});

app.listen(port, () => {
  console.log("Listening port on: ", port);
});

//? input
//* get-->query params
//* post--> body
