import "@shoelace-style/shoelace/dist/themes/light.css";
import { setBasePath } from "@shoelace-style/shoelace/dist/utilities/base-path.js";
setBasePath(
  "https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.20.1/cdn/",
);

import "./App.css";
import Header from "./components/Header";
import SongGrid from "./features/repertoire/components/SongGrid";
import AddFloatingButton from "./features/repertoire/components/AddFloatingButton";
import AddSongForm from "./features/repertoire/components/AddSongForm";
function App() {
  return (
    <>
      <AddSongForm/>

      {/* <Header />
      <SongGrid />
      <div className="floating-btn-container">
        <AddFloatingButton />
      </div> */}
    </>
  );
}

export default App;
