import React, { useEffect, useLayoutEffect, useState } from "react";
import "tailwindcss/tailwind.css";
import feather from "feather-icons";
import abdou from "../../assets/images/Abdou.jpg";
import nameLogo from "../../assets/nameLogo/nameLogo.svg";
import { annotate, annotationGroup } from "rough-notation";
import githubIcon from "../../assets/icons/github.svg";
import linkedinIcon from "../../assets/icons/linkedin.svg";
import coryRightIcon from "../../assets/icons/copyright.svg"
import cv from "../../assets/CV/khamoum abderraouf.pdf";
import { Element } from "react-scroll";
import { Link } from "react-scroll";
import Headroom from "react-headroom";
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

  const [activeLink, setActiveLink] = useState('aboutMe');

  const handleSetActive = (link) => {
    setActiveLink(link);
  };


  return (
    <>
    <div className="bg-white   px-4 md:px-24 xl:px-56 ">
      <nav className=" flex   z-50 sticky  top-5 w-full rounded-[100px] px-3 py-2  flex items-center justify-between">
        <img
          src={nameLogo}
          className=" cursor-pointer flex justify-center items-center  w-10"
          alt="Logo"
        />
        <div className="flex">
            <Link
          to="aboutMe"
          spy={true}
          smooth={true}
          offset={-70}
          duration={900}
          className={`cursor-pointer rounded-[100px] text-center px-6 py-3 font-medium text-black text-[13px] flex items-center justify-center ${activeLink === 'aboutMe' ? 'activeBtn' : ''}`}
          onClick={() => handleSetActive('aboutMe')}
        >
          About me
        </Link>

          <Link
            
            to="Projects"
            spy={true}
            smooth={true}
            offset={-70}
            duration={900}
            className={`cursor-pointer rounded-[100px] text-center px-6 py-3 font-medium text-black text-[13px] flex items-center justify-center ${activeLink === 'Projects' ? 'activeBtn' : ''}`}
          onClick={() => handleSetActive('Projects')}       >
            Projects
          </Link>

          <Link
            
            to="Education"
            spy={true}
            smooth={true}
            offset={-70}
            duration={900}
            className={`cursor-pointer rounded-[100px] text-center px-6 py-3 font-medium text-black text-[13px] flex items-center justify-center ${activeLink === 'Education' ? 'activeBtn' : ''}`}
            onClick={() => handleSetActive('Education')}          >
            Education
          </Link>

          <Link
            to="Contact"
            spy={true}
            smooth={true}
            offset={-70}
            duration={900}
            className={`cursor-pointer rounded-[100px] text-center px-6 py-3 font-medium text-black text-[13px] flex items-center justify-center ${activeLink === 'Contact' ? 'activeBtn' : ''}`}
            onClick={() => handleSetActive('Contact')}  
          >
            Contact
          </Link>
        </div>
      </nav>
      <Element name="aboutMe">
        <section className=" w-full pt-2 ">
          <div className="container max-w-screen-xl mx-auto  mt-28 ">
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
                    <span id="e4">architecture</span> school and working with it
                    softwares made me wonder how they design & built it, This
                    curiosity pushed me to start a career as a full-stask
                    developer.
                  </p>
                  <p className="mb-2">
                    I was a student at Code labs academy School where I spent 10
                    months learning the fundamentals of{" "}
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
                    <img src={githubIcon} className=" w-5 inline ml-3" alt="" />
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
              <div className="mb-10 lg:mb-0">
                <h1 className="font-medium text-gray-700 text-3xl md:text-3xl mb-3">
                  Projects & Experience
                </h1>
                <p className="font-normal text-gray-500 text-xs md:text-base">
                  Some of the side projects I'm currently working on.
                </p>
              </div>
              <div className="space-y-24">
                <div className="flex space-x-6">
                  <h1 className="font-normal text-gray-700 text-3xl md:text-4xl">
                    01
                  </h1>
                  <span className="w-28 h-0.5 bg-gray-300 mt-5"></span>
                  <div>
                    <h1 className="font-normal text-gray-700 text-3xl md:text-4xl mb-5">
                      Full stack Ecommerce website
                    </h1>
                    <p className="font-normal text-gray-500 text-sm md:text-base">
                      Designed and created a clothing Ecommerce website using
                      React, Node.js,
                      <br /> Express, MongoDB, and Stripe payment gateway.
                    </p>
                  </div>
                </div>
                <div className="flex space-x-6">
                  <h1 className="font-normal text-gray-700 text-3xl md:text-4xl">
                    02
                  </h1>
                  <span className="w-28 h-0.5 bg-gray-300 mt-5"></span>
                  <div>
                    <h1 className="font-normal text-gray-700 text-3xl md:text-4xl mb-5">
                      Restaurant Landing page
                    </h1>
                    <p className="font-normal text-gray-500 text-sm md:text-base">
                      I created a responsive landing page for a Restaurant using
                      HTML, CSS and JavaScript
                      <br /> and using React in relation to JavaScript libraries
                      and frameworks.
                    </p>
                  </div>
                </div>
                <div className="flex space-x-6">
                  <h1 className="font-normal text-gray-700 text-3xl md:text-4xl">
                    03
                  </h1>
                  <span className="w-28 h-0.5 bg-gray-300 mt-5"></span>
                  <div>
                    <h1 className="font-normal text-gray-700 text-3xl md:text-4xl mb-5">
                      Graduation Project
                    </h1>
                    <p className="font-normal text-gray-500 text-sm md:text-base">
                      Created a platform for my Architecture school where
                      students <br /> can save and share their projects with the
                      community.
                    </p>
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
                <h2 className="font-medium text-gray-600 text-sm mb-2">Meta</h2>
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
                  program focuses on self-directed technical training in coding
                  and web design as well as Capstone Project.
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
                  stakeholders. I have led and coordinated teams, fostering open
                  communication channels and resolving conflicts to achieve team
                  goals.{" "}
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
                  I quickly learned and adapted to new workflows and information
                  systems. As a nurse, I often wear multiple hats while problem
                  solving, and navigating complex situations with accuracy and
                  efficiency.{" "}
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
            <div className="flex flex-col  justify-center  items-center ">
             <p className='workTogether font-semibold py-4 text-4xl md:text-5xl lg:text-6xl '>Let's work together.</p>
             <p className='social inTouch font-semibold pb-4 text-3xl md:text-4xl lg:text-5xl '>Get in touch.</p>
            </div>
            
          </div>
        </div>
      </section>
      </Element>
    </div>
    <div className="flex  my-8  mx-11 justify-between items-center mt-64">

            <div className="brand flex items-center font-medium text-black text-sm">
            <img className='cursor-pointer flex justify-center items-center  w-10' src={nameLogo} alt="" />
            <img src={coryRightIcon}  className='w-3 ml-3  mr-2' alt="" />
            <p>Khamoum Abderraouf 2024</p>
          </div>

          <div className="socials flex justify-center items-center font-medium text-black text-sm ">
            <a className='social'  href="https://www.instagram.com/abdou.khmm/">Instagram</a>
            <a  className=' social px-3' href=" https://www.linkedin.com/in/abderaouf-khamoum-657527260/">LinkedIn</a>
            <a className='social' href="">Mail</a>
          </div>
          

            </div>
    </>
  );
};

export default App;
