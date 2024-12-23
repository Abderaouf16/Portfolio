import img2 from "../../assets/images/glamour.png";

function Glamour() {
  return (
    <>
      <div className=" flex flex-col lg:flex-row p-6 pb-16  border-black">
        <div className=" w-full lg:w-9/20  ">
          <img src={img2} alt="" className="h-[250px]" />
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
              Technologies: Firgma{" "}
            </li>
            <li className="text-tertiary text-[15px] pl-1 tracking-wider">
              Design and development UX/UI Mockup of a web application that
              allows users to purchase clothing of their preference.
            </li>
          </ul>
          <div className=" mt-10  ">
            {/*  <button
                        className=" text-center text-sm rounded-md inline-block  px-5 py-[10px]  md:px-8 md:py-[10px]  font-light md:font-normal  text-black  "
                        style={{
                          backgroundColor: "rgba(232, 229, 228, 0.9)",
                        }}
                      >
                        Repo
                      </button> */}
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
    </>
  );
}

export default Glamour;
