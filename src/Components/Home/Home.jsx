import { useEffect, useLayoutEffect, useState } from "react";
import "tailwindcss/tailwind.css";
import feather from "feather-icons";
import nameLogo from "../../assets/nameLogo/nameLogo.svg";
import { annotate, annotationGroup } from "rough-notation";

import coryRightIcon from "../../assets/icons/copyright.svg";
import bars from "../../assets/icons/bars-solid.svg";
import { Element } from "react-scroll";
import { Link } from "react-scroll";

import "../css/Home.css";
import Education from "../Education/education";
import Skills from "../Skills/skills";
import Projects from "../Projects/parent/projects";
import AboutMe from "../AboutMe/AboutMe";
import Contact from "../Contact/Contact";
import Attributes from "../Attributes/Attributes";

const App = () => {
  useLayoutEffect(() => {
    setTimeout(() => {
      const a1 = annotate(document.querySelector("#e1"), {
        type: "highlight",
        color: "#d0bfdc",
      });
      const a2 = annotate(document.querySelector("#e2"), {
        type: "highlight",
        color: "#d0bfdc",
      });
      const a3 = annotate(document.querySelector("#e3"), {
        type: "highlight",
        color: "#c0b762",
      });
      const a4 = annotate(document.querySelector("#e4"), {
        type: "highlight",
        color: "#d4c8b9",
      });
      const a5 = annotate(document.querySelector("#e5"), {
        type: "highlight",
        color: "#d0bfdc",
      });
      const a6 = annotate(document.querySelector("#e6"), {
        type: "highlight",
        color: "#d0bfdc",
      });
      const a7 = annotate(document.querySelector("#e7"), {
        type: "circle",
        color: "#d4c8b9",
      });

      const ag = annotationGroup([a1, a2, a3, a4, a5, a6, a7]);
      ag.show();
    }, 0); // Delay to allow layout to settle
  }, []);

  useEffect(() => {
    feather.replace();
  }, []);

  const [activeLink, setActiveLink] = useState("aboutMe");

  const handleSetActive = (link) => {
    setActiveLink(link);
  };

  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  function toggleMobileMenu() {
    setMobileMenuOpen(!isMobileMenuOpen);
  }

  return (
    <>
      <div className="bg-white   px-4 md:px-24 xl:px-56 ">
        <nav className=" flex items-center justify-between   z-50 sticky  top-5 w-full rounded-[100px] px-3 py-2  ">
          <img
            src={nameLogo}
            className=" cursor-pointer flex justify-center items-center  w-10"
            alt="Logo"
          />
          <div
            className={`navLinks ${
              isMobileMenuOpen ? "mobileView" : ""
            }  flex  `}
          >
            <Link
              to="aboutMe"
              spy={true}
              smooth={true}
              offset={-70}
              duration={900}
              className={`cursor-pointer rounded-[100px] text-center px-6 py-3 font-medium text-black text-[13px] flex items-center justify-center ${
                activeLink === "aboutMe" ? "activeBtn" : ""
              }`}
              onClick={() => handleSetActive("aboutMe")}
            >
              About me
            </Link>

            <Link
              to="Projects"
              spy={true}
              smooth={true}
              offset={-70}
              duration={900}
              className={`cursor-pointer rounded-[100px] text-center px-6 py-3 font-medium text-black text-[13px] flex items-center justify-center ${
                activeLink === "Projects" ? "activeBtn" : ""
              }`}
              onClick={() => handleSetActive("Projects")}
            >
              Projects
            </Link>

            <Link
              to="Education"
              spy={true}
              smooth={true}
              offset={-70}
              duration={900}
              className={`cursor-pointer rounded-[100px] text-center px-6 py-3 font-medium text-black text-[13px] flex items-center justify-center ${
                activeLink === "Education" ? "activeBtn" : ""
              }`}
              onClick={() => handleSetActive("Education")}
            >
              Education
            </Link>

            <Link
              to="Skills"
              spy={true}
              smooth={true}
              offset={-70}
              duration={900}
              className={`cursor-pointer rounded-[100px] text-center px-6 py-3 font-medium text-black text-[13px] flex items-center justify-center ${
                activeLink === "Skills" ? "activeBtn" : ""
              }`}
              onClick={() => handleSetActive("Skills")}
            >
              Skills
            </Link>
            <Link
              to="Contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={900}
              className={`cursor-pointer rounded-[100px] text-center px-6 py-3 font-medium text-black text-[13px] flex items-center justify-center ${
                activeLink === "Contact" ? "activeBtn" : ""
              }`}
              onClick={() => handleSetActive("Contact")}
            >
              Contact
            </Link>
          </div>
          <div className="humberger">
            <img
              src={bars}
              className="w-6 cursor-pointer cursor-pointer mr-3"
              onClick={toggleMobileMenu}
              alt=""
            />
          </div>
        </nav>

        <Element name="aboutMe">
          <AboutMe />
        </Element>

        <Element name="Projects">
          <Projects />
        </Element>

        <Element name="Education">
          <Education />
        </Element>

        <Element name="Skills">
          <Skills />
        </Element>

        <Attributes />

        <Element name="Contact">
          <Contact />
        </Element>
      </div>
      <div className="flex footer font-rubik my-8  mx-11 justify-between items-center mt-64">
        <div className="brand flex items-center font-medium text-black text-sm">
          <img
            className="cursor-pointer flex justify-center items-center  w-10"
            src={nameLogo}
            alt=""
          />
          <img src={coryRightIcon} className="w-3 ml-3  mr-2" alt="" />
          <p>Khamoum Abderraouf 2024</p>
        </div>

        <div className="socials flex justify-center items-center font-medium text-black text-sm ">
          <a href="https://www.instagram.com/abdou.khmm/" className="social">
            Instagram
          </a>
          <a
            href=" https://www.linkedin.com/in/abderaouf-khamoum-657527260/"
            className=" social px-3"
          >
            LinkedIn
          </a>
          <a
            href="mailto:abderaoufa88@gmail.com@example.com"
            className="social"
          >
            Mail
          </a>
        </div>
      </div>
    </>
  );
};

export default App;
