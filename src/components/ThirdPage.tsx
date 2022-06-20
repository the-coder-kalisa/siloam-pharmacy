import React from "react";

const ThirdPage: React.FC = () => {
  interface Parag {
    title: string;
    param: string;
  }
  const paras: Parag[] = [
    {
      title: "Online Job",
      param: `Lorem ipsum dolor sit amet, 
               consectetur adipiscing elit.
              Curabitur velvelit quis felis 
              fermentum blandit a sed diam.`,
    },
    {
      title: "Online Job",
      param: `Lorem ipsum dolor sit amet, 
               consectetur adipiscing elit.
              Curabitur velvelit quis felis 
              fermentum blandit a sed diam.`,
    },
    {
      title: "Online Job",
      param: `Lorem ipsum dolor sit amet, 
               consectetur adipiscing elit.
              Curabitur velvelit quis felis 
              fermentum blandit a sed diam.`,
    },
    {
      title: "Online Job",
      param: `Lorem ipsum dolor sit amet, 
               consectetur adipiscing elit.
              Curabitur velvelit quis felis 
              fermentum blandit a sed diam.`,
    },
    {
      title: "Online Job",
      param: `Lorem ipsum dolor sit amet, 
               consectetur adipiscing elit.
              Curabitur velvelit quis felis 
              fermentum blandit a sed diam.`,
    },
    {
      title: "Online Job",
      param: `Lorem ipsum dolor sit amet, 
               consectetur adipiscing elit.
              Curabitur velvelit quis felis 
              fermentum blandit a sed diam.`,
    },
  ];
  return (
    <div id="services" className="flex flex-col items-center">
      <h1 className="text-center font-bold text-3xl">Get our best services</h1>
      <div className="text-center max-w-[40rem] font-semibold text-gray-600 text-lg py-3">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident et
        ipsam porro nesciunt laboriosam repellat rerum, fuga molestias
      </div>
      <div
        className="grid pb-14 pt-5 px-3 gap-5"
        style={{ gridTemplateColumns: "repeat(auto-fit, minmax(22rem, 1fr))"}}
      >
        {paras.map((para, index) => (
          <div key={index} className="bg-[#228E9C] rounded-md shadow-lg text-white flex flex-col items-center justify-center py-8 px-14 gap-5">
            <h2 className="text-3xl font-bold">{para.title}</h2>
            <p className="text-xl font-medium">{para.param}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ThirdPage;
