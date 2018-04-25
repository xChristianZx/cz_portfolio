import React from "react";
import "./PortfolioItem.css";

const PortfolioItem = ({ project }) => {
  const { link, name, src, github, description } = project;
  return (
    <li className="collection-item">
      <img className="item-image" src={src} alt={name} />
      <div className="item-content">
        <h1 className="">{name}</h1>
        <p>{description}</p>
        <div className="item-links-container">
          <a href={link} target="_blank" rel="noopener noreferrer">
            Demo
          </a>
          <a href={github} target="_blank" rel="noopener noreferrer">
            Src Code
          </a>
        </div>
      </div>
    </li>
  );
};

export default PortfolioItem;
