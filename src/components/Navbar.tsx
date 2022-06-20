import React, {useEffect, useState} from "react";
import { Button } from "@mui/material";
const Navbar:React.FC =()=> {
  const [scrolled, setScrolled] = useState<boolean>(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      console.log(window.scrollY)
    })
  })
    const links: string[] = ["home","about", "services", "demostration"];
  return (
    <div
      id="home"
      className="bg-transparent px-10 py-5 fixed text-white flex items-center justify-between w-full"
    >
      <div className="font-bold text-3xl">Siloam</div>
      <div className="flex justify-center text-[#E5E5E5] text-lg font-medium gap-5 items-center">
        {links.map( (link, index) => <a key={index} href={`#${link}`}>{link}</a>)}
        <Button variant="outlined" style={{color: "white", border: "2px solid white"}}>LOGIN</Button>
      </div>
    </div>
  );
}

export default Navbar;
