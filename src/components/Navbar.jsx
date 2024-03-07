import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";
import { motion } from "framer-motion";
import { fadeInAnimationVariants } from "../utils/motion";
import { fadeInAnimationVariantsTab } from "../utils/motion";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [show, setShow] = useState(true);
  const [prevScrollY, setPrevScrollY] = useState(window.scrollY);

  useEffect(() => {
    const controlNavbar = () => {
      const currentScrollPos = window.scrollY;
      if (prevScrollY > currentScrollPos)
        setShow(true); //Show Navbar when scroll up
      else setShow(false); //Hide Navbar when scroll down

      setPrevScrollY(currentScrollPos);
    };

    window.addEventListener("scroll", controlNavbar);
    console.log("useEffect");
    // cleanup function
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [prevScrollY]);

  return (
    <section
      className={`${styles.paddingX} w-screen fixed items-center py-5 ${
        show ? "top-0" : "top-[-10000px]"
      } z-20 bg-primary`}
      style={{ zIndex: 10 }}
    >
      <div className="w-full mx-auto justify-between flex">
        <a
          className="flex items-center gap-2 "
          onClick={(e) => {
            e.preventDefault();
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
          <p className="text-white text-[18px] font-bold cursor-pointer flex">
            Anda &nbsp;<span className="md:block hidden">| Varinthorn</span>
          </p>
        </a>
        {/* PC Screen View */}
        <ul className="list-none hidden sm:flex flex flex-row gap-10">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                active === link.title ? "text-white" : "text-secondary"
              } hover:text-white font-medium cursor-pointer`}
              onClick={() => {
                setActive(link.title);
                console.log(`Now clicking ${link.title}`);
              }}
            >
              <a href={"#" + link.description}>{link.title}</a>
            </li>
          ))}
        </ul>

        <div className=" sm:hidden flex flex-1 justify-end items-center">
          <motion.div
            className={` ${
              toggle
                ? "fixed absolute w-[200px] mr-[-50px] opacity-10 z-10 black-gradient h-screen bg-white mt-[90.5vh] "
                : "hidden"
            }`}
            transition={{ type: "spring", bounce: 0.25 }}
            variants={fadeInAnimationVariantsTab}
            initial="initial"
            whileInView={toggle ? "animate" : "none"}
            viewport={{
              once: true,
            }}
          />
          <div
            className={`${
              toggle
                ? "absolute w-screen h-screen bg-black mt-[90.5vh] z-0 opacity-50"
                : "hidden"
            } `}
          />
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="z-50 w-[28px] h=[28px] object-contain cursor-pointer"
            onClick={() => {
              setToggle(!toggle);
            }}
          />
          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 absolute top-20 rounded-xl min-w-[100px] z-10  flex flex-col gap-5`}
          >
            {navLinks.map((link, i) => (
              <motion.ol
                className={`${
                  active === link.title ? "text-white" : "text-secondary"
                } hover:text-white font-medium cursor-pointer`}
                onClick={() => {
                  setActive(link.title);
                  setToggle(!toggle);
                }}
                transition={{ type: "spring", bounce: 0.25 }}
                variants={fadeInAnimationVariants}
                initial="initial"
                whileInView={toggle ? "animate" : "none"}
                viewport={{
                  once: true,
                }}
                custom={i}
                key={link.id}
              >
                <a href={`#${link.id}`}>{link.title}</a>
              </motion.ol>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
