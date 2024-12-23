import img4 from "../../assets/images/archi vision.png";

function ArchiWorld() {
  return (
    <>
      <div className=" flex flex-col lg:flex-row p-6   border-black">
        <div className=" w-full lg:w-9/20  ">
          <img src={img4} alt="" className="" />
        </div>
        <div className="w-full lg:w-11/20 flex flex-col px-4 md:pl-8 ">
          <h3 className="text-xl font-semibold mb-2 text-secondary mt-2 md:mt-0 lg:mt-0">
            Archi World{" "}
            <span className="text-base  font-normal px-3 ">
              (Bootcamp graduation project)
            </span>
          </h3>
          <ul className="max-w-3xl leading-[30px] list-disc ml-4">
            <li className="text-tertiary text-[15px] pl-1 tracking-wider">
              Technologies: Html, CSS, JavaScript, ReactJs, Nodejs, ExpressJS,
              MongoDB{" "}
            </li>
            <li className="text-tertiary text-[15px] pl-1 tracking-wider">
              Design and development of a complex web application for
              architecture department students which allows them to save their
              study projects and contribute them with the community.
            </li>
          </ul>
          <div className=" mt-10  ">
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
              href=""
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
    </>
  );
}

export default ArchiWorld;
