const express = require("express");
const router = express.Router();
const addMemories = require("../models/addMemories");
const Comments = require("../models/comments");
const multer = require("multer");
const moment = require("moment");
// const checkAuth = require("../middleware/check_auth");

router.get("/", async (req, res) => {
  const memories = await addMemories.find();
  res.send(memories);
});
router.get("/:id", async (req, res) => {
  const memories = await addMemories.findById(req.params.id);
  if (!memories) {
    return res.status(404).send("The genre with the given ID was not found.");
  }

  res.send(memories);
});
router.get("/owner/:id", async (req, res) => {
  const memories = await addMemories.find({ idOwner: req.params.id });
  res.send(memories);
});

var storage = multer.diskStorage({
  destination: "src/assets/images/upload",
  filename: function(req, file, cb) {
    cb(null, file.originalname);
  },
});
const upload = multer({ storage: storage }).array("image");

router.post("/postMemorie", upload, async (req, res) => {
  const timeElapsed = Date.now();
  const today = moment(timeElapsed).format("dddd, MMMM Do YYYY, h:mm:ss a");

  let memories = new addMemories({
    title: req.body.title,
    location: req.body.location,
    description: req.body.description,
    owner: req.body.owner,
    idOwner: req.body.idOwner,
    timeOfPublich: today,
    vote: req.body.vote,
  });
  if (req.files) {
    let path = [];
    req.files.forEach((files) => {
      path.push(files.filename);
    });
    memories.image = path;
  }
  await memories.save();
  res.send(memories);
});
//delete post building
router.delete("/:id", async (req, res) => {
  const memories = await addMemories.findByIdAndRemove(req.params.id);

  if (!memories)
    return res.status(404).send("The genre with the given ID was not found.");

  res.send(memories);
});
//update post building details values
router.put("/postMemorie/:id", async (req, res) => {
  const memories = await addMemories.findByIdAndUpdate(req.params.id, {
    description: req.body.description,
    location: req.body.location,
    title: req.body.title,
  });

  if (!memories)
    return res.status(404).send("The genre with the given ID was not found.");
  res.send(memories);
});

//comments
router.put("/comments/:id", async (req, res) => {
  const timeElapsed = Date.now();
  const today = moment(timeElapsed).format("dddd, MMMM Do YYYY, h:mm:ss a");
  let comment = new Comments({
    content: req.body.content,
    timeOfPublich: today,
    idPost: req.body.idPost,
    owner: req.body.owner,
    idOwner: req.body.idOwner,
  });
  const post = await addMemories.findByIdAndUpdate(
    { _id: req.params.id },
    { $push: { comments: comment } }
  );

  if (!post)
    return res.status(404).send("The genre with the given ID was not found.");
  res.send(post);
});

module.exports = router;
