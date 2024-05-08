const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://kc90040:J%40%40t5136984@cluster0.3adu2tj.mongodb.net/dbCohort2"
);

const User = mongoose.model("mydata", {
  name: String,
  username: String,
  password: String,
  email: String, // Include email in the schema
});

const user = new User({
  name: "Kapil",
  email: "kc@gmail.com",
  password: "123e",
});

user
  .save()
  .then(() => {
    console.log("User saved successfully.");
    mongoose.connection.close(); // Close the connection after saving
  })
  .catch((error) => {
    console.error("Error saving user:", error);
    mongoose.connection.close(); // Close the connection in case of an error
  });
