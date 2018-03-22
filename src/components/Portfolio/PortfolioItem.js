import React from "react";
import "./Portfolio.css";

const PortfolioItem = ({ project }) => {
  return (
    <li className="collection-item">
      <a href={project.link} target="_blank">
        {project.name}
        <img className="item-image" src={project.src} alt={project.name} />
      </a>
    </li>
  );
};

export default PortfolioItem;
