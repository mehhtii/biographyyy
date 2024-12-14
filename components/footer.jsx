import Link from "next/link";
import NameLogo from "./miniElementHelper/nameLogo";

const Footer = () => {
  return (
    <>
      <div className="container mt-5 border-top">
        <div className="row mt-3">
          <div className="col col-7 d-flex gap-3 justify-content-end justify-content-md-start align-items-center">
            <div className="d-flex align-items-center">
              <NameLogo width={10} height={10} />
            </div>
            <small className="text-secondary">
              mahdidavoodimoghadam893@gmail.com
            </small>
          </div>
          <div className="col col-5 text-center text-md-end text-light">
            <h5>Media</h5>
          </div>
        </div>
        <div className="row text-light">
          <div className="col col-12 col-md-6">
            <p>Frot-End Developer </p>
          </div>
          <div className="col col-12 col-md-6 d-flex justify-content-end pe-5 pe-md-0 gap-3 font_size_x">
            <Link href={"https://github.com/mehhtii/"}>
              <i
                className="bi bi-github blue-grey-text lighten-1 pointer"
                title="me-github"
              ></i>
            </Link>
            <Link href={"https://t.me/Dev_frd"}>
              <i
                className="bi bi-telegram blue-text lighten-1 pointer"
                title="me-telegram"
              ></i>
            </Link>
            <Link href={"https://instagram.com/mahdi_davoodi_1"}>
              <i
                className="bi bi-instagram pink-text lighten-1 pointer"
                title="me-instagram"
              ></i>
            </Link>
          </div>
        </div>
        <div className="row text-light text-center">
          <p>© Copyright 2024. Made by Mahdi</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
