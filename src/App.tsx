import React from "react";
import FifthPage from "./components/FifthPage";
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
      <FifthPage />
    </div>
  );
}

export default App;
