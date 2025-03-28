import React from "react";
import { useParams } from "react-router-dom";

const GalleryView = ({ galleries }) => {
  const { galleryId } = useParams();
  const gallery = galleries.find((g) => g.id.toString() === galleryId);

  console.log("Gallery Data:", gallery);

  return (
    <div>
      <h1>{gallery ? gallery.name : "Gallery Not Found"}</h1>
    </div>
  );
};

export default GalleryView;
