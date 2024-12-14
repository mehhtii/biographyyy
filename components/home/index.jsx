"use client";
import Image from "next/image";
import HeroImgSection from "./heroImgSection";
import Introduction from "./introduction";
import "@/styles/client/home.css";
import { motion } from "framer-motion";
import qouteImg from "@/public/images/quote.png";

const FirstContent = () => {
  return (
    <motion.div
      initial={{ y:100,opacity:0}}
      animate={{y:0,opacity:1}}
      transition={{ duration: 0.9 }}
    >
      <div className="container hero_box">
        <div className="row">
          <div className="col col-12 col-md-6 ">
            <Introduction />
          </div>
          <div className="col col-12 col-md-6 ">
            <HeroImgSection />
          </div>
        </div>
          <motion.div initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:1.5}} className="my-5 d-flex justify-content-center pt-5 ">
            <Image src={qouteImg} alt="quoteBox" width={508} height={125} className="my-5 qoute_img"/>
          </motion.div>
      </div>
    </motion.div>
  );
};

export default FirstContent;
