import Image from "next/image";
import tedx from "@/app/icons/tedx.png";
import mobilelogin from "@/app/icons/mobilelogin.jpg";
import mobilesidebar from "@/app/icons/mobilesidebar.jpg";
import laravelnotice from "@/app/icons/laravelnotice.png";
import pdfform from "@/app/icons/pdfform.png";
import pdfoutput from "@/app/icons/pdfoutput.png";
import attendance from "@/app/icons/attendance.png";
import schoolform from "@/app/icons/schoolform.png";
import schoolwebsite from "@/app/icons/schoolwebsite.png";
import { FaReact } from "react-icons/fa";
import { RiNodejsLine } from "react-icons/ri";
import { TbBrandLaravel } from "react-icons/tb";
import { IoArrowRedoOutline } from "react-icons/io5";
import { RiNextjsFill } from "react-icons/ri";

const Projects = () => {
  return (
    <div className="flex flex-col gap-12 justify-items">
      <div className="text-[2.2rem] responsive-topic-font">Projects</div>
      <div className="flex justify-around gap-12 flex-wrap">
        <div className="flex flex-col gap-6 items-center">
          <div>
            <Image
              src={tedx}
              alt="dmt image"
              width={400}
              height={200}
              className=" flex grayscale justify-center items-center"
            />
          </div>
          <div className="text-[30px] responsive-subtopic-font">Tedxdwit</div>
          <div className="flex gap-12">
            <FaReact size={30} />
            <RiNodejsLine size={30} />
          </div>
        </div>
        <div className="flex flex-col gap-6 items-center">
          <div className="flex gap-2 responsive-flex-wrap">
            <Image
              src={mobilelogin}
              alt="mobile login"
              width={120}
              height={245}
              className=" flex grayscale justify-center items-center"
            />
            <Image
              src={mobilesidebar}
              alt="mobile sidebar"
              width={120}
              height={245}
              className=" flex grayscale justify-center items-center"
            />
            <Image
              src={laravelnotice}
              alt="laravel notice"
              width={363}
              height={200}
              className=" flex grayscale justify-center items-center"
            />
          </div>
          <div className="text-[30px] responsive-subtopic-font">
            Mobile Application Integrated With Laravel
          </div>
          <div className="flex gap-12">
            <FaReact size={30} />
            <TbBrandLaravel size={30} />
          </div>
        </div>
        <div className="flex flex-col gap-6 items-center mt-6">
          <div className="flex gap-2 items-center responsive-flex-wrap">
            <Image
              src={pdfform}
              alt="marriage form"
              width={394}
              height={212}
              className=" flex grayscale justify-center items-center"
            />
            <IoArrowRedoOutline size={30} />
            <Image
              src={pdfoutput}
              alt="marriage certificate"
              width={378}
              height={163}
              className=" flex grayscale justify-center items-center"
            />
          </div>
          <div className="text-[30px] responsive-subtopic-font">Pdf Editor With Laravel</div>
          <div className="flex gap-12 text-[25px]">
            <div>Fpdf</div>
            <div>Fpdi</div>
            <TbBrandLaravel size={30} />
          </div>
        </div>
        <div className="flex flex-col gap-6 items-center mt-6">
          <div>
            <Image
              src={attendance}
              alt="attendance system"
              width={400}
              height={200}
              className=" flex grayscale justify-center items-center"
            />
          </div>
          <div className="text-[30px] responsive-subtopic-font">Attendance Management System</div>
          <div className="flex gap-12">
            <RiNextjsFill size={30} />
            <RiNodejsLine size={30} />
          </div>
        </div>
        <div className="flex flex-col gap-6 items-center mt-6">
          <div className="flex gap-2 items-center responsive-flex-wrap">
            <Image
              src={schoolform}
              alt="school form"
              width={364}
              height={200}
              className=" flex grayscale justify-center items-center"
            />
            <IoArrowRedoOutline size={30} />
            <Image
              src={schoolwebsite}
              alt="school website"
              width={363}
              height={200}
              className=" flex grayscale justify-center items-center"
            />
          </div>
          <div className="text-[30px] responsive-subtopic-font">Form To Website Creator</div>
          <div className="flex gap-12 text-[25px]">
            <RiNextjsFill size={30} />
            <RiNodejsLine size={30} />
            <FaReact size={30} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
