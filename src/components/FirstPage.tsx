import React from "react";
import Background from "../images/Vector.png";
function FirstPage() {
  return (
    <div
      style={{ backgroundImage: `url(${Background})` }}
      className="bg-center h-screen pt-8 bg-cover"
    >
      FirstPage
    </div>
  );
}

export default FirstPage;
