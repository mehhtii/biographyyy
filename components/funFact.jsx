import Image from "next/image";
import TitleSection from "./miniElementHelper/titleSection";
import funFactImg from "@/public/images/fun-fact-img.png";
import rectangleFunFact from "@/public/images/Rectangle-fun-fact.png";

const FunFact = () => {
  return (
    <>
      <TitleSection title={"fun-fact"} margin={"ms-md-5"} />
      <div className="container">
        <div className="row">
          <div className="col col-12 col-md-7 ps-5">
            <div className="text-light">
              <div className="d-flex gap-2 mt-2">
                <div className="border py-2 px-3">
                  I like winter more than summer
                </div>
                <div className="border py-2 px-3">
                  I often waliball with my friends
                </div>
              </div>
              <div className="d-flex gap-2 mt-2">
                <div className="border py-2 px-3">I like pizza and pasta</div>
                <div className="border py-2 px-3">
                  I am very fond of reading books
                </div>
              </div>
              <div className="d-flex gap-2 mt-2">
                <div className="border py-2 px-3">
                  My favorite movie is The hanibal
                </div>
                <div className="border py-2 px-3">I am still in college</div>
              </div>
              <div></div>
              <div className="border w-50 text-center py-2 px-3 mt-2">
                I have many qualifications in IT
              </div>
            </div>
          </div>
          <div className="col col-12 col-md-5 d-flex justify-content-center pt-3 pt-md-0">
            <Image src={funFactImg} alt="funfactImg" width={178} height={169} />
          </div>
        </div>
      </div>
      <div className="position-relative">
        <Image
          style={{ top: "-200px", left: "-100px" }}
          src={rectangleFunFact}
          alt="rectangleFunFact"
          width={125}
          height={125}
          className="position-absolute"
        />
      </div>
    </>
  );
};

export default FunFact;
