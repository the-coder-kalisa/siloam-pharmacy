import React, { useEffect, useState } from "react";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState<boolean>(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY >= 540 ? setScrolled(true) : setScrolled(false);
    });
  });
  useEffect(() => {
    window.screenY >= 540 ? setScrolled(true) : setScrolled(false);
  }, []);
  console.log(scrolled);
  const links: string[] = ["home", "about", "services", "demostration"];
  return (
    <div
      style={{ background: scrolled ? "#38B295" : "transparent" }}
      className={`px-10 py-5 fixed z-50 text-white flex items-center justify-between w-full`}
    >
      <div className="font-bold text-3xl">Siloam</div>
      <div className="flex justify-center text-[#E5E5E5] text-xl font-semibold gap-5 items-center">
        {links.map((link, index) => (
          <a key={index} href={`#${link}`}>
            {link}
          </a>
        ))}
          <Button
            variant="outlined"
            style={{ color: "white", border: "2px solid white" }}
          >
            <Link to="/login">
            LOGIN
            </Link>
          </Button>
      </div>
    </div>
  );
};

export default Navbar;
