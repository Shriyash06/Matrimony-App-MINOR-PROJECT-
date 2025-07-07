const express = require("express");
const app = express();
const port = 8080;
const mongoose = require("mongoose");
const Profile = require("./models/profile.js");

// Start server
app.listen(port, () => {
    console.log(`server is running on port ${port}`);
});

// Connect to MongoDB
main()
  .then(() => {
    console.log("connected to mongodb");
  })
  .catch(err => console.log(err));  // ✅ FIXED: moved .catch to same chain

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/datingapp');
}

// Root route
app.get("/", (req, res) => {
  res.send("root working");
});
