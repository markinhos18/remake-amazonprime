import React, { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faGear, faBars } from "@fortawesome/free-solid-svg-icons";

// import "./NavBar.scss";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import userLogin from "../../assets/user-circle.png";
import logo from "../../assets/logo-amazon.png";

const NavBar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const handleNav = () => setNavbarOpen(!navbarOpen);

  /************************************************/

  const [openSearch, setOpenSearch] = useState(false);

  const handleClickSearch = () => setOpenSearch(!openSearch);

  // window.addEventListener("click", () => {
  //   if (openSearch === true) {
  //     setOpenSearch(false);
  //     alert("teste");
  //   }
  // });

  /***********************************************/

  const [openMenu, setOpenMenu] = useState(false);

  const handleClickMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <nav className="top-0 fixed  lg:absolute bg-gray-900 lg:bg-transparent  mx-auto z-50  w-full flex flex-wrap items-center justify-between px-5 lg:px-16 py-2 lg:py-5  mb-3">
      <div className="container w-full  relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
        <a href="#prime">
          <h1 className="hidden">Amazon Prime</h1>
          <img src={logo} className="w-32" alt="Amazon Prime" />
        </a>
        <button
          className="text-white text-xl  leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none "
          type="button"
          onClick={handleNav}
        >
          <FontAwesomeIcon className="text-2xl" icon={faBars} />
        </button>
      </div>
      <div
        className={
          "relative top-5  lg:top-0 lg:flex flex-grow items-center" +
          (navbarOpen ? " flex" : " hidden")
        }
        id="example-navbar-danger"
      >
        <ul className="flex flex-col  lg:flex-row list-none  w-full  lg:w-auto transition-all duration-500 ease-in-out bg-sky-900/50 rounded-lg text-2xl gap-8 px-5 pb-5 lg:pb-2 pt-2">
          <li className="nav-item pr-3">
            <form className="relative lg:absolute  ">
              <FontAwesomeIcon
                className="gap-5  cursor-pointer"
                icon={faSearch}
                onClick={handleClickSearch}
              />
              <input
                className={`absolute w-90 h-12 lg:w-96 transition-all duration-500 ease-in-out  bg-sky-900/80 rounded p-4 absolute -bottom-4 top-0 lg:top-14 z-10  right-0 left-10 lg:left-0 ${
                  !openSearch && "opacity-100 lg:opacity-0 visible lg:invisible"
                } `}
                type="text"
                placeholder="Títulos, gêneros, etc..."
              />
            </form>
          </li>
          <li className="nav-item">
            <a href="#home" className=" hover:text-blue-300">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a href="#prime" className=" hover:text-blue-300">
              Prime
            </a>
          </li>
          <li className="nav-item">
            <a href="#store" className=" hover:text-blue-300">
              Store
            </a>
          </li>
          <li className="nav-item">
            <a href="#channels" className=" hover:text-blue-300">
              Channels
            </a>
          </li>
          <li className="nav-item">
            <a href="#categories" className=" hover:text-blue-300">
              Categories
            </a>
          </li>
          <li className="nav-item">
            <a href="#mystuff" className=" hover:text-blue-300">
              My Stuff
            </a>
          </li>
        </ul>

        <div className=" ">
          <FontAwesomeIcon
            className="absolute -top-14  lg:top-0 right-14 lg:right-0 text-2xl cursor-pointer"
            icon={faGear}
            onClick={handleClickMenu}
          />

          <ul
            className={`w-full lg:w-44 transition-all duration-500 ease-in-out bg-sky-900 lg:bg-sky-900/90 rounded  p-4 absolute z-20 top-1 lg:top-14 right-0  lg:right-0 ${
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
      </div>
    </nav>
  );
};

export default NavBar;
