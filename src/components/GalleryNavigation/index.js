import React from "react";
import { NavLink } from "react-router-dom";
import "./GalleryNavigation.css";

const GalleryNavigation = ({ galleries }) => {
  console.log(galleries); // Debugging

  return (
    <nav>
      <h1>Galleries</h1>
      <NavLink to="/" exact>
        Home
      </NavLink>
      {galleries.map((gallery) => (
        <NavLink key={gallery.id} to={`/galleries/${gallery.id}`}>
          {gallery.name}
        </NavLink>
      ))}
    </nav>
  );
};

export default GalleryNavigation;
