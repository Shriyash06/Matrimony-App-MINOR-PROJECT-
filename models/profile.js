const mongoose = require("mongoose");

const ProfileSchema = new mongoose.Schema({
  img: {
    type: String
  },
  name: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true
  },
  profession: {
    type: String,
    required: true    // ✅ fixed typo here
  },
  Cast: {
    type: String,
    required: true
  },
  religion: {
    type: String,
    required: true    // ✅ fixed typo here
  },
  city: {
    type: String,
    required: true
  },
  salary: {
    type: String,
    required: true
  }
});

const Profile = mongoose.model("Profile", ProfileSchema);
module.exports = Profile;
