// /backend/data.js
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// data base's data structure
const DataSchema = new Schema(
  {
    ID: {
      type: Number
    },
    Name: {
      type: String
    },
    Description: {
      type: String
    },
    Section: {
      type: String
    },
    Display: {
      type: Boolean
    },
    ThumbnailImage: {
      type: String
    },
    Image: {
      type: String
    }
  },
  { timestamps: true }
);

// export the new Schema so we could modify it using Node.js
module.exports = mongoose.model("Data", DataSchema);
