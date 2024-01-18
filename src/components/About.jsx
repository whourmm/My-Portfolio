import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[250px] w-full">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[2px] rounded-full shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary rounded-full py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <img
          src={icon}
          alt="web-development"
          className="w-16 h-16 object-contain"
        />

        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()} className=" ">
        <p className={`${styles.sectionSubText} ml-6`}>Introduction</p>
        <h2 className={`${styles.sectionHeadText} ml-6`}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 ml-6 text-secondary text-[17px] max-w-screen leading-[30px]"
      >
        Diligent and Passionate student from Computer Engineering and Digital
        Technology Program. Improved problem-solving and computer project
        management skills through recent achievements. Seeking a Front-end
        position to further develop my career as a Full stack-developer. "
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10 justify-center items-center">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
