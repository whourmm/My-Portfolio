import React from "react";
import { motion } from "framer-motion";
import github from "../assets/anda.png";
import { styles } from "../styles.js";
import {
  staggerContainer,
  textVariant,
  backgroundVariant,
  imageVariant,
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
        <div className=" top-[300px] flex flex-col lg:ml-[250px] relative z-10">
          <motion.div
            variants={textVariant(0.5)}
            className={`${styles.heroHeading}`}
          >
            I'm Anda
          </motion.div>

          <motion.h1
            variants={textVariant(0.5)}
            className="text-center lg:text-left"
          >
            Varinthorn Chatburapachai | CEDT CU
          </motion.h1>
          <div className="sm:hidden flex items-center justify-center">
            <motion.img
              variants={imageVariant(0.5)}
              src={github}
              className="rounded-full  w-[200px] mt-20 "
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
