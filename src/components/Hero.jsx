/* eslint-disable react/no-unknown-property */
/* eslint-disable react/no-unescaped-entities */
import { styles } from "../styles";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";
import { gsap, Power4 } from "gsap";
import { useEffect, useRef } from "react";



const Hero = () => {

  let tl = new gsap.timeline();
  let ease = Power4.easeOut();

  let header = useRef(null);

  useEffect(()=>{
    tl.to([header],2.5,{
      opacity: 1,
      y: 50,
      stagger:{
        amount: 4
      },
      ease: ease
    })
  });

  return (

    <section className='relative w-full h-screen mx-auto bg-[#090325] z-50'>
      <motion.div
      variants={fadeIn("up","spring", 2 , 2)}
      className="absolute blue-gradient py-[5rem] px-[3rem] top-[72%] left-[5%] inset-[3rem] rounded-3xl h-[75vh] lg:w-[87%] md:w-[84%] text-white">
        <div className="absolute bottom-0 start-0 w-[100%] -z-20">
        {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 319"><path fill="rgb(5, 8, 22)" fill-opacity="1" d="M0,192L48,186.7C96,181,192,171,288,186.7C384,203,480,245,576,240C672,235,768,181,864,165.3C960,149,1056,171,1152,160C1248,149,1344,107,1392,85.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg> */}
        </div>
      </motion.div>
      <div
        className={`absolute top-[220px] flex flex-row items-start gap-5 inset-[4rem] max-w-7xl mx-auto ${styles.paddingX} z-20`}
      >
        <div className='absolute flex flex-col justify-center items-center mt-[10%] left-0'>
          <div className='sticky top-[20rem] w-1 h-3 rounded-full bg-violet-900 z-10' />
          <div className='w-[0.1rem] sm:h-30 h-20 bg-white/50' />
        </div>

        <div className="sticky top-[10rem] flex flex-col">
          <h1 className={`${styles.heroHeadText} text-white header`} ref={ele => header = ele}> Hi, I'm
             <span className='text-[#915EFF] pl-3'>Manish</span>
          </h1>
          {/* <p className={`${styles.heroSubText} mt-2 text-white`}>
            I develop 3D visuals, user <br className='sm:block hidden' />
            interfaces and web applications
          </p> */}
        </div>
      </div>

      
    </section>
  );
};

export default Hero;