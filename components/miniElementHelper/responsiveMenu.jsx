"use client";

import { toggleMenuContext } from "@/context/showMenuState";
import { useContext } from "react";
import NavbarItmes from "./navbarItems";

const ResponsiveMenu = () => {
  const { showMenu } = useContext(toggleMenuContext);
  return (
    <>
      <div
        className={`${
          showMenu ? "active_responsive_menu" : "hide_responsive_menu"
        } vh-100 position-absolute responsive_menu`}
      >
        <ul className={`${showMenu ? "opacity-100" : "opacity-0"} list-unstyled d-flex flex-column gap-4 align-items-start ps-4 text-light`}>
          <NavbarItmes title={"home"} href={"/"}/>
          <div className="mx-auto line_div_navbar ms-0 "></div>
          <NavbarItmes title={"projects"} href={"/projects"}/>
          <div className="mx-auto line_div_navbar ms-0"></div>
          <NavbarItmes title={"about-me"} href={"/about"}/>
          <div className="mx-auto line_div_navbar ms-0"></div>
          <NavbarItmes title={"contact"} href={"/contact"}/>
          <div className="mx-auto line_div_navbar ms-0"></div>
        </ul>
      </div>
    </>
  );
};

export default ResponsiveMenu;
