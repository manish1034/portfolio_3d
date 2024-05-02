/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";


const Contact = () => {
  return (
        <div className="container mx-auto">
            {/* heading*/}
            <div className="flex flex-col gap-3 items-center">
                <motion.div variants={textVariant()} className="flex flex-col items-center">
                <h3 className={`${styles.sectionSubText}`}>Get in touch</h3>
                <h3 className={styles.sectionHeadText}>Contact</h3>
                </motion.div>
                <p className="w-1/2 text-center text-gray-400 xs:w-[85%] 2xl:text-[17px] xl:text-[17px] lg:text-[17px] md:text-[17px] sm:text-[17px] xs:text-[12px]">
                    Do you have an idea? Let's discuss it and see what we can do together.
                </p>
            </div>
            {/* content */}
            <form className="mt-5 p-8 flex flex-col gap-5 items-center" action="https://formspree.io/f/mqkowekv" method="POST">
                <input className="p-2 2xl:w-[50%] lg:w-[50%] md:w-[80%] sm:w-[88%] w-full ring-1 rounded-sm bg-[#100d25] dark:ring-0 dark:text-white transition-all hover:scale-105 2xl:text-[17px] xl:text-[17px] lg:text-[17px] md:text-[17px] sm:text-[17px] xs:text-[12px]" type="text" name="Name" placeholder="Full Name" />
                <input className="p-2 2xl:w-[50%] lg:w-[50%] md:w-[80%] sm:w-[88%] w-full ring-1 rounded-sm bg-[#100d25] dark:ring-0 dark:text-white transition-all hover:scale-105 2xl:text-[17px] xl:text-[17px] lg:text-[17px] md:text-[17px] sm:text-[17px] xs:text-[12px]" type="email" name="EmailID" placeholder="Email" />
                <textarea className="p-2 2xl:w-[50%] lg:w-[50%] md:w-[80%] sm:w-[88%] w-full ring-1 rounded-sm bg-[#100d25] dark:ring-0 dark:text-white transition-all hover:scale-105 2xl:text-[17px] xl:text-[17px] lg:text-[17px] md:text-[17px] sm:text-[17px] xs:text-[12px]" cols="30" rows="10" required autoComplete="off" name="Message" placeholder="Message..."></textarea>
                <button className="2xl:w-[50%] lg:w-[50%] md:w-[80%] sm:w-[88%] xs:w-full  backdrop-blur-md border-[2px] border-white/10 text-white font-medium px-3 py-2 rounded-md cursor-pointer transition-all hover:bg-[#100d25] hover:scale-105 2xl:text-[17px] xl:text-[17px] lg:text-[17px] md:text-[17px] sm:text-[17px] xs:text-[12px]">
                    Submit
                </button>
            </form>
        </div>
        
  )
};

export default SectionWrapper(Contact, "contact");