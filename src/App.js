import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import GalleryNavigation from "./components/GalleryNavigation";
import GalleryView from "./components/GalleryView";
import harvardArt from "./data/harvardArt"; // Ensure correct import

function App() {
  return (
    <BrowserRouter>
      <GalleryNavigation galleries={harvardArt.records} />
      <Route path="/" element={<h2>Welcome to the Harvard Art Museum</h2>} />
      <Route path="/galleries/:galleryId" element={<GalleryView />} />
    </BrowserRouter>
  );
}

export default App;
