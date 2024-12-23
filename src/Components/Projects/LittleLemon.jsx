import img3 from "../../assets/images/little lemon.png";

function LittleLemon() {
  return (
    <>
      <div className=" flex flex-col lg:flex-row p-6 pb-16">
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
              Developed Website Landing Page creating and optimizing content for
              the website using a variety of graphics, databases, animations and
              other functionality.
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
    </>
  );
}

export default LittleLemon;
