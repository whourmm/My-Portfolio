import React from "react";

const Contact = () => {
  return (
    <>
      <motion.div variants={textVariant(0.5)}>
        <p className={`${styles.sectionSubText} ml-6`}>
          My recent achievements
        </p>
        <h2 className={`${styles.sectionHeadText} ml-6`}>Experience</h2>
      </motion.div>
      /
    </>
  );
};

export default Contact;
