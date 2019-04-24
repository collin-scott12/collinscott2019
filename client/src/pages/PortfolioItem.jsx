import React, { Component } from 'react';
import '../styles/style.sass'

class PortfolioItem extends Component {
    render() {
        return (
            <div class="portfolio-item">
                <div class="portfolio-item-img"></div>
                <div class="portfolio-item-text">
                    <p class="portfolio-item-section">GRAPHIC DESIGN</p>
                    <p class="portfolio-item-title">App State Football</p>
                    <p class="portfolio-item-description">A quick description of this item...</p>
                    <div class="portfolio-item-view-div"><a class="portfolio-item-view" href="#">View</a></div>
                </div>
            </div>
        )
    }
}

export default PortfolioItem;
