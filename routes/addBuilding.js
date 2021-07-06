const express = require("express");
const router = express.Router();
const app = express();
const addBuilding = require("../models/addBuilding");
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
  const addBuild = await addBuilding.find({ idUserPoster: req.params.id });
  res.send(addBuild);
});

var storage = multer.diskStorage({
  destination: "../../teambuilding/upload",
  filename: function(req, file, cb) {
    cb(null, file.originalname);
  },
});
const upload = multer({ storage: storage }).array("image");

router.post("/postBuilding", upload, async (req, res) => {
  console.log(req.file);
  const timeElapsed = Date.now();
  const today = new Date(timeElapsed);
  
  let addbuild = new addBuilding({
    title: req.body.title,
    location: req.body.location,
    description: req.body.description,
    date: req.body.date,
    time: req.body.time,
    timeOfPublich: today.toDateString(),
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
/* 
router.put("/:id", async (req, res) => {
  const genre = await Covoiturage.findByIdAndUpdate(req.params.id, {
    depart: req.body.depart,
    arrive: req.body.arrive,
    new: true,
  });

  if (!genre)
    return res.status(404).send("The genre with the given ID was not found.");
  res.send(genre);
});

 */
module.exports = router;
