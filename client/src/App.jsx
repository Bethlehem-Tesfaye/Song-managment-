import React from "react";
import SongLists from "./componets/SongList/SongLists.jsx";
import NavBar from "./componets/NavBar/NavBar.jsx";
import SongForm from "./componets/SongForm/SongForm.jsx";

function App() {
  return (
    <div>
      <NavBar />
      <SongLists />
      {/* <SongForm/> */}
    </div>
  );
}

export default App;
