import React from "react";
import FirstPage from "./components/FirstPage";
import Navbar from "./components/Navbar";
import SecondPage from "./components/SecondPage";

const App: React.FC = () => {
  return (
    <div>
      <Navbar />
      <FirstPage />
      <SecondPage />
    </div>
  );
}

export default App;
