import React from "react";
import "./PortfolioItem.css";

const PortfolioItem = ({ project }) => {
  const { link, name, src } = project;
  return (
    <li className="collection-item">
      <a href={link} target="_blank" rel="noopener noreferrer">
        <img className="item-image" src={src} alt={name} />
        <h3 className="item-name">{name}</h3>
      </a>
    </li>
  );
};

export default PortfolioItem;
