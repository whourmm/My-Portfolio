import React from "react";
import { styles } from "../styles";
import { motion } from "framer-motion";
import { textVariant, fadeIn } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import { allContact } from "../constants";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <>
      <motion.div variants={textVariant(0.5)} className="mt-[600px] xs:mt-0">
        <p className={`${styles.sectionSubText} ml-6`}>
          Let's me introduce myself
        </p>
        <h2 className={`${styles.sectionHeadText} ml-6`}>Contact Me</h2>
      </motion.div>
      <motion.div variants={textVariant(0.6)} className="mt-[90px]">
        <div className="grid xs:grid-cols-3 grid-cols-1 xs:gap-10 gap-[150px]">
          {allContact.map((contact, index) => (
            <div key={index} className="w-[50px] sm:w-[80px] mx-auto ">
              <Link to={contact.link} target="_blank">
                <motion.div
                  variants={fadeIn("right", "spring", index * 0.5, 0.75)}
                  className="border-slate-600 border-2 ml-[-10px] rounded-[20px] md:rounded-[50px] w-[70px] h-[70px] md:w-[120px] z-0 md:h-[120px] absolute md:-ml-5 "
                >
                  <img
                    src={contact.image}
                    alt={contact.text}
                    className=" md:w-[90px] md:mt-3 md:ml-3  w-[50px] mt-2 ml-2 relative z-50"
                  />
                </motion.div>
              </Link>
            </div>
          ))}
        </div>
      </motion.div>
    </>
  );
};

export default SectionWrapper(Contact, "contact");
