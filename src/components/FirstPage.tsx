import React from "react";
import Background from "../images/Vector.png";
const FirstPage: React.FC = () => {
  return (
    <div
      style={{ backgroundImage: `url(${Background})` }}
      className="bg-center h-screen pt-8 bg-cover"
    >
      <div></div>
    </div>
  );
};

export default FirstPage;
