import React, { Component } from "react";
import "../styles/style.sass";

class PortfolioItem extends Component {
  render() {
    return (
      <div class="portfolio-item">
        <div class="portfolio-item-img" href={} />
        <div class="portfolio-item-text">
          <p class="portfolio-item-section">{this.props.section}</p>
          <p class="portfolio-item-title">{this.props.name}</p>
          <p class="portfolio-item-description">{this.props.description}</p>
          <div class="portfolio-item-view-div">
            <a class="portfolio-item-view" href="#">
              View
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default PortfolioItem;
