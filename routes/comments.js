const express = require("express");
const router = express.Router();
const Comments = require("../models/comments");
const moment = require("moment");

router.get("/", async (req, res) => {
  const comments = await Comments.find();
  res.send(comments);
});

router.post("/postComment", async (req, res) => {
  const timeElapsed = Date.now();
  const today = moment(timeElapsed).format("dddd, MMMM Do YYYY, h:mm:ss a");

  let comment = new Comments({
    content: req.body.content,
    timeOfPublich: today,
    idPost: req.body.idPost,
    owner: req.body.owner,
    idOwner: req.body.idOwner,
  });
  await comment.save();
  res.send(comment);
});

router.get("/:id", async (req, res) => {
  const comment = await Comments.find({ idPost: req.params.id });
  if (!comment) {
    return res.status(404).send("The genre with the given ID was not found.");
  }

  res.send(comment);
});
module.exports = router;
