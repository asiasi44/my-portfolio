import Image from "next/image";
import datacamp from "@/app/icons/datacamp.png";
import fullstackopen from "@/app/icons/fullstackopen.png";
import cs229 from "@/app/icons/cs229.png";
import Link from "next/link";

const Certifications = () => {
  return (
    <div className="my-16 flex flex-col gap-12">
      <div className="text-[35px]">Certification and Courses</div>
      <div className="flex flex-col gap-12">
        <div className="flex flex-col gap-6">
          <div className="text-[30px]">full stack open</div>
          <div className="flex text-[25px] gap-12 items-center">
            <Link
              href={
                "https://studies.cs.helsinki.fi/stats/api/certificate/fullstackopen/en/663ea48f5d78a3067fef1f5de797e486"
              }
              target="_blank"
            >
              <Image
                src={fullstackopen}
                width={480}
                height={336}
                alt="fulstackopen"
                className="grayscale"
              />
            </Link>
            <ul className="list-disc">
              <li>
                Gained hands-on experience with modern web technologies
                including React, Node.js, Express, MongoDB, and GraphQL.
              </li>
              <li>
                Developed full-stack applications with a focus on building
                scalable and efficient software.
              </li>
              <li>
                Acquired proficiency in RESTful and GraphQL APIs, state
                management, and advanced backend techniques.
              </li>
              <li>
                Enhanced debugging, testing, and deployment workflows in a
                real-world development environment.
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <div className="text-[30px]">
            Data Analysis and Python Skills (DataCamp)
          </div>
          <div className="flex text-[25px] gap-12 items-center">
            <Image
              src={datacamp}
              width={485}
              height={274}
              alt="datacamp"
              className="grayscale"
            />
            <ul className="list-disc">
              <li>
                Completed the Data Analyst in Python course and specialized
                training in web scraping, data science, hypothesis testing, and
                advanced data visualization.
              </li>
              <li>
                Completed the Data Analyst in Python course and specialized
                training in web scraping, data science, hypothesis testing, and
                advanced data visualization.
              </li>
              <li>
                Developed strong analytical skills using Python libraries such
                as Pandas, NumPy, Matplotlib, and Seaborn. Proficient in
                extracting, processing, and visualizing data to generate
                actionable insights and reports.
              </li>
              <li>
                Enhanced understanding of statistical methods and hypothesis
                testing for data-driven decision-making.
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <div className="text-[30px]">
            Stanford CS229: Machine Learning (In Progress)
          </div>
          <div className="flex text-[25px] gap-12 items-center">
            <Link
              href={
                "https://www.youtube.com/playlist?list=PLoROMvodv4rMiGQp3WXShtMGgzqpfVfbU"
              }
              target="_blank"
            >
              <Image
                src={cs229}
                width={480}
                height={336}
                alt="cs229"
                className="grayscale"
              />
            </Link>

            <ul className="list-disc">
              <li>
                Currently studying under Andrew Ng's renowned course, In
                Youtube, delving into foundational and advanced topics in
                machine learning.
              </li>
              <li>
                Learning theoretical principles and practical applications in
                supervised, unsupervised, and reinforcement learning.
              </li>
              <li>
                Aspiring to become a proficient and impactful contributor in the
                field of machine learning.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certifications;
