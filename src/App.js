import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import GalleryNavigation from "./components/GalleryNavigation";
import GalleryView from "./components/GalleryView";
import harvardArt from "./data/harvardArt"; // Ensure this is correctly imported

function App() {
  return (
    <Router>
      <div className="page-wrapper">
        <GalleryNavigation galleries={harvardArt.records} />
        <Switch>
          <Route
            path="/galleries/:galleryId"
            element={<GalleryView galleries={harvardArt.records} />}
          />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
