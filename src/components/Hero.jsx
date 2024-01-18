import React from "react";
import { motion } from "framer-motion";
import github from "../assets/github.png";
import { styles } from "../styles.js";
import {
  staggerContainer,
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
            className="mt-5  flex flex-row lg:leading-[50px] sm:leading-[40px] leading-[30px] sm:text-md md:text-lg "
          >
            <h1>Scroll down for more Context!</h1>
          </motion.div>
        </div>
        <div className="col-2">
          <img src={github} className="lg:w-[500px] " />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
