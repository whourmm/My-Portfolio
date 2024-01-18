import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles.js";
import {
  staggerContainer,
  slideIn,
  textVariant,
  backgroundVariant,
} from "../utils/motion.js";

const Hero = () => {
  return (
    <section className=" relative w-screen h-screen mx-auto z-50 ">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewPort={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} max-auto flex flex-col`}
      >
        <motion.div
          variants={backgroundVariant(0.2)}
          className="absolute bg-black w-screen h-screen opacity-20 "
        />
        <div className="top-[200px] flex justify-center ml-[60px] mr-[60px]  flex-col relative z-10">
          <motion.h1 variants={textVariant(0.5)} className={styles.heroHeading}>
            I'm Anda
          </motion.h1>
          <motion.div
            variants={textVariant(0.6)}
            className="flex flex-row lg:leading-[50px] sm:leading-[40px] sm:text-md md:text-lg "
          >
            <h1>
              " Diligent and Passionate student from Computer Engineering and
              Digital Technology Program. Improved problem-solving and computer
              project management skills through recent achievements. Seeking a
              Front-end position to further develop my career as a Full
              stack-developer. "
            </h1>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
