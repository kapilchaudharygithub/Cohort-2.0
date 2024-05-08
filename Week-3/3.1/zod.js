//? How can you do better input validaion
//* Sometime very hard condition to scale, what if you expected a complicated input
//~ Input validator libraries-->zod
//~ zod-->schema validation
//~ install--> npm i zod

const express = require("express");
const app = express();
const port = process.env.PORT || 4000;
const zod = require("zod");
const schemaHealthData = zod.object({
  kidneys: zod.array(zod.number()),
});
const schemaValidateUser = zod.object({
  email: zod.string().email(),
  password: zod.string().min(8) ,
  country: zod.literal("IN").or(zod.literal("US")),
  kidneys: zod.array(zod.number()),
});
app.use(express.json());

const validateHealthData = (req, res, next) => {
  const { error } = schemaHealthData.safeParse(req.body);
  if (error) {
    return res.status(400).json({ msg: "Invalid input" });
  }
  next();
};
const validateUserData = (req, res, next) => {
  const { error } = schemaValidateUser.safeParse(req.body);
  if (error) {
    return res.status(400).json({ msg: "Invalid input" });
  }
  next();
};

app.post("/health-checkup", validateUserData, (req, res) => {
  const kidneys = req.body.kidneys;
  const kidneyLength = kidneys.length;
  res.send(`Your Kidney Length ${kidneyLength}`);
});

app.listen(port, () => {
  console.log(`App is running on the port ${port}`);
});
