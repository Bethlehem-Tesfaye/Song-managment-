import React from "react";
import SongLists from "./componets/SongList/SongLists.jsx";
import NavBar from "./componets/NavBar/NavBar.jsx";
import { useSelector } from "react-redux";
import { Global, css } from "@emotion/react";

function App() {
  const { isDark } = useSelector((state) => state.theme);
  return (
    <div>
      <Global
        styles={css`
          html,
          body,
          #root {
            height: 100%;
            margin: 0;
            background-color: ${isDark ? "#000000" : ""};
          }
        `}
      />
      <NavBar />
      <SongLists />
    </div>
  );
}

export default App;
