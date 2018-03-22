import React from "react";
import "./Portfolio.css";

const arr = ["0", "1", "2", "3", "4", "5"];

const Portfolio = () => {
  return (
    <div className="portfolio-wrapper">
      <div className="header-container">
        <h1>Portfolio</h1>
        <h4>A collection of some of my work</h4>
      </div>
      <div className="collection-container">
        {arr.map(item => {
          return <div className="collection-item">{item}</div>;
        })}
      </div>
    </div>
  );
};

export default Portfolio;
