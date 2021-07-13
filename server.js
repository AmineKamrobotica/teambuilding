const mongoose = require("mongoose");
const express = require("express");
const app = express();
const apiUser = require("./routes/user");
const apiBuilding = require("./routes/addBuilding");
const apiComments = require("./routes/comments");

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Methods",
    "GET,HEAD,OPTIONS,POST,PUT,DELETE"
  );
  res.header(
    "Access-Control-Allow-Headers",
    "x-www-form-urlencoded,Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  next();
});
mongoose
  .connect("mongodb://localhost/teambuilding", {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log("connect to db");
  })
  .catch((err) => {
    console.log("problem to connect to data base ", err);
  });

app.use(express.json());

app.use("/comments", apiComments);
app.use("/user", apiUser);
app.use("/building", apiBuilding);

app.use(express.static("./src/assets/images/upload"));
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
