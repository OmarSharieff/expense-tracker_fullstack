import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { GlobalProvider } from "./context/globalContext";
import { GlobalStyle } from "./styles/GlobalStyle";
import { BrowserRouter } from "react-router-dom";
import { ClerkProvider } from "@clerk/clerk-react";

// Importing the Clerk publishable key from the environment variables
const PUBLISHABLE_KEY = "pk_test_YW11c2luZy1oeWVuYS04Mi5jbGVyay5hY2NvdW50cy5kZXYk";

if (!PUBLISHABLE_KEY) {
  throw new Error(
    "Missing Publishable Key. Please set the VITE_CLERK_PUBLISHABLE_KEY environment variable."
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <GlobalProvider>
      <BrowserRouter>
        <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
          <App />
        </ClerkProvider>
      </BrowserRouter>
    </GlobalProvider>
  </React.StrictMode>
);
