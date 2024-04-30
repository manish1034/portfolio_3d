/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
/* eslint-disable react-refresh/only-export-components */
// eslint-disable-next-line no-unused-vars
import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn } from "../utils/motion";
import { qlearner, leadership, psolving } from "../assets";

const About = () => {
  return (
    <>
      {/* midCard */}
      <div className="absolute blue-gradient py-[5rem] px-[3rem] -top-[20%] left-[5%] inset-[3rem] rounded-3xl 2xl:h-[85vh] xl:h-[85vh] lg:h-[85vh] xs:h-[70vh] lg:w-[87%] md:w-[84%] z-50">   
        <div className="absolute bottom-0 start-0 w-[100%] z-50">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 319">
          <path fill="rgb(255, 255, 255)" fill-opacity="1" d="M0,192L48,186.7C96,181,192,171,288,186.7C384,203,480,245,576,240C672,235,768,181,864,165.3C960,149,1056,171,1152,160C1248,149,1344,107,1392,85.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
        </div>
      </div>

      {/* aboutSection */}
      <section id='about'>
        <div className='container mx-5 xl:mt-[52vh] lg:mt-[55vh] md:mt-[42vh] sm:mt-[45vh] xs:mt-[38vh]'>
          <div className='flex flex-col lg:flex-row gap-x-10'>

            {/* leftpart */}
            <div className='flex-1 flex flex-col gap-y-[2.6rem] lg:gap-y-[4.5rem] xl:gap-y-[6.3rem] mb-10 lg:mb-0'>
              {/* textSection */}
              <div>
                <p className={styles.sectionSubText}>Introduction</p>
                <h2 className={styles.sectionHeadText}>Overview</h2>
                <p className="mt-3 text-secondary 2xl:text-[17px] xl:text-[17px] lg:text-[17px] md:text-[17px] sm:text-[17px] xs:text-[12px] max-w-3xl leading-[30px] lg:w-[94%] md:w-[80%] sm:w-[80%] xs:w-[85%]">
                  I'm a skilled software developer with experience in JavaScript, and expertise
                  in frameworks like React, Node.js, and Express.js. I'm a quick learner and 
                  collaborate closely with clients to create efficient, scalable, and user-friendly
                  solutions that solve real-world problems. Let's work together to bring your ideas to life!
                </p>
              </div>
              {/* Card */}
              <motion.div
              variants={fadeIn("right","spring", 0.5, 1)}
              className='group relative overflow-hidden xl:h-[16.5rem] lg:h-[15rem] xs:h-[10rem] md:h-[17rem] lg:w-[92%] md:w-[78%] sm:w-[88%] xs:w-[88%] rounded-xl shadow-2xl shadow-white/10'>
                <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
                <img className='group-hover:scale-125 transition-all duration-500' src={qlearner} alt=''/>
                <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                  <span className='text-white/60 2xl:text-lg xl:text-lg lg:text-lg xs:text-sm'>Title</span>
                </div>
                <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
                  <span className='text-3xl text-white 2xl:text-3xl xl:text-3xl lg:text-3xl xs:text-lg'>Quick Learner</span>
                </div>
              </motion.div>
            </div>

            {/* rightpart */}
            <div className='flex-1 flex flex-col gap-y-11 2xl:gap-y-[4rem] xl:gap-y-[5.5rem] lg:gap-y-[7.8rem]'>
              {/* Card */}
              <motion.div
              variants={fadeIn("left","spring", 0.7, 1)}
              className='group relative overflow-hidden xl:h-[16.5rem] lg:h-[14.5rem] xs:h-[10rem] md:h-[17rem] w-[88%] md:w-[79%] lg:w-[88%] lg:mt-5 rounded-xl shadow-2xl shadow-white/5'>
                <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
                <img className='group-hover:scale-125 transition-all duration-500' src={leadership} alt=''/>
                <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                  <span className='text-white/60 2xl:text-lg xl:text-lg lg:text-lg xs:text-sm'>Title</span>
                </div>
                <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
                  <span className='text-3xl text-white 2xl:text-3xl xl:text-3xl lg:text-3xl xs:text-lg'>leadership</span>
                </div>
              </motion.div>
              {/* Card */}
              <motion.div
              variants={fadeIn("left","spring", 1, 1)}
              className='group relative overflow-hidden xl:h-[16.5rem] lg:h-[14rem] xs:h-[10rem] md:h-[17rem] w-[88%] md:w-[79%] lg:w-[88%] rounded-xl shadow-2xl shadow-white/10'>
                <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
                <img className='group-hover:scale-125 transition-all duration-500' src={psolving} alt=''/>
                <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                  <span className='text-white/60 2xl:text-lg xl:text-lg lg:text-lg xs:text-sm'>Title</span>
                </div>
                <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
                  <span className='text-3xl text-white 2xl:text-3xl xl:text-3xl lg:text-3xl xs:text-lg'>Problem Solving</span>
                </div>
              </motion.div>

            </div>
          </div>
        </div>
      </section>
    </>
  );
};


export default SectionWrapper(About, "about");

