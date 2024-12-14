import { FaBirthdayCake } from "react-icons/fa";
import { FaSchool } from "react-icons/fa";
import { IoSchoolSharp } from "react-icons/io5";
import { LuSchool } from "react-icons/lu";

const Timeline = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="flex flex-col items-center gap-3 text-[20px]">
        <div>06/11/2002</div>
        <FaBirthdayCake size={50} />
        <div>
          Born in Bharatpur, <div>chitwan</div>
        </div>
      </div>
      <div className="relative bottom-2 h-0.5 bg-white w-[146px]"></div>
      <div className="flex flex-col items-center gap-3 text-[20px]">
        <div>Till 2019</div>
        <LuSchool size={50} />
        <div>
          Grade 10 examination from <div>paragon public school</div>
        </div>
      </div>
      <div className="relative bottom-2 h-0.5 bg-white w-[146px]"></div>
      <div className="flex flex-col items-center gap-3 text-[20px]">
        <div>2019-2022</div>
        <FaSchool size={50} />
        <div>
          Grade 12 Examination From <div>Kathmandu Model College</div>
        </div>
      </div>
      <div className="relative bottom-2 h-0.5 bg-white w-[146px]"></div>
      <div className="flex flex-col items-center gap-3 text-[20px]">
        <div>2022-Current</div>
        <IoSchoolSharp size={50} />
        <div>
          B.Sc CSIT At Deerwalk<div> Institute of Technology</div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;