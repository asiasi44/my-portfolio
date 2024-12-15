"use client";
import { BsLinkedin } from "react-icons/bs";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState("none");
  const openSidebar = () => {
    if (showNavbar == "none") {
      setShowNavbar("");
    }else {
      setShowNavbar("none");
    }
  };
  return (
    <div>
      <div className="flex items-center justify-between gap-6 text-[2.8rem] mx-16 h-[6.3rem] responsive-text-center responsive-margin">
        <div>
          <Link href="/">ASIM POUDEL</Link>
        </div>
        <div className="flex text-[30px] gap-8 items-center responsive-hidden">
          <div>
            <Link href={"/"}>HOME</Link>
          </div>
          <div>
            <Link href={"/about"}>ABOUT</Link>
          </div>
          <div>
            <Link href={"/work"}>Work</Link>
          </div>
          <div>Blog</div>
          <div className="flex items-center ">
            <Link
              href="https://www.linkedin.com/in/asim-poudel-45989b244"
              target="_blank"
            >
              <BsLinkedin />
            </Link>
          </div>
          <div className="flex items-center">
            <Link href={"/contact"}>
              <div className="bg-white w-28 h-14 rounded-tl-[2.2rem] rounded-br-[2.2rem] text-center flex items-center text-black justify-center">
                Contact
              </div>
            </Link>
          </div>
        </div>
        <div className="hidden responsive-show" onClick={openSidebar}>
          <div className="h-0.5 w-5 bg-white"></div>
          <div className="h-0.5 w-5 bg-white"></div>
          <div className="h-0.5 w-5 bg-white"></div>
        </div>
      </div>
      <div
        className="hidden responsive-show flex flex col justify-center items-center pb-6 z-2 absolute bg-black w-full"
        style={{ display: showNavbar }}
      >
        <div>
          <Link href={"/"}>HOME</Link>
        </div>
        <div>
          <Link href={"/about"}>ABOUT</Link>
        </div>
        <div>
          <Link href={"/work"}>Work</Link>
        </div>
        <div>Blog</div>
        <div className="flex items-center ">
          <Link
            href="https://www.linkedin.com/in/asim-poudel-45989b244"
            target="_blank"
          >
            <BsLinkedin />
          </Link>
        </div>
        <div className="flex items-center">
          <Link href={"/contact"}>
            <div className="bg-white w-28 h-14 rounded-tl-[2.2rem] rounded-br-[2.2rem] text-center flex items-center text-black justify-center">
              Contact
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
