import React from "react";

import Container from "./components/Container";
import { AppContextProvider } from "./context/AppContext/appContext";

import "./styles/style.css";

const App: React.FC = () => {
  return (
    <AppContextProvider>
      <Container />
    </AppContextProvider>
  );
};

export default App;
