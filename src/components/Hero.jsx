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
        <div className="top-[200px] flex items-center flex-col lg:ml-[250px] relative z-10">
          <motion.dev
            variants={textVariant(0.5)}
            className={styles.heroHeading}
          >
            I'm Anda
          </motion.dev>
          <motion.h1 variants={textVariant(0.5)} className="text-left">
            Varinthorn Chatburapachai
          </motion.h1>
          <motion.img
            variants={imageVariant(0.5)}
            src={github}
            className="rounded-full sm:hidden w-[200px] mt-20"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
