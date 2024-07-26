import React, { useEffect, useLayoutEffect, useState } from "react";
import "tailwindcss/tailwind.css";
import feather from "feather-icons";
import abdou from "../../assets/images/Abdou.jpg";
import nameLogo from "../../assets/nameLogo/nameLogo.svg";
import { annotate, annotationGroup } from "rough-notation";
import githubIcon from "../../assets/icons/github.svg";
import linkedinIcon from "../../assets/icons/linkedin.svg";
import coryRightIcon from "../../assets/icons/copyright.svg";
import bars from "../../assets/icons/bars-solid.svg";
import cv from "../../assets/CV/resume_english.pdf";
import { Element } from "react-scroll";
import { Link } from "react-scroll";
import Headroom from "react-headroom";

/*Tools */
import git from "../../assets/icons/git-icon.svg";
import github from "../../assets/icons/github.svg";
import vsCode from "../../assets/icons/visual studio code.svg";
import figma from "../../assets/icons/figma.svg";
import adobeIllustrator from "../../assets/icons/Adobe Illustrator.svg";
import postman from "../../assets/icons/postman.svg";
import vite from "../../assets/icons/vitejs.svg";
import chakraUI from "../../assets/icons/chakra-ui.svg";
import shadCN from "../../assets/icons/shadcn-ui.svg";

/*Front-end */
import html from "../../assets/icons/html.svg";
import css from "../../assets/icons/css.svg";
import javaScript from "../../assets/icons/javascript.svg";
import react from "../../assets/icons/react.svg";
import tailwindCSS from "../../assets/icons/tailwindcss.svg";
import bootstrap from "../../assets/icons/bootstrap.svg";
import nextjs from "../../assets/icons/next-js.svg";
import typeScript from "../../assets/icons/typescript.svg";

/*Backend */
import mongodb from "../../assets/icons/mongodb.svg";
import expressjs from "../../assets/icons/expressjs.svg";
import nodejs from "../../assets/icons/node-js.svg";

import img1 from "../../assets/images/archi vision.png";
import img2 from "../../assets/images/glamour.png";
import img3 from "../../assets/images/little lemon.png";

import "../css/Home.css";

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
          <section id="aboutMe" className=" w-full pt-2 ">
            <div className=" max-w-screen-xl mx-auto   px-4 lg:px-0 my-32  ">
              <div className=" flex  font-rubik  ">
                <div className="flex-1 md:mr-20   mr-6">
                  <h6 className=" font-rubik font-extrabold text-gray-600 text-2xl  lg:text-3xl ">
                    Hello ! I’m Abderraouf, a{" "}
                    <span id="e1" className="inline-block">
                      full stack developer
                    </span>{" "}
                    bassed in Algeria
                  </h6>
                  <h1 className="font-normal text-gray-900 text-4xl md:text-7xl leading-none mb-8"></h1>
                  <div className="font-normal text-gray-600 text-sm  lg:text-base mb-16">
                    <p className="mb-2">
                      I love building tools that are{" "}
                      <span id="e2" className="inline-block">
                        user-friendly, simple{" "}
                      </span>{" "}
                      <span> and </span>
                      <span id="e3"> delightful</span> .
                    </p>
                    <p className="mb-2">
                      {" "}
                      My journey of coding started when entering{" "}
                      <span id="e4">architecture</span> school and working with
                      it softwares made me wonder how they design & built it,
                      This curiosity pushed me to start a career as a full-stask
                      developer.
                    </p>
                    <p className="mb-2">
                      I was a student at Code labs academy School where I spent
                      10 months learning the fundamentals of{" "}
                      <span id="e5" className="inline-block">
                        front-end and back-end
                      </span>{" "}
                      web development and the{" "}
                      <span id="e6" className="inline-block">
                        {" "}
                        flexible skills
                      </span>{" "}
                      to succeed in this field
                    </p>
                    <p className="mb-2">
                      I'm currently looking for a new role as a developer.{" "}
                      <span className="inline-block" id="e7">
                        Hire me?
                      </span>
                    </p>
                  </div>
                  <div className="  w-full  h-auto">
                    <a
                      href={cv}
                      Download="Khamoum Abderraouf CV"
                      className=" inline-block px-5 py-3 last:py-3 md:px-8 md:py-3  font-light md:font-normal bg-gray-700 border-2 border-gray-700  text-gray-50 text-xs rounded-md  "
                    >
                      Download CV
                    </a>
                    <a
                      href="https://github.com/Abderaouf16"
                      className="  max-768px:mx-4 text-center inline-block my-3 px-5 py-[10px] md:mx-6 md:px-8 md:py-[10px]  font-light md:font-normal  text-black border-2 border-black text-xs rounded-md hover:bg-gray-50 hover:text-gray-700 transition ease-linear duration-500"
                    >
                      View Github
                      <img
                        src={githubIcon}
                        className=" w-5 inline ml-3"
                        alt=""
                      />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/abderaouf-khamoum-657527260/"
                      className="inline-block px-5 py-3 md:px-8 py-[10px] font-light md:font-normal border-2 border-black text-black text-xs rounded-md hover:bg-gray-50 hover:text-gray-700 transition ease-linear duration-500"
                    >
                      View LinkedIn
                      <img
                        src={linkedinIcon}
                        className="w-5 inline ml-3"
                        alt=""
                      />
                    </a>
                  </div>
                </div>
                <div className="flex  max-768px:hidden   justify-center mb-16    ">
                  <img
                    src={abdou}
                    className="myImage  lg:w-[280px] lg:h-72  rounded-3xl"
                    alt="Image"
                  />
                </div>
              </div>
            </div>
          </section>
        </Element>
        <Element name="Projects">
          <section className=" font-rubik py-10 md:py-16 pt-2">
            <div className="container max-w-screen-xl mx-auto px-4">
              <div className="  lg:flex-row justify-between">
                <div className="mb-10 lg:mb-20">
                  <h1 className="font-medium text-gray-700 text-3xl md:text-3xl mb-3">
                    Projects & Experience
                  </h1>
                  <p className="font-normal text-gray-500 text-xs md:text-base">
                    Some of the side projects I'm currently working on.
                  </p>
                </div>
                <div className="flex w-full  ">
                  <div className="grid grid-cols-1 gap-6">
                    <div className=" flex flex-col lg:flex-row p-6 ">
                      <div className=" w-full lg:w-9/20 border-gray-400 border-2 ">
                        <img className='' src={img1} alt="" />
                      </div>
                      <div className="w-full lg:w-11/20 flex flex-col px-4 md:pl-8 ">
                        <h3 className="text-xl font-semibold mb-2 text-secondary mt-2 md:mt-0 lg:mt-0">
                        Archi Vision <span className='text-base  font-normal px-3 '>(Updating current version)</span>
                        </h3>
                        <ul className="max-w-3xl leading-[30px] list-disc ml-4">
                          <li className="text-tertiary text-[15px] pl-1 tracking-wider">
                          Technologies: Html, CSS, JavaScript, React, Nodejs, ExpressJS, MongoDB
                          </li>
                          <li className="text-tertiary text-[15px] pl-1 tracking-wider">
                          Design and development of a complex web application for architecture department students which allows them to save their study projects
and contribute them with the community
                          </li>
                        </ul>
                        <div className=" mt-10 ">
                          <a
                          href='https://github.com/Abderaouf16/CLA-Graduation-Project'
                          target="_blank"
                            className=" text-center text-sm rounded-md inline-block  px-5 py-[10px]  md:px-8 md:py-[10px]  font-light md:font-normal  text-black  "
                            style={{
                              backgroundColor: "rgba(232, 229, 228, 0.9)",
                            }}
                          >
                            Repo
                          </a>
                          <a
                          href='https://daa-test.vercel.app'
                          target="_blank"
                            className="  text-center text-sm rounded-md inline-block  px-5 py-[10px]  mx-4  md:px-8 md:py-[10px]  font-light md:font-normal  text-black "
                            style={{
                              backgroundColor: "rgba(232, 229, 228, 0.9)",
                            }}
                          >
                            Demo
                          </a>
                          <button
                            className="  text-center text-sm rounded-md inline-block mt-3 px-5 py-[10px] md:px-8 md:py-[10px]  font-light md:font-normal  text-black "
                            style={{
                              backgroundColor: "rgba(232, 229, 228, 0.9)",
                            }}
                          >
                            Full documentation
                          </button>
                        </div>
                      </div>
                    </div>

                    <div className=" flex flex-col lg:flex-row p-6  border-black">
                      <div className=" w-full lg:w-9/20 border-gray-400 border-2 ">
                        <img src={img2} alt="" />
                      </div>
                      <div className="w-full lg:w-11/20 flex flex-col px-4 md:pl-8 ">
                        <h3 className="text-xl font-semibold mb-2 text-secondary mt-2 md:mt-0 lg:mt-0">
                          Glamour <span className='text-base  font-normal px-3 '>(currently working on)</span>
                        </h3>
                        <ul className="max-w-3xl leading-[30px] list-disc ml-4">
                          <li className="text-tertiary text-[15px] pl-1 tracking-wider">
                          Technologies: Html, CSS, JavaScript, NextJS, ShadcnUI, Nodejs, ExpressJS, MongoDB                          </li>
                          <li className="text-tertiary text-[15px] pl-1 tracking-wider">
                           Design and development of a web application that allows users to purchase clothing of their preference

                          </li>
                        </ul>
                        <div className=" mt-10  ">
                          <button
                            className=" text-center text-sm rounded-md inline-block  px-5 py-[10px]  md:px-8 md:py-[10px]  font-light md:font-normal  text-black  "
                            style={{
                              backgroundColor: "rgba(232, 229, 228, 0.9)",
                            }}
                          >
                            Repo
                          </button>
                          <a

                          href='https://www.figma.com/proto/wnM1o1gLZFgyexxwxDWRyY/Clothing-E-commerce-website?node-id=39-7&t=wuC1h9yfj2TiT5mU-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=39%3A7'
                          target='_blank'
                            className="  text-center text-sm rounded-md inline-block  px-5 py-[10px]  mx-4  md:px-8 md:py-[10px]  font-light md:font-normal  text-black "
                            style={{
                              backgroundColor: "rgba(232, 229, 228, 0.9)",
                            }}
                          >
                            Demo
                          </a>
                          <button
                            className="  text-center text-sm rounded-md inline-block mt-3 px-5 py-[10px] md:px-8 md:py-[10px]  font-light md:font-normal  text-black "
                            style={{
                              backgroundColor: "rgba(232, 229, 228, 0.9)",
                            }}
                          >
                            Full documentation
                          </button>
                        </div>
                      </div>
                    </div>

                    <div className=" flex flex-col lg:flex-row p-6 ">
                      <div className=" w-full lg:w-9/20 border-gray-400 border-2 ">
                        <img src={img3} alt="" />
                      </div>
                      <div className="w-full lg:w-11/20 flex flex-col px-4 md:pl-8 ">
                        <h3 className="text-xl font-semibold mb-2 text-secondary mt-2 md:mt-0 lg:mt-0">
                          Little Lemon
                        </h3>
                        <ul className="max-w-3xl leading-[30px] list-disc ml-4">
                          <li className="text-tertiary text-[15px] pl-1 tracking-wider">
                          Technologies: Html, CSS, JavaScript, React, ChakraUI
                          </li>
                          <li className="text-tertiary text-[15px] pl-1 tracking-wider">
                          Developed Website Landing Page creating and optimizing content for the website using a variety of graphics, databases, animations and other
functionality.
                          </li>
                        </ul>
                        <div className=" mt-10 ">
                          <a
                           href='https://github.com/Abderaouf16/Coursera-Font-end-capstone-project'
                           target='_blank'
                          
                            className=" text-center text-sm rounded-md inline-block  px-5 py-[10px]  md:px-8 md:py-[10px]  font-light md:font-normal  text-black  "
                            style={{
                              backgroundColor: "rgba(232, 229, 228, 0.9)",
                            }}
                          >
                            Repo
                          </a>
                          <a
                         href='https://littellemon.vercel.app'
                         target='_blank'
                            className="  text-center text-sm rounded-md inline-block  px-5 py-[10px]  mx-4  md:px-8 md:py-[10px]  font-light md:font-normal  text-black "
                            style={{
                              backgroundColor: "rgba(232, 229, 228, 0.9)",
                            }}
                          >
                            Demo
                          </a>
                          <button
                            className="  text-center text-sm rounded-md inline-block mt-3 px-5 py-[10px] md:px-8 md:py-[10px]  font-light md:font-normal  text-black "
                            style={{
                              backgroundColor: "rgba(232, 229, 228, 0.9)",
                            }}
                          >
                            Full documentation
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </Element>
        <Element name="Education">
          <section className="py-10 md:py-16">
            <div className=" container max-w-screen-xl mx-auto px-4">
              <h1 className="font-medium text-gray-700 text-3xl md:text-4xl mb-5">
                Education
              </h1>
              <p className="font-normal text-gray-500 text-xs md:text-base mb-20">
                Below is a summary of the places I studied
              </p>
              <div className="  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className=" card bg-gray-100 px-8 py-10 rounded-md">
                  <h4 className="font-medium text-gray-700 text-lg mb-1">
                    BSc in Architectural Engineering & Design
                  </h4>
                  <h2 className="font-medium text-gray-600 text-sm mb-2">
                    University of Algiers 1
                  </h2>
                  <h2 className="font-medium text-gray-600 text-sm mb-3">
                    Sep 2021- Jun 2024
                  </h2>
                  <p className="font-normal text-gray-500 text-md mb-4">
                    This program covers engineering design, structures, and
                    construction management.
                    <br />I have developed strong visual skills, and a grasp of
                    mathematics, and the history of architecture.
                  </p>
                </div>
                <div className="card bg-gray-100 px-8 py-10 rounded-md">
                  <h4 className="font-medium text-gray-700 text-lg mb-1">
                    Meta Front-End Developer
                  </h4>
                  <h2 className="font-medium text-gray-600 text-sm mb-2">
                    Meta
                  </h2>
                  <h2 className="font-medium text-gray-600 text-sm mb-3">
                    Jun 2023- Jan 2024
                  </h2>
                  <p className="font-normal text-gray-500 text-md mb-4">
                    This is a training that consists of front-end development,
                    UI/UX design, React Native development <br />
                    and web development in general.
                  </p>
                </div>
                <div className=" card bg-gray-100 px-8 py-10 rounded-md">
                  <h4 className="font-medium text-gray-700 text-lg mb-1">
                    Web development Bootcamp
                  </h4>
                  <h2 className="font-medium text-gray-600 text-sm mb-2">
                    Code Labs Academy
                  </h2>
                  <h2 className="font-medium text-gray-600 text-sm mb-3">
                    Jun 2021- Apr 2022
                  </h2>
                  <p className="font-normal text-gray-500 text-md mb-4">
                    10-month program to learn Full Stack Web Development . The
                    program focuses on self-directed technical training in
                    coding and web design as well as Capstone Project.
                  </p>
                  {/* <div className="relative">
                  <h6 className="font-semibold text-gray-500 text-md relative z-10">
                    See the place here
                  </h6>
                  <span className="w-32 h-1 bg-blue-200 absolute bottom-1 left-0 z-0"></span>
                </div> */}
                </div>
              </div>
            </div>
          </section>
        </Element>
        <Element name="Skills">
          <section className=" skills font-rubik py-10 md:py-16">
            <div className="container max-w-screen-xl mx-auto px-4">
              <h1 className="font-medium text-gray-700 text-3xl md:text-4xl mb-5">
                Technical Skills
              </h1>
              <p className="font-normal text-gray-500 text-xs md:text-base mb-20">
                Technologies I'm currently working with
              </p>

              <div className="container max-w-screen-xl mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className=" px-8 py-10 rounded-md">
                    <h4 className="font-medium text-gray-700 text-2xl mb-9 ">
                      Front-End
                    </h4>
                    <div className=" flex justify-start  flex-wrap  gap-5 ">
                      <div className="  skill-buble rounded-[100px] py-2 px-4  flex  justify-center items-center">
                        <img src={html} className="w-5" alt="" />
                        <p className=" mx-2 font-medium text-gray-500 text-md">
                          Html
                        </p>
                      </div>

                      <div className=" skill-buble rounded-[100px] py-2 px-4 flex  justify-center items-center">
                        <img src={css} className="w-5" alt="" />
                        <p className=" mx-2 font-medium text-gray-500 text-md">
                          CSS
                        </p>
                      </div>

                      <div className=" skill-buble rounded-[100px] py-2 px-4 flex  justify-center items-center">
                        <img src={javaScript} className="w-6" alt="" />
                        <p className=" mx-2 font-medium text-gray-500 text-md">
                          JavaScript
                        </p>
                      </div>

                      <div className="skill-buble  rounded-[100px] py-2 px-4 flex  justify-center items-center">
                        <img src={react} className="w-5" alt="" />
                        <p className=" mx-2 font-medium text-gray-500 text-md">
                          React
                        </p>
                      </div>

                      <div className=" skill-buble rounded-[100px] py-2 px-4 flex  justify-center items-center">
                        <img src={nextjs} className="w-5" alt="" />
                        <p className=" inline-block mx-2 font-medium text-gray-500 text-md">
                          NextJS
                        </p>
                      </div>

                      <div className=" skill-buble rounded-[100px] py-2 px-4 flex  justify-center items-center">
                        <img src={typeScript} className="w-5" alt="" />
                        <p className=" mx-2 font-medium text-gray-500 text-md">
                          TypeScript
                        </p>
                      </div>

                      <div className="skill-buble  rounded-[100px] py-2 px-4 flex  justify-center items-center">
                        <img src={tailwindCSS} className="w-5" alt="" />
                        <p className=" mx-2 font-medium text-gray-500 text-md">
                          Tailwind CSS
                        </p>
                      </div>

                      <div className="skill-buble  rounded-[100px] py-2 px-4 flex  justify-center items-center">
                        <img src={bootstrap} className="w-5" alt="" />
                        <p className=" mx-2 font-medium text-gray-500 text-md">
                          Bootstrap
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className=" px-8 py-10 rounded-md">
                    <h4 className="font-medium text-gray-700 text-2xl mb-9 ">
                      Back-End
                    </h4>
                    <div className=" flex justify-start  flex-wrap  gap-5 ">
                      <div className="  skill-buble rounded-[100px] py-2 px-4  flex  justify-center items-center">
                        <img src={nodejs} className="w-7" alt="" />
                        <p className=" mx-2 font-medium text-gray-500 text-md">
                          Node JS
                        </p>
                      </div>

                      <div className=" skill-buble rounded-[100px] py-2 px-4 flex  justify-center items-center">
                        <img src={expressjs} className="w-7" alt="" />
                        <p className=" mx-2 font-medium text-gray-500 text-md">
                          Express JS
                        </p>
                      </div>

                      <div className=" skill-buble rounded-[100px] py-2 px-4 flex  justify-center items-center">
                        <img src={mongodb} className="w-7" alt="" />
                        <p className=" mx-2 font-medium text-gray-500 text-md">
                          MongoDB
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                  <div className="px-8 py-10 rounded-md mx-auto w-full md:col-span-2">
                    <h4 className="font-medium text-gray-700 text-2xl mb-9 ">
                      Tools
                    </h4>
                    <div className=" flex justify-start  flex-wrap  gap-5 ">
                      <div className="  skill-buble rounded-[100px] py-2 px-4  flex  justify-center items-center">
                        <img src={git} className="w-7" alt="" />
                        <p className=" mx-2 font-medium text-gray-500 text-md">
                          Git
                        </p>
                      </div>

                      <div className=" skill-buble rounded-[100px] py-2 px-4 flex  justify-center items-center">
                        <img src={github} className="w-7" alt="" />
                        <p className=" mx-2 font-medium text-gray-500 text-md">
                          GitHub
                        </p>
                      </div>

                      <div className=" skill-buble rounded-[100px] py-2 px-4 flex  justify-center items-center">
                        <img src={postman} className="w-7" alt="" />
                        <p className=" mx-2 font-medium text-gray-500 text-md">
                          Postman
                        </p>
                      </div>

                      <div className="skill-buble  rounded-[100px] py-2 px-4 flex  justify-center items-center">
                        <img src={figma} className="w-5" alt="" />
                        <p className=" mx-2 font-medium text-gray-500 text-md">
                          Figma
                        </p>
                      </div>

                      <div className=" skill-buble rounded-[100px] py-2 px-4 flex  justify-center items-center">
                        <img src={adobeIllustrator} className="w-5" alt="" />
                        <p className=" inline-block mx-2 font-medium text-gray-500 text-md">
                          Adobe illustrator
                        </p>
                      </div>

                      <div className=" skill-buble rounded-[100px] py-2 px-4 flex  justify-center items-center">
                        <img src={vsCode} className="w-5" alt="" />
                        <p className=" mx-2 font-medium text-gray-500 text-md">
                          VS code
                        </p>
                      </div>

                      <div className="skill-buble  rounded-[100px] py-2 px-4 flex  justify-center items-center">
                        <img src={vite} className="w-5" alt="" />
                        <p className=" mx-2 font-medium text-gray-500 text-md">
                          Vite
                        </p>
                      </div>

                      <div className="skill-buble  rounded-[100px] py-2 px-4 flex  justify-center items-center">
                        <img src={chakraUI} className="w-5" alt="" />
                        <p className=" mx-2 font-medium text-gray-500 text-md">
                          Chakra UI
                        </p>
                      </div>

                      <div className="skill-buble  rounded-[100px] py-2 px-4 flex  justify-center items-center">
                        <img src={shadCN} className="w-5" alt="" />
                        <p className=" mx-2 font-medium text-gray-500 text-md">
                          Shadcn
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </Element>
        <section className="py-10 md:py-16">
          <div className="container max-w-screen-xl mx-auto px-4">
            <h1 className="font-medium text-gray-700 text-3xl md:text-4xl mb-5">
              Attributes
            </h1>
            <p className="font-normal text-gray-500 text-xs md:text-base mb-20">
              MY STRENGTHS
            </p>

            <div className="container max-w-screen-xl mx-auto px-4">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-gray-50 px-8 py-10 rounded-md">
                  <div className="w-20 py-6 flex justify-center bg-gray-100 rounded-md mb-4">
                    <i data-feather="activity"></i>
                  </div>
                  <h4 className="font-medium text-gray-700 text-lg mb-4">
                    Communication
                  </h4>
                  <p className="font-normal text-gray-500 text-md">
                    I communicated technical information to a wide range of
                    stakeholders. I have led and coordinated teams, fostering
                    open communication channels and resolving conflicts to
                    achieve team goals.{" "}
                  </p>
                </div>
                <div className="bg-gray-50 px-8 py-10 rounded-md">
                  <div className="w-20 py-6 flex justify-center bg-gray-100 rounded-md mb-4">
                    <i data-feather="codesandbox"></i>
                  </div>
                  <h4 className="font-medium text-gray-700 text-lg mb-4">
                    Adaptability
                  </h4>
                  <p className="font-normal text-gray-500 text-md">
                    I quickly learned and adapted to new workflows and
                    information systems. As a nurse, I often wear multiple hats
                    while problem solving, and navigating complex situations
                    with accuracy and efficiency.{" "}
                  </p>
                </div>
                <div className="bg-gray-50 px-8 py-10 rounded-md">
                  <div className="w-20 py-6 flex justify-center bg-gray-100 rounded-md mb-4">
                    <i data-feather="users"></i>
                  </div>
                  <h4 className="font-medium text-gray-700 text-lg mb-4">
                    Collaboration
                  </h4>
                  <p className="font-normal text-gray-500 text-md">
                    I worked with cross-functional teams to deliver successful
                    project outcomes. I am a team player who leverages diverse
                    perspectives and skills to work collaboratively with
                    colleagues.{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Element name="Contact">
          <section className="  mt-24 pt-10 md:pt-16">
            <div className="container max-w-screen-xl mx-auto px-4">
              <div className="container max-w-screen-xl mx-auto px-4">
                <div className="flex flex-col  justify-center  items-center  text-center ">
                  <p className="workTogether  inline-block font-semibold py-4 text-4xl md:text-5xl lg:text-6xl ">
                    Let's work together.
                  </p>
                  <a
                    href="mailto:abderaoufa88@gmail.com@example.com"
                    className="social inTouch  cursor-pointer font-semibold pb-4 text-3xl md:text-4xl lg:text-5xl "
                  >
                    Get in touch.
                  </a>
                </div>
              </div>
            </div>
          </section>
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
