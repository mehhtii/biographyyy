"use client";
import PageTitleHelp from "@/components/miniElementHelper/pageTitleHelp";
import { motion } from "framer-motion";
import "@/styles/client/contact.css";
import Link from "next/link";

const Contact = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="container"
      >
        <PageTitleHelp title={"contact"} description={"who am i?"} />
        <div className="row text-light my-5">
          <div className="col col-md-6">
            <p className="w-75">
              I’m interested in freelance opportunities. However, if you have
              other request or question, don’t hesitate to contact me
            </p>
          </div>
          <div className="col col-md-6">
            <div className="contact_box d-flex gap-5 justify-content-center">
              <div className="border px-2 py-2 ">
                <h5>massage me here</h5>
                <div className="d-flex align-items-center gap-2 email_box">
                  <i className="bi bi-mailbox font_size_xx"></i>
                  <span>mahdidavoodimoghadam893@gmail.com</span>
                </div>
                <div className="d-flex align-items-center gap-2">
                  <i className="bi bi-telegram blue-text lighten-1 font_size_xx"></i>
                  <Link className="text-decoration-none text-white" href={"https://t.me/Dev_frd"}>mahdi.tel</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Contact;
