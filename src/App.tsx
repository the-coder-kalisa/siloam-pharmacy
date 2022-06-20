import React from "react";
import FirstPage from "./components/FirstPage";
import Navbar from "./components/Navbar";

const App: React.FC = () => {
  return (
    <div className="">
      <Navbar />
      <FirstPage />
    </div>
  );
}

export default App;
