const mongoose = require('mongoose');
var Data = mongoose.model("Data");

var small = new Data({
  ID: 1,
  Name: "Test Name 1",
  Description: "Test description 1",
  Section: "Test Section 1",
  Display: true,
  ThumbnailImage: "/img/app-football.jpg",
  Image: "/img/laz-charlotte.jpg"
});
small.save(function(err) {
  if (err) return handleError(err);
  // saved!
});

// or

Data.create(
  {
    ID: 2,
    Name: "Test Name 2",
    Description: "Test description 2",
    Section: "Test Section 2",
    Display: true,
    ThumbnailImage: "/img/app-football.jpg",
    Image: "/img/laz-charlotte.jpg"
  },
  function(err, small) {
    if (err) return handleError(err);
    // saved!
  }
);

Data.create(
  [
    {
      ID: 3,
      Name: "Test Name 3",
      Description: "Test description 3",
      Section: "Test Section 3",
      Display: true,
      ThumbnailImage: "/img/app-football.jpg",
      Image: "/img/laz-charlotte.jpg"
    }
  ],
  function(err) {}
);
