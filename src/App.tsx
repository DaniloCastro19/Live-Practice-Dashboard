import "@shoelace-style/shoelace/dist/themes/light.css";
import { setBasePath } from "@shoelace-style/shoelace/dist/utilities/base-path.js";
setBasePath(
  "https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.20.1/cdn/",
);

import "./App.css";
import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";

const SongGridComponent = lazy(
  () => import("./features/repertoire/components/SongGrid"),
);
const AddSongFormComponent = lazy(
  () => import("./features/repertoire/components/AddSongForm"),
);
const PracticeTrackerComponent = lazy(
  () => import("./features/practice/components/PracticeTracker"),
);

function App() {
  return (
    <Suspense fallback="Loading">
      <Header />
      <Routes>
        <Route path="/" element={<SongGridComponent />} />
        <Route path="/addSong" element={<AddSongFormComponent />} />
        <Route path="/liveSession/:songId" element={<PracticeTrackerComponent />} />
      </Routes>
    </Suspense>
  );
}

export default App;
