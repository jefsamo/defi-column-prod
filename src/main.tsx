import { MantineProvider } from "@mantine/core";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { StoriesContextProvider } from "./contexts/stories_context";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <MantineProvider>
      <StoriesContextProvider>
        <App />
      </StoriesContextProvider>
    </MantineProvider>
  </React.StrictMode>
);
