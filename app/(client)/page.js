"use client"
import FirstContent from "@/components/home";
import "@/styles/client/global.css";
import "@/styles/client/home.css";
import AboutMe from "./about/page";
import Projects from "./projects/page";
import Skills from "@/components/skills";
import { motion } from "framer-motion";
import Contact from "./contact/page";

export default function Home() {
  return (
    <>
      <FirstContent />
      <Projects />
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.9 }}
      >
        <Skills />
      </motion.div>
      <AboutMe />
      <Contact/>
    </>
  );
}
