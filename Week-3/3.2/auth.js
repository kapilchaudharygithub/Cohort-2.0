//? Let's start by creating our assignment for today
//? A website which has 2 endpoints
//~ POST/signin
//*Body{username:string,password:string}
//* return a json web token with username encrypted.
//* return a json web token with usernames encrypted.

//~ GET/users
//* Headers-->authentication header
//* returns an array of all users if user is  signed in (token is connect)
//* returns 403 status  code if not.

const express = require("express");
const app = express();
const zod = require("zod");
const jwt = require("jsonwebtoken");
const jwtPassword = "123456";
app.use(express.json());
const userLoginSchema = zod.object({
  username: zod.string().email(),
  password: zod.string(),
  name: zod.string(),
});

const ALL_USERS = [
  {
    username: "abc@gmail.com",
    password: "123",
    name: "ABC",
  },
  {
    username: "xyz@gmail.com",
    password: "456",
    name: "XYZ",
  },
  {
    username: "pqrs@gmail.com",
    password: "789",
    name: "PQRS",
  },
];
function userExists(username, password) {
  for (const users of ALL_USERS) {
    if (users.username === username && users.password === password) {
      return true;
    } else {
      return false;
    }
  }
}
const userLoginMiddleware = (req, res, next) => {
  const { error } = userLoginSchema.safeParse(req.body);
  if (error) {
    return res.status(400).json({
      msg: "invalid Credentials",
    });
  }
  next();
};

const port = process.env.PORT || 3000;
app.post("/signin", userLoginMiddleware, (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  if (userExists(username, password)) {
    const token = jwt.sign(
      { username: username, password: password },
      jwtPassword
    );
    res.json({
      token,
    });
  } else {
    res.status(403).json({
      msg: "Something Went wrong",
    });
  }
});

const isUserLogin = (req, res, next) => {
  const token = req.headers.authorization;
  try {
    const decoded = jwt.verify(token, jwtPassword);
    const username = decoded.username;
    return res.json({
      ALL_USERS,
    });
  } catch (err) {
    return res.status(403).json({
      msg: "INvalid token",
    });
  }
};

app.get("/users", (req, res, next) => {
  const token = req.headers.authorization;
  // console.log(token);
  try {
    const decoded = jwt.verify(token, jwtPassword);
    const username = decoded.username;
    const password = decoded.password;
    console.log(username);
    return res.json({
      users: ALL_USERS.filter((val) => {
        if (val.username === username && val.password === password) {
          return false;
        } else {
          return true;
        }
      }),
    });
  } catch (err) {
    return res.status(403).json({
      msg: "Invalid token",
    });
  }
});
app.listen(port, () => {
  console.log("App is running on server: ", port);
});



//? Auth reacap
// JWT to create tokens
// user gets back a token after the signin express.request
// user sends back tokens in all authenticated requests