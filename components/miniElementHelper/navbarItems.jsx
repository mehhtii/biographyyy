import { toggleMenuContext } from "@/context/showMenuState";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useContext } from "react";

const NavbarItmes = ({ title,href }) => {
  const pathName = usePathname();
  const {setShowMenu,showMenu} = useContext(toggleMenuContext);
  const handleHideModal = ()=>{
    setShowMenu(false)
  }
  return (
    <div className="d-flex justify-content-center">
      <Link onClick={handleHideModal} href={href} className="text-decoration-none d-flex text-light">
        <h6 className=" sharp_color me-1 navbar_itmes_size">#</h6>
        <h6 className={`${pathName == href && "sharp_color"} navbar_itmes_size pointer`}>{title}</h6>
      </Link>
    </div>
  );
};

export default NavbarItmes;
