const express = require("express");
const router = express.Router();
const app = express();
const addBuilding = require("../models/addBuilding");
const Comments = require("../models/comments");
const multer = require("multer");
const moment = require("moment");
// const checkAuth = require("../middleware/check_auth");

router.get("/", async (req, res) => {
  const addBuild = await addBuilding.find();
  res.send(addBuild);
});
router.get("/:id", async (req, res) => {
  const addBuild = await addBuilding.findById(req.params.id);
  if (!addBuild) {
    return res.status(404).send("The genre with the given ID was not found.");
  }

  res.send(addBuild);
});
router.get("/owner/:id", async (req, res) => {
  const addBuild = await addBuilding.find({ idOwner: req.params.id });
  res.send(addBuild);
});

var storage = multer.diskStorage({
  destination: "src/assets/images/upload",
  filename: function(req, file, cb) {
    cb(null, file.originalname);
  },
});
const upload = multer({ storage: storage }).array("image");

router.post("/postBuilding", upload, async (req, res) => {
  console.log(req.file);
  const timeElapsed = Date.now();
  const today = moment(timeElapsed).format("dddd, MMMM Do YYYY, h:mm:ss a");

  let addbuild = new addBuilding({
    title: req.body.title,
    location: req.body.location,
    description: req.body.description,
    date: req.body.date,
    time: req.body.time,
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
    console.log("path is " + path);

    addbuild.image = path;
  }
  await addbuild.save();
  res.send(addbuild);
});
//delete post building
router.delete("/:id", async (req, res) => {
  const addbuild = await addBuilding.findByIdAndRemove(req.params.id);

  if (!addbuild)
    return res.status(404).send("The genre with the given ID was not found.");

  res.send(addbuild);
});

router.get("/location/:location", async (req, res) => {
  const location = await addBuilding.find({ location: req.params.location });
  if (!location) return res.status(404).send("The distination not found.");
  res.send(location);
});
//update vote value
router.put("/vote/:id", async (req, res) => {
  const vote = await addBuilding.findByIdAndUpdate(req.params.id, {
    vote: req.body.vote,
  });

  if (!vote)
    return res.status(404).send("The genre with the given ID was not found.");
  res.send(vote);
});
//update post building details values
router.put("/postBuilding/:id", async (req, res) => {
  const postBuilding = await addBuilding.findByIdAndUpdate(req.params.id, {
    time: req.body.time,
    description: req.body.description,
    location: req.body.location,
    date: req.body.date,
    title: req.body.title,
  });

  if (!postBuilding)
    return res.status(404).send("The genre with the given ID was not found.");
  res.send(postBuilding);
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
  const post = await addBuilding.findByIdAndUpdate(
    { _id: req.params.id },
    { $push: { comments: comment } }
  );

  if (!post)
    return res.status(404).send("The genre with the given ID was not found.");
  res.send(post);
});

module.exports = router;
