const express = require("express");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const jwtPassword = "123456"; // Change this to a more secure value in production
const zod = require("zod");

mongoose.connect(
  "mongodb+srv://kc90040:J%40%40t5136984@cluster0.3adu2tj.mongodb.net/dbCohort2"
);

const UserInputSchema = zod.object({
  name: zod.string(),
  username: zod.string().email(),
  password: zod.string(),
});

const User = mongoose.model("User", {
  name: String,
  username: String,
  password: String,
});

const app = express();
app.use(express.json());

async function userValidation(req, res, next) {
  const { error } = UserInputSchema.safeParse(req.body);
  if (error) {
    return res.status(400).json({
      msg: error,
    });
  }
  next();
}

async function userNotExists(req, res, next) {
  const { username } = req.body;
  const existingUser = await User.findOne({ username: username });
  if (existingUser) {
    return res.status(400).json({
      msg: "User Already exists",
    });
  }
  next();
}

async function userExists(req, res, next) {
  const { username, password } = req.body;
  const existingUser = await User.findOne({ username: username });
  if (!existingUser) {
    return res.status(400).json({
      msg: "User Not exists",
    });
  }
  next();
}

app.post("/signup", userValidation, userNotExists, async (req, res) => {
  const { name, username, password } = req.body;
  const user = new User({
    name: name,
    username: username,
    password: password,
  });
  try {
    await user.save();
    res.status(200).json({
      msg: "User Created Successfully",
    });
  } catch (error) {
    res.status(500).json({ msg: "Internal Server Error" });
  }
});

app.post("/signin", userValidation, userExists, async (req, res) => {
  const { username } = req.body;
  const token = jwt.sign({ username: username }, jwtPassword);
  res.json({
    token,
  });
});

app.get("/users", async (req, res) => {
  const token = req.headers.authorization;
  if (!token) {
    return res.status(401).json({ msg: "Token not provided" });
  }
  try {
    const decoded = jwt.verify(token, jwtPassword);
    const username = decoded.username;
    const users = await User.find({ username: { $ne: username } });
    res.json({ users });
  } catch (err) {
    res.status(403).json({ msg: "Invalid token" });
  }
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
