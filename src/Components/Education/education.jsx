import React from 'react'
import { Element } from 'react-scroll'



function Education() {
  return (
    <div>
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
        
    </div>
  )
}

export default Education
