"use client";
import PageTitleHelp from "@/components/miniElementHelper/pageTitleHelp";
import TitleSection from "@/components/miniElementHelper/titleSection";
import liveImgBtn from "@/public/images/Live_btn_img.png";
import githubImgBtn from "@/public/images/github-btn-img.png";
import HakimCode from "@/public/images/hkimCode.png";
import AdminPanel from "@/public/images/adminPanel.png";
import School from "@/public/images/school.png";
import melodya from "@/public/images/melodya.png";
import Image from "next/image";
import "@/styles/client/projects.css";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
const Projects = () => {
  const pathName = usePathname();

  const dataForSet = [
    {
      id: 1,
      title: "React.js, bootstrap5, Framer Motion,",
      titleDes: "Excellent, responsive, user-friendly.",
      description:
        "Experience the magic of interactive flex layouts! Dive into our demo website and witness the fluidity ",
      url: "https://github.com/mehhtii/Educational_Website",
      img: HakimCode,
    },
    {
      id: 2,
      title: "React, Bootstrap5, SweetAlert, And...",
      titleDes: "Admin panel - a functional website using React",
      description:
        "By using this React template, you can manage your website more optimally",
      url: "https://github.com/mehhtii/Admin-Panel-react/",
      img: AdminPanel,
    },
    {
      id: 3,
      title: "React, Bootstrap5, framer motion, font awesome",
      titleDes: "School management website",
      description:
        "A dedicated school website for announcements and remote management",
      url: "https://github.com/mehhtii/web-schooll",
      img: School,
    },
    {
      id: 4,
      title: "React.js, Next.js, Tailwind CSS, Zustand, json-server",
      titleDes: "A unique website for listening to music",
      description:
        "A website with a great and unique user interface with spotify capabilities that allows us to listen to the songs we want",
      url: "https://github.com/mehhtii/Melodia",
      img: melodya,
    },
  ];
  return (
    <>
      {pathName == "/projects" ? (
        
        <>
          <div className=" container pt-3">
            <PageTitleHelp
              title={"projects"}
              description={"list of my projects"}
            />
          </div>
        </>
      ) : (
        <TitleSection title={"complete-apps"} margin={"ms-3 ms-md-0"} />
      )}

      {pathName == "/projects" ? null : (
        <div className="text-light d-flex justify-content-end gap-0 p-0 pe-5">
          <Link
            href={"/projects"}
            className="text-light text-decoration-none view_all_project"
          >
            <p className="me-4">
              View all <i className="bi bi-arrow-bar-right"></i>
            </p>
          </Link>
        </div>
      )}

      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.9 }}
        className="container mt-5"
      >
        <div className="row row-cols-auto justify-content-center justify-content-md-start">
          {dataForSet.map((d) => (
            <div key={d.id} className="col col-8 col-md-4 px-2 py-3 h-auto">
              <div className="w-100 border">
                <div className="projrcts_img mx-auto my-2">
                  <Image
                    src={d.img}
                    alt="project_img"
                    className="img_project"
                  />
                </div>
                <div className="border-top border-bottom ps-3 text-light w-100 py-2 pb-4">
                  <p className="my-auto">{d.title}</p>
                </div>
                <div className="about_project text-light p-3 ">
                  <h5 className="">{d.titleDes}</h5>
                  <p className="">{d.description}</p>
                  <Link href={d.url}>
                    <button className="live_btn text-light">
                      <Image
                        src={d.url ? liveImgBtn : githubImgBtn}
                        alt="liveImg"
                        className="live_img_btn"
                      />
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </>
  );
};

export default Projects;
