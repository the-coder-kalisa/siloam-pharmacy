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
      style={{ backgroundImage: `url(${Background})` }}
      className="bg-center pt-20 pb-[7rem] flex items-start text-white bg-cover"
    >
      <div className="max-w-[45rem] flex flex-col gap-14 mt-14 px-10">
        <div className="text-2xl text-[#E5E5E5]">
          We work to take care of your lives.
        </div>
        <div className="font-bold text-5xl">
          Be patient with patients who are not patient.
        </div>
        <div className="text-2xl max-w-[25rem] text-[#E5E5E5]">
          Just tell us what you're suffering from and let us cure your.
        </div>
        <div className="flex gap-4">
          {buttons.map((button) => (
            <Button
              style={{
                textDecoration: "uppercase",
                color: "white",
                border: "2px solid white",
                padding: "10px 30px",
                fontSize: "1.2rem",
                borderRadius: 10,
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
