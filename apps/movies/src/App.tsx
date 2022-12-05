import React from "react";
import { AppShell } from "ui";

function App() {
  return (
    <AppShell
      title="Movies"
      colorScheme="dark"
      routes={[{ path: "/", element: () => <div>home</div> }]}
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
