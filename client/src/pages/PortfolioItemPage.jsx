import React, { Component } from "react";
import "../styles/style.sass";

class PortfolioItemPage extends Component {
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

  getDataFromDb = () => {
    // console.log("Getting data");
    fetch("http://134.209.68.151:4000/api/getData")
      .then(data => data.json())
      .then(res => this.setState({ data: res.data }));
    // console.log("Got data");
  };

  render() {
    const { data } = this.state;
    let id = this.props.match.params.id;
    var thedata = data.find(element => {
      return element.ID == id;
    });
    if (thedata) {
      // console.log(this.props.dat.Image);
      return (
        <div className="portitem">
          <h4 className="portitem-section">{thedata.Section}</h4>
          <h3 className="portitem-name">{thedata.Name}</h3>
          <img
            className="portitem-img"
            alt={thedata.Name}
            src={"http://134.209.68.151:4000" + thedata.Image}
          />
          <p className="portitem-desc">{thedata.Description}</p>
        </div>
      );
    } else {
      return <div>Loading...</div>;
    }
  }
}

export default PortfolioItemPage;
