import React from "react";
import Rect from "../images/Rect.png";
import Foot from "../images/foot.png";
import Svg from "./Svg"
import { FacebookOutlined, Instagram, Twitter } from "@mui/icons-material";
const FifthPage: React.FC = () => {
  interface Bots {
    title: string;
    bols: string[];
  }
  const bots: Bots[] = [
    { title: "Siloam Pharmacy", bols: ["Kigali, Rwanda", "+25070015561"] },
    { title: "Pages", bols: ["About", "Services", "Testimonials"] },
    {
      title: "Learn More",
      bols: [
        "Plans and pricing",
        "Tips and Tricks",
        "Plugins and apps",
        "Legal /Privacy ",
      ],
    },
  ];
  return (
    <>
      <div className="flex flex-col items-center pt-10">
        <h1 className="text-center font-bold text-3xl">
          Get a quick demo of the app
        </h1>
        <div className="text-center max-w-[50rem] font-semibold text-gray-600 text-xl py-5">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident et
          ipsam porro nesciunt laboriosam repellat rerum, fuga molestias
        </div>
        <img src={Rect} alt="react" className="my-10" />
      </div>
      <div
        style={{ backgroundImage: `url(${Foot})` }}
        className="bg-cover bg-center w-full flex items-center text-white flex-col bg-no-repeat"
      >
        <div className="flex gap-10">
          {bots.map(({ title, bols }, index) => (
            <div className="flex flex-col gap-4" key={index}>
              <h1 className="font-bold text-2xl max-w-[10rem]">{title}</h1>
              <div className="flex flex-col gap-2">
                {bols.map((bol, index) => (
                  <div key={index}>{bol}</div>
                ))}
              </div>
            </div>
          ))}
          <div>
            <div>
              <Instagram />
              <FacebookOutlined />
              <Twitter />
            </div>
            <div>
                <span>Get the app:</span>
                <div>
                    <Svg />
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FifthPage;
