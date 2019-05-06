import React, { Component } from "react";
import "../styles/style.sass";

import PortfolioItem from "../components/PortfolioItem";

class Portfolio extends Component {
  // initialize our state
  state = {
    data: [],

    Name: null,
    Description: null,
    Section: null,
    Display: null,
    ThumbnailImage: null,
    Image: null,

    intervalIsSet: false,
    idToDelete: null,
    idToUpdate: null,
    objectToUpdate: null
  };

  // // when component mounts, first thing it does is fetch all existing data in our db
  // // then we incorporate a polling logic so that we can easily see if our db has
  // // changed and implement those changes into our UI
  componentDidMount() {
    this.getDataFromDb();
    if (!this.state.intervalIsSet) {
      let interval = setInterval(this.getDataFromDb, 1000);
      this.setState({ intervalIsSet: interval });
    }
  }

  // // never let a process live forever
  // // always kill a process everytime we are done using it
  componentWillUnmount() {
    if (this.state.intervalIsSet) {
      clearInterval(this.state.intervalIsSet);
      this.setState({ intervalIsSet: null });
    }
  }

  // // just a note, here, in the front end, we use the id key of our data object
  // // in order to identify which we want to Update or delete.
  // // for our back end, we use the object id assigned by MongoDB to modify
  // // data base entries

  // // our first get method that uses our backend api to
  // // fetch data from our data base
  // run on port 80
  getDataFromDb = () => {
    // console.log("Getting data");
    fetch("http://134.209.68.151:4000/api/getData")
      .then(data => data.json())
      .then(res => this.setState({ data: res.data }));
    // console.log("Got data");
  };

  render() {
    const { data } = this.state;
    // console.log(data);
    return (
      <div className="portfolio">
        {data.length <= 0
          ? "NO DB ENTRIES YET"
          : data.map(dat => <PortfolioItem key={dat.ID} dat={dat} />)}
      </div>
    );
  }
}

export default Portfolio;
