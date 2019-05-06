import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../styles/style.sass";

class PortfolioItem extends Component {
  render() {
    return (
      <div className="portfolio-item">
        <div>
          <img
            className="portfolio-item-img"
            src={"http://134.209.68.151:4000" + this.props.dat.ThumbnailImage}
          />
        </div>
        <div className="portfolio-item-text">
          <p className="portfolio-item-section">{this.props.dat.Section}</p>
          <p className="portfolio-item-title">{this.props.dat.Name}</p>
          <p className="portfolio-item-description">
            {this.props.dat.Description}
          </p>
          <div className="portfolio-item-view-div">
            <Link
              className="portfolio-item-view"
              to={{
                pathname: `PortfolioItemPage/${this.props.dat.ID}`
              }}
            >
              View
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default PortfolioItem;
