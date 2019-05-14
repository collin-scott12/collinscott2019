const mongoose = require("mongoose");
const express = require("express");
var cors = require("cors");
const bodyParser = require("body-parser");
// const logger = require("morgan");
const path = require("path");

const API_PORT = 4000;
const app = express();
app.use(cors());
const router = express.Router();

// this is our MongoDB database
const dbRoute = "mongodb://localhost:27017/site";

// connects our back end code with the database
mongoose.connect(dbRoute, { useNewUrlParser: true });

let db = mongoose.connection;

db.once("open", () => console.log("connected to the database"));

// checks if connection with the database is successful
db.on("error", console.error.bind(console, "MongoDB connection error:"));

require("./data.js");
// require("./portfolio.js");
const Data = mongoose.model("Data");

// (optional) only made for logging and
// bodyParser, parses the request body to be a readable json format
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());
// app.use(logger("dev"));

// this is our get method
// this method fetches all available data in our database
router.get("/getData", (req, res) => {
  Data.find((err, data) => {
    if (err) return res.json({ success: false, error: err });
    // console.log(data);
    return res.json({ success: true, data: data });
  });
});

// this is our update method
// this method overwrites existing data in our database
router.post("/updateData", (req, res) => {
  const {
    ID,
    Name,
    Description,
    Section,
    Display,
    ThumbnailImage,
    Image
  } = req.body;
  Data.findOneAndUpdate(
    ID,
    Name,
    Description,
    Section,
    Display,
    ThumbnailImage,
    Image,
    err => {
      if (err) return res.json({ success: false, error: err });
      return res.json({ success: true });
    }
  );
});

// this is our delete method
// this method removes existing data in our database
router.delete("/deleteData", (req, res) => {
  const { ID } = req.body;
  Data.findOneAndDelete(ID, err => {
    if (err) return res.send(err);
    return res.json({ success: true });
  });
});

// this is our create method
// this method adds new data in our database
router.post("/putData", (req, res) => {
  let data = new Data();

  const {
    ID,
    Name,
    Description,
    Section,
    Display,
    ThumbnailImage,
    Image
  } = req.body;

  if (!ID && ID !== 0) {
    return res.json({
      success: false,
      error: "INVALID INPUTS"
    });
  }
  data.ID = ID;
  data.Name = Name;
  data.message = message;
  data.Description = Description;
  data.Section = Section;
  data.Display = Display;
  data.ThumbnailImage = ThumbnailImage;
  data.Image = Image;
  data.save(err => {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true });
  });
});

// append /api for our http requests
// console.log(path.join(__dirname, "../client/src/img/"));
app.use("/img", express.static(path.join(__dirname, "../client/src/img/")));
app.use("/api", router);

app.get("/*", function(req, res, next) {
  if (req.headers.host.match(/^www/) === null)
    res.redirect("http://www." + req.headers.host + req.url, 301);
  else next();
});

// launch our backend into a port
app.listen(API_PORT, () => console.log(`LISTENING ON PORT ${API_PORT}`));
