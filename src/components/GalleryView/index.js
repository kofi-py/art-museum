import React from "react";
import { useParams } from "react-router-dom";

const GalleryView = ({ galleries }) => {
  const { galleryId } = useParams();
  console.log("Gallery ID from URL:", galleryId);

  return <h1>Hello from GalleryView</h1>;
};

export default GalleryView;
