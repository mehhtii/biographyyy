import nameImg from "@/public/images/nameImg.png";
import Image from "next/image";

const NameLogo = ({ width, height, name_size }) => {
  return (
    <>
      <Image
        src={nameImg}
        width={width}
        height={height}
        className="ml5"
        alt="nameImg"
      />
      {name_size ? (
        <span className={`pb1 ${name_size} ms-2 text-light`}>mahdi</span>
      ) : (
        <small className="ms-2 text-light">mhadi</small>
      )}
    </>
  );
};

export default NameLogo;
