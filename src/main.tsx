import { MantineProvider } from "@mantine/core";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { AuthContextProvider } from "./contexts/auth_context";
import { StoriesContextProvider } from "./contexts/stories_context";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <MantineProvider>
      <AuthContextProvider>
        <StoriesContextProvider>
          <App />
        </StoriesContextProvider>
      </AuthContextProvider>
    </MantineProvider>
  </React.StrictMode>
);
