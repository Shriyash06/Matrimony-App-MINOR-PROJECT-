const express = require("express");
const app = express();
const port = 8080;
const mongoose = require("mongoose");
const Profile = require("./models/profile.js");
const path = require("path");
const methodOverride = require("method-override");
app.use(methodOverride('_method'));

app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));

// Start server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// Connect to MongoDB
main()
  .then(() => console.log("Connected to MongoDB"))
  .catch(err => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/datingapp");
}

// Routes
app.get("/", (req, res) => {
  res.send("Root working");
});

app.get("/profiles", async (req, res) => {
  let profiles = await Profile.find();
  console.log(profiles);
  res.render("index.ejs", { profiles });
});

app.get("/profiles/new", (req, res) => {
  res.render("new.ejs");
});

app.post("/profiles", (req, res) => {
  let { name, age, profession, Cast, religion, city, salary } = req.body;

  const newProfile = new Profile({
    name,
    age,
    profession,
    Cast,
    religion,
    city,
    salary,
  });

  newProfile.save()
    .then((savedProfile) => {
      console.log("Profile saved:", savedProfile);
      res.redirect("/profiles");
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send("Failed to save profile");
    });
});

app.get("/profiles/:id/edit", async (req, res) => {
  let { id } = req.params;
  let profile = await Profile.findById(id);
  res.render("edit.ejs", { profile });
});
app.put("/profiles/:id" , async(req,res)=>{
  let{id} = req.params;
  let { Salary :salary ,Age: age , City :city} = req.body;
  const UpdateBio = awaitProfile.findByIdAndUpdate(id,
    {salary , age , city},
    {new : true , runValidators : true}

  );
  res.redirect("/profiles");
});
app.delete("/profiles/:id" , async(req,res)=>{
  let{id} = req.params;
  let deletepro = await Profile.findByIdAndDelete(id);
  console.log(deletepro);
  res.redirect("/profiles");
})
