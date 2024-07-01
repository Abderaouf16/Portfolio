import React, { useEffect } from "react";
import "tailwindcss/tailwind.css";
import feather from "feather-icons";
import abdou from "../../assets/images/Abdou.jpg";
import nameLogo from "../../assets/nameLogo/nameLogo.svg";
const App = () => {
  useEffect(() => {
    feather.replace();
  }, []);

  return (
    <div className="bg-gray-100   px-4 md:px-24 xl:px-56 ">
      <section className=" py-2 ">
        <div className="container max-w-screen-xl mx-auto  ">
          <nav className="flex items-center justify-between   mb-28">
            <img src={nameLogo} className="   w-16" alt="Logo" />
            <ul className="flex  ">
              <li className="  px-6 py-2 font-medium md:font-semibold text-gray-700 text-md rounded-md hover:bg-gray-700 hover:text-white transition ease-linear duration-500">
                {" "}
                <a href="">About</a>{" "}
              </li>
              <li className="  px-6 py-2  font-medium md:font-semibold text-gray-700 text-md rounded-md hover:bg-gray-700 hover:text-white transition ease-linear duration-500">
                {" "}
                <a href="">Projects</a>{" "}
              </li>
              <li className="  px-6 py-2  font-medium md:font-semibold text-gray-700 text-md rounded-md hover:bg-gray-700 hover:text-white transition ease-linear duration-500">
                {" "}
                <a href="">Education</a>{" "}
              </li>
              <li className="  px-6 py-2 font-medium md:font-semibold text-gray-700 text-md rounded-md hover:bg-gray-700 hover:text-white transition ease-linear duration-500">
                <a href="">Contact</a>{" "}
              </li>
              <div className="animation start-home"></div>
            </ul>
          </nav>
          <div className=" flex font-rubik  ">
            <div className="flex-1 md:mr-20 ">
              <h6 className=" font-rubik font-extrabold text-gray-600 text-lg md:text-3xl  mb-8">
                Hello ! I’m Abderraouf, a full stack developer bassed in Algeria
              </h6>
              <h1 className="font-normal text-gray-900 text-4xl md:text-7xl leading-none mb-8"></h1>
              <div className="font-normal text-gray-600 text-md md:text-base mb-16">
                <p className="mb-2">
                  I love building tools that are user-friendly, simple and
                  delightful.
                </p>
                <p className="mb-2">
                  {" "}
                  My journey of coding started when entering architecture school
                  and working with it softwares made me wonder how they design &
                  built it, This curiosity pushed me to start a career as a
                  full-stask developer.
                </p>
                <p className="mb-2">
                  I was a student at Code labs academy School where I spent 10
                  months learning the fundamentals of front-end and back-end web
                  development and also the essential skills to succeed in this
                  field
                </p>
                <p className="mb-2">
                  I'm currently looking for a new role as a developer. Hire me?
                </p>
              </div>
              <a
                href="#"
                className="px-7 py-3 md:px-9 md:py-4 font-medium md:font-semibold bg-gray-700 text-gray-50 text-sm rounded-md hover:bg-gray-50 hover:text-gray-700 transition ease-linear duration-500"
              >
                Hire me
              </a>
            </div>
            <div className="flex   justify-center mb-16    ">
              <img
                src={abdou}
                className="    w-[280px]   h-72  rounded-3xl"
                alt="Image"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 md:py-16">
        <div className="container max-w-screen-xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row justify-between">
            <div className="mb-10 lg:mb-0">
              <h1 className="font-medium text-gray-700 text-3xl md:text-4xl mb-5">
                Projects & Experience
              </h1>
              <p className="font-normal text-gray-500 text-xs md:text-base">
                I have brought here my biggest and favorite works <br /> as a
                professional.
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
                    Created a platform for my Architecture school where students{" "}
                    <br /> can save and share their projects with the community.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 md:py-16">
        <div className="container max-w-screen-xl mx-auto px-4">
          <h1 className="font-medium text-gray-700 text-3xl md:text-4xl mb-5">
            Education
          </h1>
          <p className="font-normal text-gray-500 text-xs md:text-base mb-20">
            Below is a summary of the places I studied
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gray-50 px-8 py-10 rounded-md">
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
              <div className="relative">
                <h6 className="font-semibold text-gray-500 text-md relative z-10">
                  See the place here
                </h6>
                <span className="w-32 h-1 bg-blue-200 absolute bottom-1 left-0 z-0"></span>
              </div>
            </div>
            <div className="bg-gray-50 px-8 py-10 rounded-md">
              <h4 className="font-medium text-gray-700 text-lg mb-1">
                Meta Front-End Developer
              </h4>
              <h2 className="font-medium text-gray-600 text-sm mb-2">Meta</h2>
              <h2 className="font-medium text-gray-600 text-sm mb-3">
                Jun 2023- Jan 2024
              </h2>
              <p className="font-normal text-gray-500 text-md mb-4">
                This is a training that consists of front-end development, UI/UX
                design, React Native development <br />
                and web development in general.
              </p>
              <div className="relative">
                <h6 className="font-semibold text-gray-500 text-md relative z-10">
                  See the place here
                </h6>
                <span className="w-32 h-1 bg-blue-200 absolute bottom-1 left-0 z-0"></span>
              </div>
            </div>
            <div className="bg-gray-50 px-8 py-10 rounded-md">
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
              <div className="relative">
                <h6 className="font-semibold text-gray-500 text-md relative z-10">
                  See the place here
                </h6>
                <span className="w-32 h-1 bg-blue-200 absolute bottom-1 left-0 z-0"></span>
              </div>
            </div>
          </div>
        </div>
      </section>

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
    </div>
  );
};

export default App;
