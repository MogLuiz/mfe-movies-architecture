import React from "react";
import { AppShell } from "ui";

function App() {
  return (
    <AppShell
      title="Movies"
      colorScheme="dark"
      routes={[
        { path: "/", element: () => <div>home</div> },
        { path: "/playlist", element: () => <div>playlist</div> },
      ]}
      navLinks={[
        {
          label: "Home",
          path: "/",
        },
        {
          label: "Playlist",
          path: "/playlist",
        },
      ]}
    />
  );
}

export default App;
