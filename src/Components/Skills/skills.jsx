import React from "react";

/*Tools */
import git from "../../assets/icons/git-icon.svg";
import github from "../../assets/icons/github.svg";
import vsCode from "../../assets/icons/visual studio code.svg";
import figma from "../../assets/icons/figma.svg";
import adobeIllustrator from "../../assets/icons/Adobe Illustrator.svg";
import photoshop from "../../assets/icons/photoshop.svg";

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
import postgresql from "../../assets/icons/postgresql.svg";


function Skills() {
  return (
    <>
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

                  <div className=" skill-buble rounded-[100px] py-2 px-4 flex  justify-center items-center">
                    <img src={postgresql} className="w-7" alt="" />
                    <p className=" mx-2 font-medium text-gray-500 text-md">
                    PostgreSQL
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
                    <img src={photoshop} className="w-6" alt="" />
                    <p className=" inline-block mx-2 font-medium text-gray-500 text-md">
                      Adobe photoshop
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
    </>
  );
}

export default Skills;
