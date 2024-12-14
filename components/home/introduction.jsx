import Link from "next/link";

const Introduction = () => {
  return (
    <>
      <div className="mt-5 ms-5 pt-5">
        <h1 className=" font_bold text-secondary ms-2 ms-md-0">
          Hey, I'm Mahdi.
        </h1>
        <h3 className="sharp_color ms-2 ms-md-0">Fornt-End Developer</h3>
      </div>
      <div className="mt-4 ms-5">
        <p className="text-light mx-1 ms-2 ms-md-0">
          I'm a Fornt-end developer living in Iran. I make web applications
          applications with React.js and Next.js frameworks
        </p>
      </div>
      <div className="ms-5">
        <Link href={"/contact"}>
          <button className="contact_me_btn text-light mt-2 ms-2 ms-md-0">
            contact me !!
          </button>
        </Link>
      </div>
    </>
  );
};

export default Introduction;
