import React from "react";
import { styles } from "../styles";
import { motion } from "framer-motion";
import { textVariant, fadeIn } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import { allContact } from "../constants";
import { Link } from "react-router-dom";

const Contact = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    console.log("Clk");
  };

  return (
    <section className="md:mt-[150px]">
      <motion.div variants={textVariant(0.5)} className=" xs:mt-0 ">
        <p className={`${styles.sectionSubText} ml-6`}>
          Let's me introduce myself
        </p>
        <h2 className={`${styles.sectionHeadText} ml-6`}>Contact Me</h2>
      </motion.div>
      <motion.div variants={textVariant(0.6)} className="mt-[90px]">
        <div className="grid md:grid-cols-3 grid-cols-1 md:gap-10 gap-[150px]">
          {allContact.map((contact, index) => (
            <div key={index} className="w-[50px] sm:w-[80px] md:mx-auto ">
              <Link to={contact.link} target="_blank">
                <motion.div
                  variants={fadeIn("right", "spring", index * 0.5, 0.75)}
                  className="hidden md:flex flex-col items-center border-slate-600 border-2  rounded-[20px] md:rounded-[50px] w-[70px] h-[70px] md:w-[120px] z-0 md:h-[120px] absolute  "
                >
                  <img
                    src={contact.image}
                    alt={contact.text}
                    className=" md:w-[90px] md:mt-3 w-[50px] mt-2 relative z-50"
                    onClick={(e) => e.preventDefault()}
                  />
                  <div className="mt-10">{contact.text}</div>
                </motion.div>
                <motion.div
                  variants={fadeIn("right", "spring", index * 0.5, 0.75)}
                  className="justify-center items-center ml-5"
                >
                  <div className=" md:hidden grid grid-cols-2 gap-20 items-center">
                    <div className="flex flex-col items-center justify-center border-slate-600 border-2  rounded-[20px] md:rounded-[50px] w-[70px] h-[70px] md:w-[120px] z-0 md:h-[120px] ">
                      <img
                        src={contact.image}
                        alt={contact.text}
                        className=" md:w-[90px] md:mt-3 w-[50px] z-50"
                        onClick={(e) => e.preventDefault()}
                      />
                    </div>

                    <div className="">{contact.text}</div>
                  </div>
                </motion.div>
              </Link>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default SectionWrapper(Contact, "contact");
