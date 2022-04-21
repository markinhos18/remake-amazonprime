import React, { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faGear } from "@fortawesome/free-solid-svg-icons";

// import "./NavBar.scss";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import userLogin from "../../assets/user-circle.png";
import logo from "../../assets/logo-amazon.png";

const NavBar = () => {
  const [openSearch, setOpenSearch] = useState(false);

  const handleClick = () => {
    setOpenSearch(!openSearch);
  };

  const [openMenu, setOpenMenu] = useState(false);

  const handleClickMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <nav className="navbar absolute top-0 left-0 grid grid-cols-5 items-center w-full py-12 container-fluid px-16">
      <div className="col-span-4 justify-self-start flex items-center gap-8">
        <h1 className="hidden">Amazon Prime</h1>
        <img src={logo} className="w-1/6" alt="Amazon Prime" />

        <ul className="grid grid-flow-col bg-sky-900/50 rounded-lg text-2xl gap-8 px-5 py-2">
          <li>
            <form>
              <FontAwesomeIcon
                className="gap-5"
                icon={faSearch}
                onClick={handleClick}
              />
              <input
                className={`w-5/6 transition-all duration-500 ease-in-out  bg-sky-900/80 rounded p-4 absolute -bottom-4 left-10 ${
                  !openSearch && "opacity-0 invisible"
                } `}
                type="text"
                placeholder="Títulos, gêneros, etc..."
              />
            </form>
          </li>

          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#prime">Prime</a>
          </li>
          <li>
            <a href="#store">Store</a>
          </li>
          <li>
            <a href="#channels">Channels</a>
          </li>
          <li>
            <a href="#categories">Categories</a>
          </li>
          <li>
            <a href="#mystuff">My Stuff</a>
          </li>
        </ul>
      </div>

      <div className="justify-self-end flex justify-items-end items-center">
        <FontAwesomeIcon
          className="text-2xl"
          icon={faGear}
          onClick={handleClickMenu}
        />

        <ul
          className={`w-auto transition-all duration-500 ease-in-out bg-sky-900/80 rounded p-4 absolute  top-24 right-20 ${
            !openMenu && "opacity-0 invisible"
          } `}
        >
          <div className="leading-10">
            <li className="flex justify-center">
              <img src={userLogin} className="w-10" alt="Usuario" />
            </li>
            <li>
              <a href="#membership">Membership</a>
            </li>
            <li>
              <a href="#subscriptions">Subscriptions</a>
            </li>
            <li>
              <a href="#parentalcontrols">Parental Controls</a>
            </li>
            <li>
              <a href="#language">Language</a>
            </li>
            <li>
              <a href="#buying">Buying</a>
            </li>
            <li>
              <a href="#renting">Renting</a>
            </li>
            <li>
              <a href="#contactus">Contact us</a>
            </li>
            <li>
              <a href="#legalnotices">Legal notices</a>
            </li>
            <li>
              <a href="#signout">Sign out</a>
            </li>
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
