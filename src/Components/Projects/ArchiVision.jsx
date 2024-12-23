import img1 from "../../assets/images/archivision.png";

/* import { Button } from "@/components/ui/button";
import {
  DialogBody,
  DialogCloseTrigger,
  DialogContent,
  DialogHeader,
  DialogRoot,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"; */

function ArchiVision() {
  return (
    <>
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
              Technologies: Html, TailwindCSS, JavaScript, NextJS, Supabase.
            </li>
            <li className="text-tertiary text-[15px] pl-1 tracking-wider">
              Archi vision is an online platform that presents creative and
              innovative architectural projects. It helps you explore
              captivating architectural ideas and ignite your passion for
              architectural excellence.
            </li>
          </ul>
          <div className=" mt-10 ">
            <a
              href="https://github.com/Abderaouf16/CLA-Graduation-Project-2"
              target="_blank"
              className=" text-center text-sm rounded-md inline-block  px-5 py-[10px]  md:px-8 md:py-[10px]  font-light md:font-normal  text-black  "
              style={{
                backgroundColor: "rgba(232, 229, 228, 0.9)",
              }}
            >
              Repo
            </a>
            <a
              href="https://archivision.vercel.app/Home"
              target="_blank"
              className="  text-center text-sm rounded-md inline-block  px-5 py-[10px]  mx-4  md:px-8 md:py-[10px]  font-light md:font-normal  text-black "
              style={{
                backgroundColor: "rgba(232, 229, 228, 0.9)",
              }}
            >
              Demo
            </a>
            {/*   <DialogRoot
                        size="cover"
                        placement="center"
                        motionPreset="slide-in-bottom"
                      >
                        <DialogTrigger asChild>
                          <Button variant="outline" size="sm">
                            Open Dialog
                          </Button>
                        </DialogTrigger>
                        <DialogContent>
                          <DialogHeader>
                            <DialogTitle>Dialog Title</DialogTitle>
                            <DialogCloseTrigger />
                          </DialogHeader>
                          <DialogBody>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua.
                          </DialogBody>
                        </DialogContent>
                      </DialogRoot> */}
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

export default ArchiVision;
