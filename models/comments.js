const mongoose = require("mongoose");

const commentsSchema = new mongoose.Schema({
  content: {
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
  idPost: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Comments", commentsSchema);
