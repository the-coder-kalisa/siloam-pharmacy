import React from "react";
import None from "../images/none.png"
const SecondPage: React.FC = () => {
  return (
    <div id="about" className="py-10 flex items-center flex-col">
      <h1 className="text-center font-bold text-3xl">About us</h1>
      <div className="text-center max-w-[40rem] font-semibold text-gray-600 text-lg py-3">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident et
        ipsam porro nesciunt laboriosam repellat rerum, fuga molestias
      </div>
      <div className="flex gap-14 items-center px-10 py-5">
        <div className="max-w-[28rem] text-xl"> 
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
          cupiditate repudiandae vero exercitationem velit nesciunt sint esse,
          ea eius eos voluptatem perspiciatis id neque non quia beatae aliquam
          distinctio officiis. Molestiae reiciendis voluptatum tenetur tempora
          alias quos doloribus explicabo quae magni reprehenderit molestias
          enim, temporibus, excepturi facilis quibusdam mollitia asperiores
          veniam sint veritatis. Omnis sint nobis blanditiis est non illum?
        </div>
        <img src={None} alt="none" className="max-w-[30rem]"/>
      </div>
    </div>
  );
};

export default SecondPage;
