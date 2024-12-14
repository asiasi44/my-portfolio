import Image from "next/image";
import linkedin from "@/app/icons/myphoto.png";
import { BsArrow90DegLeft } from "react-icons/bs";

export default function Home() {
  return (
    <div className="bg-white flex text-black w-full justify-between">
      <div className="">
        <Image
          src={linkedin}
          alt="my image"
          width={815}
          height={611}
          className="object-contain"
        />
      </div>
      <BsArrow90DegLeft
        className="absolute top-32 -rotate-12 right-[42rem]"
        size={60}
      />
      <div className="w-2/4 flex items-right justify-center flex-col mx-9 gap-16">
        <div className="text-[40px] text-start">this is me</div>
        <div className="text-[30px]">
          i am a web developer with a growing passion for machine learning,
          aspiring to be a ml engineer.
        </div>
        <div className="text-[25px]">
          Combining My web development expertise with a keen interest in
          data-driven technologies, I aim to create solutions that bridge the
          gap between intuitive design and intelligent systems.
        </div>
      </div>
    </div>
  );
}
