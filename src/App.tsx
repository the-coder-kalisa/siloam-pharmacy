import React, { useEffect, useState } from "react";
import FifthPage from "./components/FifthPage";
import FirstPage from "./components/FirstPage";
import FouthPage from "./components/FouthPage";
import Navbar from "./components/Navbar";
import SecondPage from "./components/SecondPage";
import ThirdPage from "./components/ThirdPage";
import Rect from "./images/Rect.png";
import None from "./images/none.png";
import Foot from "./images/foot.png";
import Background from "./images/Vector.png";
import background from "./images/screen.png";
import { CircularProgress } from "@mui/material";
const App: React.FC = () => {
  const [loading, setLoading] = useState<Boolean>(true);
  useEffect(() => {
    let img = new Image();
    img.onload = () =>{
      let img2 = new Image();
      img2.onload = () =>{
        let img3 = new Image();
        img3.onload = () =>{
          let img4 = new Image();
          img4.onload = () =>{
            let img5 = new Image();
            img5.onload = () =>{
              setLoading(false);
            }
            img5.src = Rect;
          }
          img4.src = None;
        }
        img3.src = Foot;
      }
      img2.src = background;
    }
    img.src = Background;
  }, []);

  return (
    <div className={`${loading ? "h-[100vh] flex items-center justify-center" : ""}`}>
      {loading ? (
        <CircularProgress />
      ) : (
        <>
          <Navbar />
          <FirstPage />
          <SecondPage />
          <ThirdPage />
          <FouthPage />
          <FifthPage />
        </>
      )}
    </div>
  );
};

export default App;
