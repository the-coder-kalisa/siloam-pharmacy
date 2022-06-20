import React, {useEffect, useState} from "react";
import { Button } from "@mui/material";
const Navbar:React.FC =()=> {
  const [scrolled, setScrolled] = useState<boolean>(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY >= 540 ? setScrolled(true) : setScrolled(false);
    })
  })
  useEffect(()=>{
    window.screenY >= 540 ? setScrolled(true) : setScrolled(false);
  },[])
  console.log(scrolled);
    const links: string[] = ["home","about", "services", "demostration"];
  return (
    <div
      className={`bg-[${scrolled ? "#38B295" : "transparent"}] px-10 py-5 fixed text-white flex items-center justify-between w-full`}
    >
      <div className="font-bold text-3xl">Siloam</div>
      <div className="flex justify-center text-[#E5E5E5] text-xl font-semibold gap-5 items-center">
        {links.map( (link, index) => <a key={index} href={`#${link}`}>{link}</a>)}
        <Button variant="outlined" style={{color: "white", border: "2px solid white"}}>LOGIN</Button>
      </div>
    </div>
  );
}

export default Navbar;
