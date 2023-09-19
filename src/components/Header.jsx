import { Link } from "react-router-dom";
import data from "../lib/data";
import { useState } from "react";
import Button from "./Button";
const Header = () => {
  const { navbar } = data;

  const [showMenu, setShowMenu] = useState(false);
  return (
    <div className="p-6">
      <div className="mobile flex  justify-between items-center md:hidden ">
        <div className="logo">
          <p className="font-title font-bold text-sm flex">
            {" "}
            <span className="">get</span>{" "}
            <span className="text-common">linked</span>
          </p>
        </div>

        <div className="right">
          <button onClick={() => setShowMenu(true)} className="menu-icon">
            <img src="/src/assets/menu.svg" alt="menu-icon" />
          </button>
          <div className={showMenu ? "navs flex border p-6" : "hidden"}>
            <div className="close-icon">
              {/* <button className="border-gradient border-gradient-purple">
                <img
                  className="  "
                  src="/src/assets/close-icon.svg"
                  alt="close-icon"
                />
              </button> */}
              <button onClick={() => setShowMenu(false)}>
                <img
                  className="  "
                  src="/src/assets/close-icon.svg"
                  alt="close-icon"
                />
              </button>
            </div>
            <div className="nav-links">
              <ul className="flex flex-col items-start gap-4">
                {navbar.links.map((link, index) => (
                  <li key={index}>
                    <Link
                      to="/"
                      className="font-inter font-medium text-lg  capitalize"
                    >
                      {link.text}
                    </Link>
                  </li>
                ))}
                <Button />
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="desktop hidden md:flex justify-between items-center p-6">
        <div className="logo">
          <p className="font-title font-bold text-sm flex">
            {" "}
            <span className="">get</span>{" "}
            <span className="text-common">linked</span>
          </p>
        </div>
        <div className="right">
          <div className="nav-links flex gap-14 justify-center items-center ">
            <ul className="flex justify-center items-center gap-5">
              {navbar.links.map((link, index) => (
                <li key={index}>
                  <Link
                    to="/"
                    className="font-body font-regular text-lg  capitalize"
                  >
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
            <Button />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
