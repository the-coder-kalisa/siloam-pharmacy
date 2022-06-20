import React from "react";
import FirstPage from "./components/FirstPage";
import Navbar from "./components/Navbar";
import SecondPage from "./components/SecondPage";
import ThirdPage from "./components/ThirdPage";

const App: React.FC = () => {
  return (
    <div>
      <Navbar />
      <FirstPage />
      <SecondPage />
      <ThirdPage />
    </div>
  );
}

export default App;
