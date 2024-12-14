"use client";
import Image from "next/image";
import NavbarItmes from "./miniElementHelper/navbarItems";
import "@/styles/client/global.css";
import ResponsiveMenu from "./miniElementHelper/responsiveMenu";
import { useContext } from "react";
import { toggleMenuContext } from "@/context/showMenuState";
import NameLogo from "./miniElementHelper/nameLogo";

const Navbar = () => {
  const {showMenu,setShowMenu} = useContext(toggleMenuContext);
  const handleShowMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      <div className="container-fluid">
        <div className="navbar row  p-0">
          <div className="col col-lg-6 col-md-3 col-sm-2 m-0">
            <div className="mt4 d-flex justify-content-start">
              <NameLogo width={20} height={20} name_size={"navbar_itmes_size"}/>
            </div>
          </div>
          <div className="col col-lg-6 col-md-9 col-sm-6 m-0">
            <div className="mt4 d-flex gap3 d-none d-md-flex justify-content-end pe-md-4 pe-0">
              <NavbarItmes title={"home"} href={"/"}/>
              <NavbarItmes title={"projects"} href={"/projects"}/>
              <NavbarItmes title={"about-me"} href={"/about"}/>
              <NavbarItmes title={"contact"} href={"/contact"}/>
            </div>
            <div className="d-md-none d-flex justify-content-end pe-2 pe-sm-0 align-items-center h-100 mt-4">
              <i
                onClick={handleShowMenu}
                className={`${
                  showMenu ? "hide_menu d-none" : "active_menu d-flex"
                } bi bi-blockquote-left font_size_xx pointer`}
              ></i>
              <i
                onClick={handleShowMenu}
                className={`${
                  showMenu
                    ? "active_closed_btn d-flex"
                    : "hide_closed_btn d-none"
                } bi bi-x-lg font_size_xx pointer`}
              ></i>
            </div>
          </div>
        </div>
      </div>
      <ResponsiveMenu />
    </>
  );
};

export default Navbar;
