import { BiCameraMovie } from "react-icons/bi";
import Link from "next/link";

const Hobbies = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="text-[35px]">Hobbies</div>
      <div className="flex flex-col gap-2">
        <div>
          <div className="text-[30px]">Movies</div>
          <div className="text-[25px] flex items-center gap-8">
            I love watching Movies. I would love to make them someday. Here are
            my Favorite Movies Check It out{" "}
            <Link href="https://boxd.it/3bq0V" target="_blank">
              <BiCameraMovie size={30} />
            </Link>
          </div>
        </div>
        <div>
          <div className="text-[30px]">Playing the guitar</div>
          <div className="text-[25px]">
            I have been playing guitar for over seven years, finding joy and
            relaxation in its melodies as a way to unwind and rejuvenate
          </div>
        </div>
        <div>
          <div className="text-[30px]">mindfulness</div>
          <div className="text-[25px]">
            I embrace mindfulness as a way to find balance and clarity, viewing
            it as a practice to cultivate joy and presence in everyday life.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hobbies;
