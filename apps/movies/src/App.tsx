import React from "react";
import { AppShell } from "ui";

function App() {
  return (
    <div>
      <AppShell
        title="Movies"
        colorScheme="dark"
        routes={[{ path: "/", element: () => <div>home</div> }]}
      />
    </div>
  );
}

export default App;
