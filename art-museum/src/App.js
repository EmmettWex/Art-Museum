import harvardArt from "./data/harvardArt";
import GalleryNavigation from "./components/GalleryNavigation";

const galleries = GalleryNavigation(harvardArt.records)

function App() {
  return (
    <h1>Hello from App</h1>

  );
}

export default App;