import React from "react";
import FirstPage from "./components/FirstPage";
import FouthPage from "./components/FouthPage";
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
      <FouthPage />
    </div>
  );
}

export default App;
