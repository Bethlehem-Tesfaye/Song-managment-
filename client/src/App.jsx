import React, { Suspense, lazy } from "react";
import { useSelector } from "react-redux";
import { Global, css } from "@emotion/react";

const SongLists = lazy(() => import("./componets/SongList/SongLists.jsx"));
const NavBar = lazy(() => import("./componets/NavBar/NavBar.jsx"));

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
      <Suspense fallback={<p>Loading NavBar...</p>}>
        <NavBar />
      </Suspense>

      <Suspense fallback={<p>Loading Songs...</p>}>
        <SongLists />
      </Suspense>
    </div>
  );
}

export default App;
