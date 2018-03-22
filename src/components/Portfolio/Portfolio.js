import React from "react";
import "./Portfolio.css";
import PortfolioItem from "./PortfolioItem/PortfolioItem";
import projects from "../../Assets/projects";

const Portfolio = () => {
  const portfolioItemList = projects.map(item => {
    return (
      <PortfolioItem
        className="collection-item"
        key={item.name}
        project={item}
      />
    );
  });

  return (
    <div className="portfolio-wrapper">
      <div className="header-container">
        <h1>Portfolio</h1>
        <h4>A collection of some of my work</h4>
      </div>
      <div className="collection-container">
        <ul>{portfolioItemList}</ul>
      </div>
    </div>
  );
};

export default Portfolio;
