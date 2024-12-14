import Hobbies from "@/components/Hobbies";
import Timeline from "@/components/Timeline";

const About = () => {
  return (
    <div className="m-16">
        <Timeline/>
      <div className="flex flex-col items-center my-16">
        <Hobbies/>
      </div>
    </div>
  );
};

export default About;
