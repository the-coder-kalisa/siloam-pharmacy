import React from "react";
import { Button } from "@mui/material";
const Navbar:React.FC =()=> {
    const links: string[] = ["about", "services", "demostration"];
  return (
    <div
      style={{ fontFamily: "sans Armata" }}
      className="bg-transparent px-10 py-5 fixed text-white flex items-center justify-between w-full"
    >
      <div className="font-bold text-3xl">Banger</div>
      <div className="flex justify-center text-[#E5E5E5] text-lg font-medium gap-5 items-center">
        {links.map( link => <a href={`#${link}`}>{link}</a>)}
        <Button variant="outlined" style={{color: "white", border: "2px solid white"}}>LOGIN</Button>
      </div>
    </div>
  );
}

export default Navbar;
