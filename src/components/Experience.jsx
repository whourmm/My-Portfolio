import * as React from "react";
import { textVariant, textVariant3 } from "../utils/motion";
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { experiences } from "../constants/index.js";
import schoolIcon from "../assets/school.svg";
import workIcon from "../assets/work.svg";
import { styles } from "../styles";

const Timeline = () => {
  return (
    <div className="block">
      <div className=" mt-[-800px] xs:mt-0 ">
        <p className={`${styles.sectionSubText} ml-6`}>
          My recent achievements
        </p>
        <h2 className={`${styles.sectionHeadText} ml-6`}>Experience</h2>
      </div>
      <div className="mt-10">
        {experiences.map((element, i) => {
          const colors = [
            "bg-red-500",
            "bg-blue-500",
            "bg-yellow-500",
            "bg-purple-500",
            "bg-orange-500",
          ];

          const color = `bg-${element.color}-500`;

          return (
            <motion.div
              variants={textVariant(0.5 * i + 3)}
              initial="initial"
              animate="animate"
              style={{ transform: "translateZ(0)" }}
              className="block flex justify-center items-center"
              key={element.id}
            >
              <div key={element.id} className="flex m-5 relative ">
                <div
                  className={`${color} w-0.5 h-5 translate-x-10 translate-y-56 opacity-60 sm:hidden`}
                ></div>
                <div
                  className={`${color} w-0.5 h-6 translate-x-80 translate-y-56 opacity-60 sm:hidden`}
                ></div>
                <div className="hidden items-start w-44 pt-0.5 relative sm:flex">
                  <div className="w-4/5 text-gray-500">{element.date}</div>
                  <div
                    className={`${color} w-px h-full translate-x-5 translate-y-10 opacity-30`}
                  ></div>
                  <img
                    src={element.icon === "school" ? schoolIcon : workIcon}
                    alt="icon"
                    className={`${color} w-5 xs:w-10 p-1 rounded-lg z-20`}
                  />
                  <div
                    className={`${color} h-px w-8 translate-y-5 opacity-30`}
                  ></div>
                </div>
                <div className="border border-gray-600 rounded-lg px-8 py-4 bg-gray-800 w-full text-center z-10 lg:w-[1000px]">
                  <div className="sm:text-xl font-medium ">{element.title}</div>
                  <div className="text-gray-300 mb-6 sm:mb-8 sm:text-xs">
                    {element.location}
                    <span className="sm:hidden">| {element.date}</span>
                  </div>
                  <div className="justify-center flex ">
                    <img
                      src={element.image}
                      alt="logo"
                      className="block sm:hidden sm:w-[400px] sm:h-[120px] h-[100px] w-[120px] mt-[-10px] mb-[10px] object-contain "
                    />
                  </div>
                  <div className=" grid grid-cols-2 sm:gap-5 gap-[-100px]">
                    <div className="">
                      <div className="hidden sm:block mb-4 text-center font-extralight sm:text-[15px] text-[14px] ">
                        {element.description}
                      </div>
                    </div>
                    <div className="justify-center flex ">
                      <img
                        src={element.image}
                        alt="logo"
                        className="hidden sm:block sm:w-[400px] sm:h-[120px] h-[100px] w-[120px] mt-[-10px] mb-[10px] object-contain "
                      />
                    </div>
                  </div>

                  <div className="hidden sm:block flex flex-wrap mb-1 xs:mt-[-50px] sm:mt-5 lg:mt-5 justify-center items-center ">
                    {element.tech.map((tech, index) => {
                      return (
                        <span
                          key={index}
                          className="bg-gray-900 rounded-xl px-2 py-1 text-sm "
                        >
                          {tech}
                        </span>
                      );
                    })}
                  </div>

                  <div className="  block sm:hidden  flex flex-wrap mb-1 sm:mt-[-50px] mt-[-10px] justify-center items-center ">
                    {element.tech.map((tech, index) => {
                      return (
                        <span
                          key={index}
                          className="bg-gray-900 rounded-xl px-2 py-1 text-sm m-1 sm:text-[20px] text-[12px]"
                        >
                          {tech}
                        </span>
                      );
                    })}
                  </div>
                  <img
                    src={element.icon === "school" ? schoolIcon : workIcon}
                    alt="icon"
                    className={`${color} w-6 xs:w-8 p-1 rounded-lg z-20 absolute left-4 top-4 sm:hidden`}
                  />
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default SectionWrapper(Timeline, "experience");
