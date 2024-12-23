import ArchiVision from "../ArchiVision";
import ArchiWorld from "../ArchiWorld";
import Glamour from "../Glamour";
import LittleLemon from "../LittleLemon";

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
                <ArchiVision />

                <Glamour />

                <LittleLemon />

                <ArchiWorld />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Projects;
