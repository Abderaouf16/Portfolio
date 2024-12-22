


import githubIcon from "../../assets/icons/github.svg";
import linkedinIcon from "../../assets/icons/linkedin.svg";
import cv from "../../assets/CV/khamoum_abderraouf_cv.pdf";
import abdou from "../../assets/images/Abdou.jpg";




function AboutMe() {
  return (
    <>
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
    </>
  )
}

export default AboutMe
