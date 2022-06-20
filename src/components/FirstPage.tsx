import { Button } from "@mui/material";
import React from "react";
import Background from "../images/Vector.png";
const FirstPage: React.FC = () => {
  interface button {
    name: String;
    path: string;
  }
  const buttons: button[] = [
    { name: "get started", path: "/dashboard" },
    { name: "get the app", path: "/app" },
  ];
  return (
    <div
      id="home"
      style={{ backgroundImage: `url(${Background})` }}
      className="bg-center pt-[8rem] pb-[7rem] px-14 flex items-start text-white bg-cover"
    >
      <div className="flex gap-24 flex-col">
        <div className="flex flex-col gap-7">
          <div className="text-2xl text-[#E5E5E5]">
            We work to take care of your lives.
          </div>
          <div className="font-bold text-5xl max-w-[40rem]">
            Be patient with patients who are not patient.
          </div>
          <div className="text-2xl max-w-[25rem] text-[#E5E5E5]">
            Just tell us what you're suffering from and let us cure your.
          </div>
        </div>
        <div className="flex gap-4">
          {buttons.map((button, index) => (
            <Button
              key={index}
              style={{
                textDecoration: "uppercase",
                color: "white",
                border: "2px solid white",
                padding: "10px 30px",
                fontSize: "1.2rem",
                borderRadius: 10,
                background: "transparent",
              }}
              variant="outlined"
            >
              {button.name}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FirstPage;
