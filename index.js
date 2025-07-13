const express = require("express");
const app = express();
const port = 8080;
const mongoose = require("mongoose");
const Profile = require("./models/profile.js");
app.use(express.urlencoded({ extended: true }));
const path = require("path");
app.set("view engine" , "ejs");
app.set("views" , path.join(__dirname,"views"));
app.use(express.static(path.join(__dirname, "public")));



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
let profile1 = new Profile({
  img :"www.yash.com",
  name : "yash shriavstava",
  age : 25,
  profession : "software engineer",
  Cast : "kayast",
  religion : "hindu",
  city : "agra",
  salary :"300000/month",

})
  profile1.save()
.then((res)=>{
  console.log("profile created")
}).catch((err)=>{
  console.log(err);

})
app.get("/profiles", async(req,res)=>{
  let profiles =  await Profile.find();
  console.log(profiles);
  res.render("index.ejs" , {profiles});
})
app.get("/profiles/new" , (req,res)=>{
  res.render("new.ejs");
})
app.post("/profiles", (req, res) => {
  let { name, age, profession, Cast, religion, city, salary } = req.body;

  const newProfile = new Profile({
        name : name,
    age : age,
    profession : profession,
    Cast : Cast,
    religion : religion,
    city : city,
    salary : salary,
  });

  newProfile.save()
    .then((res) => {
      console.log("Profile saved:", res);
      res.redirect("/profiles");  // ✅ redirect only after successful save
    })
    
});
