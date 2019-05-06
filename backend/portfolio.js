const mongoose = require("mongoose");
var Data = mongoose.model("Data");

var small = new Data({
  ID: 1,
  Name: "RaysWeather App",
  Description:
    "Here is the newest RaysWeather.Com app design. I spent a lot of time working on the format and placement of the items to best help users find what they are looking for. There was a special attention to detail so that users of all ages could navigate the app. I designed and prototyped the app and pitched it to the owner of RaysWeather, Dr. Ray Russell. In addition to the design, I am also developing the app with RaysWeather. After year one, I sat back down and did a second redesign of the app. This second redesign allows RaysWeather to split items up into a full version and a lite version of the app.",
  Section: "UX Design",
  Display: true,
  ThumbnailImage: "/img/1-1.jpg",
  Image: "/img/1.jpg"
});
small.save(function(err) {
  if (err) return handleError(err);
  // saved!
});

// or

Data.create(
  {
    ID: 2,
    Name: "Blue Ridge Parkway Calendar",
    Description:
      "In 2017 I was asked to work with RaysWeather to judge photos from the Blue Ridge Parkway Calendar Contest. In addition to judging photos, I was asked to design the 2017 Blue Ridge Parkway Calendar. During this project, I spent time researching other successful calendars, reviewing previous Blue Ridge Parkway Calendars, and working on the UI for a new version that felt more modern to customers. In 2018, I was brought back to judge photos and lead the project. I spent an increasing amount of time on the 2018 Blue Ridge Parkway Calendar design to remap items so that customers could get more information at a glance. The photos selected are from all along the Blue Ridge Parkway and were carefully selected to match the months that they were connected with.",
    Section: "Print Design",
    Display: true,
    ThumbnailImage: "/img/2-1.jpg",
    Image: "/img/2.jpg"
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
      Name: "App State Football Logos",
      Description:
        "In 2017, I was brought onto App State Football as the only graphic designer to help rebuild the programs graphic connection and market the program to future talented players. During the 2017 season, I participated in a number of events and provided an assortment of graphics to the team as well as managed the @AppState_FB accounts on Instagram and Twitter. With tens of thousands of followers, my work was consistently in the public eye. In 2018, I worked with Appalachian State University Athletics to led an effort to rebrand the department. With this, I gave new characteristics to the program. In addition to the graphics, I crafted many logos such as the ones here. These logos were used for marketing, advertising, and a number of other things that helped promote the department’s overall success with the football program. I continue my efforts at Appalachian State University Football as the Lead Creative Designer.",
      Section: "Logo Design",
      Display: true,
      ThumbnailImage: "/img/3-1.jpg",
      Image: "/img/3.jpg"
    }
  ],
  function(err) {}
);

Data.create(
  [
    {
      ID: 4,
      Name: "Northwest RESA",
      Description:
        "This is a website that I designed and helped develop for Northwest Regional Educational Service Alliance, a non-profit educational training organization based out of Wilkesboro, NC. During this process, I sat down with the NWRESA organization and mapped out a design and rebrand that best suited what they were pushing to do. I spent a lot of time in Adobe XD wire framing and prototyping design situations and user flows for the organization to review. I worked with a colleague of mine to develop the site using Wordpress. Using a boilerplate, I completed a front-end design that allowed for my colleague to connect it to the backend where we could store customer information regarding class registration.",
      Section: "UX Design",
      Display: true,
      ThumbnailImage: "/img/4-1.jpg",
      Image: "/img/4.jpg"
    }
  ],
  function(err) {}
);

Data.create(
  [
    {
      ID: 5,
      Name: "Gurney's Personal Portfolio",
      Description:
        "A colleague and personal friend of mine was looking to create a portfolio to help showcase if development work. I worked closely with him to come up with two different designs that he could use as his portfolio website.",
      Section: "UX Design",
      Display: true,
      ThumbnailImage: "/img/5-1.jpg",
      Image: "/img/5.jpg"
    }
  ],
  function(err) {}
);

Data.create(
  [
    {
      ID: 6,
      Name: "King & College",
      Description:
        "King & College is a new apartment complex in Boone, NC. I work for an agency, Lazarus Design Team, who specializes in company rebranding and website design/development. Through Lazarus, I designed a logo for King & College to use for their apartment complex.",
      Section: "Logo Design",
      Display: true,
      ThumbnailImage: "/img/6-1.jpg",
      Image: "/img/6.jpg"
    }
  ],
  function(err) {}
);

Data.create(
  [
    {
      ID: 7,
      Name: "The App Lab",
      Description:
        "Appalachian State University hosted a competition to design a logo for their new Maker-space on campus. I participated and provide this logo to their competition. I did not win the contest, however I received praise for my work and time spent.",
      Section: "Logo Design",
      Display: true,
      ThumbnailImage: "/img/7-1.jpg",
      Image: "/img/7.jpg"
    }
  ],
  function(err) {}
);

Data.create(
  [
    {
      ID: 8,
      Name: "Mountain Paradise",
      Description:
        "This was a small graphic design project I created to showcase my illustration work and attention to detail. Mountain Paradise is a representation of my view of an idea mountain landscape and what it feels like to live in Boone, NC.",
      Section: "Graphic Design",
      Display: true,
      ThumbnailImage: "/img/8-1.jpg",
      Image: "/img/8.jpg"
    }
  ],
  function(err) {}
);

Data.create(
  [
    {
      ID: 9,
      Name: "Restore",
      Description:
        "This is a logo project I worked on for a startup organization in Boone, NC. Restore is an organization that recycles trash and transforms the trash into works of art that can be put on display or purchased by art enthusiasts. I spent time working with the leader of the organization to produce something that brought that artist culture to the town of Boone, NC and gave an example of the work they were capable of. There was a request to use water colors in the logo so I spent a lot of time perfecting the watercolor aspect.",
      Section: "Graphic Design",
      Display: true,
      ThumbnailImage: "/img/9-1.jpg",
      Image: "/img/9.jpg"
    }
  ],
  function(err) {}
);

Data.create(
  [
    {
      ID: 10,
      Name: "Happy Scoops",
      Description:
        "A startup company in downtown Boone, NC called “hAPPy scoops” requested for me to make an illustration style logo for their company. They sell ice cream out of an ice cream truck and wanted to cater to the Appalachian State student culture. The emphases on APP is built right into the logo while the truck and ice cream illustration makes it easy to understand what the company does.",
      Section: "UX Design",
      Display: true,
      ThumbnailImage: "/img/10-1.jpg",
      Image: "/img/10.jpg"
    }
  ],
  function(err) {}
);

Data.create(
  [
    {
      ID: 11,
      Name: "App State VGDC",
      Description:
        "A new club at Appalachian State University, App State Video Game Development Club, asked me to work on a logo for them that they could use for advertisements and merchandise. After many iterations, we decided that this video game controller with a coffee mug inside was the direction they wanted to go. The final product as see here is what they currently use around campus for their club.",
      Section: "Logo Design",
      Display: true,
      ThumbnailImage: "/img/11-1.jpg",
      Image: "/img/11.jpg"
    }
  ],
  function(err) {}
);

Data.create(
  [
    {
      ID: 12,
      Name: "Snapchat Geofilters",
      Description:
        "A side project of mine was to work on a new Snapchat Geofilter for Boone, NC. I wanted to understand how the process went and understand what it takes to become a geofilter. This design was the creation that I submitted to Snapchat and is now in use. If you come to Boone, NC, open up the Snapchat app and see fi you can spot this geofilter!",
      Section: "Graphic Design",
      Display: true,
      ThumbnailImage: "/img/12-1.jpg",
      Image: "/img/12.jpg"
    }
  ],
  function(err) {}
);
