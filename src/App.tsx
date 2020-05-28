import React from "react";
import Container from "./components/Container";
import { AppContextProvider } from "./context/AppContext/appContext";

const App: React.FC = () => {
  return (
    <AppContextProvider>
      <Container />
    </AppContextProvider>
  );
};

export default App;
