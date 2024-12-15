const Footer = () => {
  return (
    <div className="h-[14rem] flex justify-between items-center mx-12 responsive-margin">
      <div className="flex flex-col gap-8 text-3xl responsive-hidden">
        Currently a student at <div>deerwalk institude of technology</div>
      </div>
      <div className="font-sans flex flex-col gap-8 text-2xl">
        <div>
          <span className="font-bold">email: </span>
          <span className="font-thin">bipulp49@gmail.com</span>
        </div>
        <div>Copyright Asim Poudel. All rights reserved</div>
      </div>
    </div>
  );
};

export default Footer;
