/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
/* eslint-disable react-refresh/only-export-components */
// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import { useViewportScroll, useTransform, motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { qlearner, leadership, psolving } from "../assets";

const About = () => {
  const { scrollY } = useViewportScroll();
  const yInput = [0, window.innerHeight * 1.5]; // Start and end points of the animation
  const opacity = useTransform(scrollY, yInput, [0, 1]);
  const translateY = useTransform(scrollY, yInput, ['-80%', '0%']);
  const translateY2 = useTransform(scrollY, yInput, ['-300%', '0%']);
  const translateY3 = useTransform(scrollY, yInput, ['-620%', '0%']);
  const translateYp = useTransform(scrollY, yInput, ['100%', '0%']);

  // Add screen size check
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <section id='about'>
        <div className='container mx-5 xl:mt-[48vh] lg:mt-[55vh] md:mt-[42vh] sm:mt-[45vh] xs:mt-[38vh]'>
          <div className='flex flex-col lg:flex-row gap-x-10'>

            {/* leftpart */}
            <div className='flex-1 flex flex-col gap-y-[2.6rem] lg:gap-y-[6rem] xl:gap-y-[6.3rem] mb-10 lg:mb-0'>
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
                initial={{ opacity: 0, x: 100 }}
                style={{ opacity, x: translateY }}
                transition={{ type: 'spring', delay: 2, duration: 1.2, ease: "easeOut",}}
                className='group relative overflow-hidden xl:h-[16.5rem] lg:h-[12rem] xs:h-[10rem] md:h-[17rem] lg:w-[92%] md:w-[78%] sm:w-[88%] xs:w-[88%] rounded-xl shadow-2xl shadow-white/10'>
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
            <div className='flex-1 flex flex-col gap-y-11 2xl:gap-y-[4rem] xl:gap-y-[4.1rem] lg:gap-y-[11.4rem]'>
              {/* Card */}
              <motion.div
                initial={{ opacity: 0, x: isMobile ? 100 : 0, y: isMobile ? 0 : '-100%' }}
                style={{ 
                  opacity, 
                  ...(isMobile 
                    ? { x: translateY2 } 
                    : { y: translateY })
                }}
                transition={{ type: 'spring', delay: 2, duration: 1.2, ease: "easeOut",}}
                className='group relative overflow-hidden xl:h-[16.5rem] lg:h-[12.3rem] xs:h-[10rem] md:h-[17rem] w-[88%] md:w-[79%] lg:w-[88%] lg:mt-5 rounded-xl shadow-2xl shadow-white/5'>
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
                initial={{ opacity: 0, x: isMobile ? 100 : 0, y: isMobile ? 0 : '-100%' }}
                style={{ 
                  opacity, 
                  ...(isMobile 
                    ? { x: translateY3 } 
                    : { y: translateYp })
                }}
                transition={{ type: 'spring', delay: 2, duration: 1.2, ease: "easeOut",}}
                className='group relative overflow-hidden xl:h-[16.5rem] lg:h-[12rem] xs:h-[10rem] md:h-[17rem] w-[88%] md:w-[79%] lg:w-[88%] rounded-xl shadow-2xl shadow-white/10'>
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

