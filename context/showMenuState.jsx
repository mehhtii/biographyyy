"use client"
import { createContext, useState } from "react";

export const toggleMenuContext = createContext({
  showMenu: false,
  setShowMenu: () => {},
});

const ToggleMenuContext = ({ children }) => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <toggleMenuContext.Provider value={{ showMenu, setShowMenu }}>
      {children}
    </toggleMenuContext.Provider>
  );
};

export default ToggleMenuContext;
