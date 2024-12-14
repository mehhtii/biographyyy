"use client";
import Image from "next/image";
import aboutMeMan from "@/public/images/about-me-hero.png";
import aboutDotsImg from "@/public/images/about-dots-img.png";
import aboutDotsImg2 from "@/public/images/about-dots-img-2.png";
import LineImg from "@/public/images/line-about-img.png";
import "@/styles/client/about-me.css";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import TitleSection from "@/components/miniElementHelper/titleSection";
import Skills from "@/components/skills";
import FunFact from "@/components/funFact";
import PageTitleHelp from "@/components/miniElementHelper/pageTitleHelp";

const AboutMe = () => {
  const pahtName = usePathname();
  return (
    <>
      <div className="container">
        <div
          className={`${
            pahtName == "/about" ? "d-block" : "d-none"
          } container pt-3`}
        >
          <PageTitleHelp
            title={"about-me"}
            description={"Who am i?"}
            ps={"ms-0"}
          />
        </div>

        <div
          className={`${
            pahtName == "/about" ? "d-none" : "d-block"
          } mx-md-5 my-5 d-flex align-items-center pt-5`}
        >
          <TitleSection title={"about-me"} />
        </div>

        <motion.div
          initial={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.9 }}
          whileInView={{ y: 0, opacity: 1 }}
          className="container mt-5"
        >
          <div className="row mx-5">
            <div className="col col-12 col-md-6 text-secondary d-flex flex-column justify-content-center gap-5">
              <p>Hello, i’m Mahdi!</p>
              <p>
                I’m a self-taught front-end developer based in gilan, Iran. I
                can develop responsive websites from scratch and raise them into
                modern user-friendly web experiences
              </p>
              <p>
                Transforming my creativity and knowledge into a websites has
                been my passion for over a year. I have been helping various
                clients to establish their presence online. I always strive to
                learn about the newest technologies and frameworks.
              </p>
            </div>
            <div className="col col-12 col-md-6 position-relative d-flex justify-content-center">
              <Image
                src={aboutMeMan}
                alt="aboutMeMean"
                width={369}
                height={457}
                className="about_mean_img"
              />
              <Image
                src={LineImg}
                alt="line_img"
                width={280}
                height={1}
                className="line_img mx-auto"
              />
              <Image
                src={aboutDotsImg}
                alt="aboutDotsImg"
                width={84}
                height={84}
                className="about_dots_img"
              />
              <Image
                src={aboutDotsImg2}
                alt="aboutDotsImg2"
                width={104}
                height={56}
                className="about_dots_img_2"
              />
            </div>
          </div>
        </motion.div>
      </div>
      {pahtName == "/about" ? (
        <>
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.1 }}
          >
            <Skills />
          </motion.div>
          <motion.div
            initial={{ x: 100, opacity: 0, position: "absolute" }}
            whileInView={{ x: 0, opacity: 1, position: "initial" }}
            transition={{ duration: 1 }}
          >
            <FunFact />
          </motion.div>
        </>
      ) : (
        ""
      )}
    </>
  );
};

export default AboutMe;
