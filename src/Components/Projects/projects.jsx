import React from "react";

import img1 from "../../assets/images/archivision.png";
import img2 from "../../assets/images/glamour.png";
import img3 from "../../assets/images/little lemon.png";

function Projects() {
  return (
    <>
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
                <div className=" flex flex-col lg:flex-row p-6 pb-16">
                  <div className=" w-full lg:w-9/20 border-gray-400  ">
                    <img className="" src={img1} alt="" />
                  </div>
                  <div className="w-full lg:w-11/20 flex flex-col px-4 md:pl-8 ">
                    <h3 className="text-xl font-semibold mb-2 text-secondary mt-2 md:mt-0 lg:mt-0">
                      Archi Vision{" "}
                      <span className="text-base  font-normal px-3 ">
                        (Updating current version)
                      </span>
                    </h3>
                    <ul className="max-w-3xl leading-[30px] list-disc ml-4">
                      <li className="text-tertiary text-[15px] pl-1 tracking-wider">
                        Technologies: Html, CSS, JavaScript, React, Nodejs,
                        ExpressJS, MongoDB
                      </li>
                      <li className="text-tertiary text-[15px] pl-1 tracking-wider">
                        Design and development of a complex web application for
                        architecture department students which allows them to
                        save their study projects and contribute them with the
                        community
                      </li>
                    </ul>
                    <div className=" mt-10 ">
                      <a
                        href="https://github.com/Abderaouf16/CLA-Graduation-Project"
                        target="_blank"
                        className=" text-center text-sm rounded-md inline-block  px-5 py-[10px]  md:px-8 md:py-[10px]  font-light md:font-normal  text-black  "
                        style={{
                          backgroundColor: "rgba(232, 229, 228, 0.9)",
                        }}
                      >
                        Repo
                      </a>
                      <a
                        href="https://daa-test.vercel.app"
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

                <div className=" flex flex-col lg:flex-row p-6 pb-16  border-black">
                  <div className=" w-full lg:w-9/20  ">
                    <img src={img2} alt=""  className="h-[250px]"/>
                  </div>
                  <div className="w-full lg:w-11/20 flex flex-col px-4 md:pl-8 ">
                    <h3 className="text-xl font-semibold mb-2 text-secondary mt-2 md:mt-0 lg:mt-0">
                      Glamour{" "}
                      <span className="text-base  font-normal px-3 ">
                        (currently working on)
                      </span>
                    </h3>
                    <ul className="max-w-3xl leading-[30px] list-disc ml-4">
                      <li className="text-tertiary text-[15px] pl-1 tracking-wider">
                        Technologies: Html, CSS, JavaScript, NextJS, ShadcnUI,
                        Nodejs, ExpressJS, MongoDB{" "}
                      </li>
                      <li className="text-tertiary text-[15px] pl-1 tracking-wider">
                        Design and development of a web application that allows
                        users to purchase clothing of their preference
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
                        href="https://www.figma.com/proto/wnM1o1gLZFgyexxwxDWRyY/Clothing-E-commerce-website?node-id=39-7&t=wuC1h9yfj2TiT5mU-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=39%3A7"
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

                <div className=" flex flex-col lg:flex-row p-6 ">
                  <div className=" w-full lg:w-9/20 ">
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
                        Developed Website Landing Page creating and optimizing
                        content for the website using a variety of graphics,
                        databases, animations and other functionality.
                      </li>
                    </ul>
                    <div className=" mt-10 ">
                      <a
                        href="https://github.com/Abderaouf16/Coursera-Font-end-capstone-project"
                        target="_blank"
                        className=" text-center text-sm rounded-md inline-block  px-5 py-[10px]  md:px-8 md:py-[10px]  font-light md:font-normal  text-black  "
                        style={{
                          backgroundColor: "rgba(232, 229, 228, 0.9)",
                        }}
                      >
                        Repo
                      </a>
                      <a
                        href="https://littellemon.vercel.app"
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
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Projects;
