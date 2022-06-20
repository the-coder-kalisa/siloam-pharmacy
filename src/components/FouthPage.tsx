import React from "react";
import background from "../images/screen.png";
const FouthPage: React.FC = () => {
  interface Pross {
    title: string | number;
    para: string;
  }
  const paragra: Pross[] = [
    { title: "500+", para: "Patients" },
    { title: "24/7", para: " Working time" },
    { title: "20+", para: "Experienced Doctors" },
    { title: 5, para: "Years of experience" },
  ];
  return (
    <div
      style={{ background: `url(${background})` }}
      
      className="w-full flex items-center bg-center bg-cover bg-no-repeat text-white h-[10rem] justify-between px-[10rem]"
    >
      {paragra.map((par, index) => (
        <div key={index} className="flex flex-col items-center">
          <h1 className="font-bold text-2xl">{par.title}</h1>
          <p className="font-medium text-lg">{par.para}</p>
        </div>
      ))}
    </div>
  );
};

export default FouthPage;
