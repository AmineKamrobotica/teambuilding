const mongoose = require("mongoose");

const memoriesSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: false,
  },
  image: {
    type: Array,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  timeOfPublich: {
    type: String,
    required: true,
  },
  owner: {
    type: String,
    required: true,
  },
  idOwner: {
    type: String,
    required: true,
  },
 
  comments: {
    type: Array,
    required: false,
  },
});

module.exports = mongoose.model("addMemories", memoriesSchema);
