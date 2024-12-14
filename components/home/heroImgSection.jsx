import Image from "next/image";
import heroImg from "@/public/images/hero.png";
import DotsImg from "@/public/images/Dots.png";
import BackLineHero from "@/public/images/backLines.png";

const HeroImgSection = () => {
  return (
    <div className="d-flex justify-content-end align-items-end position-relative">
      <Image src={heroImg} width={457} height={386} className="mt-5 hero_img" />
      <Image src={DotsImg} width={84} height={84} className="dots_img" />
      <Image
        src={BackLineHero}
        width={155}
        height={155}
        className="back_line_hero"
      />
      <div className="latest_status d-flex align-items-center mx-auto mx-md-0">
        <div className="purpule_box ms-2"></div>
        <div className=" w-75 d-flex align-items-center justify-content-center gap-2">
          <span className="text-secondary">Currently working on</span>
          <span className="text-light">Next.js</span>
        </div>
      </div>
    </div>
  );
};

export default HeroImgSection;
