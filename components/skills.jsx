import Image from "next/image";
import TitleSection from "./miniElementHelper/titleSection";
import dotsImg from "@/public/images/Dots.png";

const Skills = () => {
  const dataBaseItems = [
    {
      id: 1,
      title: "languages",
      content: {
        number1: "javaScript",
        number2: "TypeScript",
        number3: "C#",
      },
    },
    {
      id: 2,
      title: "tools",
      content: {
        number2: "Figma",
        number3: "Terllo",
      },
    },
    {
      id: 3,
      title: "frameWorks",
      content: {
        number1: "Next.js",
        number2: "tailwind",
        number3: "React.js",
        number4: "bootstrap",
        number4: "express.js",
      },
    },
    {
      id: 4,
      title: "DataBases",
      content: {
        number1: "SQL",
        number2: "postgreSQL",
        number3: "mongoDb",
      },
    },
    {
      id: 5,
      title: "Other",
      content: {
        number1: "Terllo",
        number3: "less",
        number2: "css",
      },
    },
  ];
  return (
    <>
      <TitleSection title={"skills"} margin={"ms-md-3"} />
      <div className="container mt-5">
        <div className="row justify-content-center">
          {dataBaseItems.map((d) => (
            <div key={d.id} className="col col-9 col-md-2 text-center text-md-start text-light mt-4">
              <div className="w-100 border text-center p-2">
                <span>{d.title}</span>
              </div>
              <ul className="list-unstyled border h-auto">
                <li>{d.content.number1}</li>
                <li>{d.content.number2}</li>
                <li>{d.content.number3}</li>
                <li>{d.content.number4}</li>
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="position-relative">
        <Image
          src={dotsImg}
          width={56}
          height={60}
          className="position-absolute d-none d-md-block"
          style={{top:"-190px",right:"3px"}}
        />
      </div>
    </>
  );
};

export default Skills;
