const mongoose = require("mongoose");
const Profile = require("./models/profile.js");

// Connect to MongoDB
main()
  .then(() => {
    console.log("Connected to MongoDB");
    return seedDB(); // Insert the profiles
  })
  .catch(err => console.log(err));

// MongoDB connection function
async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/datingapp");
}

// Seed data
const allprofiles = [
  {
    img: "www.yash.com",
    name: "Yash Shrivastava",
    age: 27,
    profession: "Software Engineer",
    Cast: "Kayasth",
    religion: "Hindu",
    city: "Agra",
    salary: "200000/month",
  },
  {
    img: "www.yash.com",
    name: "Abhishek Solanki",
    age: 25,
    profession: "Spanish Mediator",
    Cast: "Thakur",
    religion: "Hindu",
    city: "Agra",
    salary: "76000/month",
  },
  {
    img: "www.yash.com",
    name: "Arpit Shrivastava",
    age: 25,
    profession: "Branch Manager",
    Cast: "Kayasth",
    religion: "Hindu",
    city: "Agra",
    salary: "125000/month",
  },
  {
    img: "www.yash.com",
    name: "Kshitiz Shrivastava",
    age: 30,
    profession: "Cashier in SBI",
    Cast: "Kayasth",
    religion: "Hindu",
    city: "Bah (Agra)",
    salary: "80000/month",
  },
];

// Function to insert all profiles
async function seedDB() {
  try {
    await Profile.deleteMany({}); // Optional: clean old data
    await Profile.insertMany(allprofiles);
    console.log("Profiles inserted successfully!");
    mongoose.connection.close(); // Close connection
  } catch (err) {
    console.log("Error inserting profiles:", err);
  }
}
