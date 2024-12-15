import dmt from "@/app/icons/dmt.jpeg";
import Image from "next/image";

const WorkExperience = () => {
  return (
    <div className="flex flex-col gap-6 my-16 responsive-small-top-margin">
      <div className="text-[2.2rem] responsive-topic-font">Work experience</div>
      <div className="flex responsive-show">
        <div className="text-[30px] w-1/3 flex flex-col justify-center items-center responsive-full-width responsive-subtopic-font">
          Digital media team <div>11/2022 - 11/2023</div>
        </div>
        <div className="w-1/3 responsive-full-width">
          <Image
            src={dmt}
            alt="dmt image"
            width={384}
            height={256}
            className=" flex grayscale justify-center items-center"
          />
        </div>
        <div className="w-1/3 text-[20px] flex flex-col justify-center items-center responsive-full-width responsive-description-font">
          Managed and maintained websites integral to the operations of the
          college, ensuring seamless functionality and reliability. Worked on
          projects utilizing Core PHP, Laravel, React, and Node.js, gaining
          hands-on experience in full-stack development. Collaborated with the
          IT department to address networking and hosting issues, ensuring
          smooth website operations. Implemented updates, resolved bugs, and
          optimized site performance for user efficiency.
        </div>
      </div>
    </div>
  );
};

export default WorkExperience;
