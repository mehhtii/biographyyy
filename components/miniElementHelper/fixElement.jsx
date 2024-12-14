"use client";
import { toggleMenuContext } from "@/context/showMenuState";
import { useContext } from "react";

const FixElement = () => {
  const { showMenu } = useContext(toggleMenuContext);
  return (
    <>
      <div
        className={`${
          showMenu ? "hide_fix_element" : "active_fix_element"
        } common_fix_elements`}
      >
        <div className="vertical_line"></div>
        <div className="fixed">
          <a
            href="https://github.com/mehhtii"
            className="btn-floating btn-small common_fix_button pulse"
          >
            <i className="bi bi-github"></i>
          </a>
          <a
            href="https://t.me/Dev_frd"
            className="btn-floating btn-small common_fix_button pulse"
          >
            <i className="bi bi-telegram blue-text lighten-1 telegram_icon"></i>
          </a>
          <a
            href="https://instagram.com/mahdi_davoodi_1"
            className="btn-floating btn-small common_fix_button pulse"
          >
            <i className="bi bi-instagram pink-text lighten-1 "></i>
          </a>
        </div>
      </div>
    </>
  );
};

export default FixElement;
