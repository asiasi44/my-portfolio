import Link from "next/link";

const Contact = () => {
  return (
    <div className="flex flex-col justify-center items-center text-[30px] gap-16 my-24">
      <div className="font-bold">
        number: <span className="font-thin">+977 9860172109</span>
      </div>
      <div className="font-bold">
        email: <span className="font-thin">bipulp49@gmail.com</span>
      </div>
      <div className="font-bold">
        instagram:{" "}
        <Link
          href={"https://www.instagram.com/asimpoudel34"}
          className="underline font-thin"
          target="_blank"
        >
          @asimpoudel34
        </Link>
      </div>
    </div>
  );
};

export default Contact;
