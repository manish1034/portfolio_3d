/* eslint-disable react/no-unknown-property */
/* eslint-disable react/no-unescaped-entities */
import { useEffect, useRef } from "react";
import PreLoader from "./preLoader/PreLoader";
import { styles } from "../styles";
import { heroMain, myPhoto } from "../assets";
import { FaGithub } from "react-icons/fa";
import { TiSocialLinkedin } from "react-icons/ti";
import { useScroll, useTransform, motion } from "framer-motion";
import { gsap, Power4 } from "gsap";
import Typewriter from 'typewriter-effect';
import { Link } from "react-router-dom";


const Hero = () => {
  const { scrollY } = useScroll();
  const yInput = [0, window.innerHeight * 0.6]; // Start and end points of the animation
  const opacity = useTransform(scrollY, yInput, [0, 1]);
  const translateY = useTransform(scrollY, yInput, ['-50%', '0%']);

  let tl = new gsap.timeline();
  let ease = Power4.easeOut();

  let header = useRef(null);

  useEffect(()=>{
    tl.to([header],5,{
      opacity: 1,
      y: 40,
      stagger:{
        amount: 4
      },
      ease: ease
    })
  });

  return (
    <>
    <PreLoader />
    <section className='relative w-[98.9%] h-screen mx-auto bg-[#090325] z-40'>
      {/* top-corner-logo */}
      <motion.div
        initial={{ opacity: 0, x: -80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ type: 'spring', delay: 5, duration: 1.2, ease: "easeOut",}}
        className="flex flex-col justify-between gap-6 p-12">
        <Link to="https://github.com/manish1034" target="_blank"><FaGithub className="blue-text-gradient cursor-pointer" fontSize="32px"/></Link>
        <Link to="https://www.linkedin.com/in/manish-chandra-09401b203/" target="_blank"><TiSocialLinkedin className="blue-text-gradient cursor-pointer" fontSize="32px"/></Link>
      </motion.div>

      {/* main-img */}
      <motion.div 
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: 'spring', delay: 4, duration: 1.2, ease: "easeOut",}}
        className="absolute left-[69%] 2xl:top-[5rem] xl:top-[5rem] lg:top-[5rem] md:top-[5rem] xs:top-[1rem]">
        <img src={heroMain} alt="main" className="h-[24rem] w-[24rem] animate-bouncy"/>
      </motion.div>

      {/* mid-Intro */}
      <div className="absolute blue-gradient py-[5rem] px-[3rem] top-[72%] left-[5%] inset-[3rem] rounded-3xl 2xl:h-[75vh] xl:h-[75vh] lg:h-[75vh] xs:h-[55vh] lg:w-[87%] md:w-[84%] xs:w-[82%] text-white">
        <div className="flex justify-between">
          <div className="font-extralight 2xl:mt-24 xs:mt-[6.5rem] 2xl:ml-8 xl:ml-10 lg:ml-14 sm:ml-0 md:ml-0 xs:-ml-4 xl:text-[22px] md:text-[17px] xs:text-[12px] leading-[30px] text-secondary max-w-lg xs:max-w-xl">
            <Typewriter
              onInit={(typewriter) => {
                  typewriter
                        .pauseFor(6500) 
                        .changeDelay(40) 
                        .typeString("Innovative Software Developer")
                        .pauseFor(1000) 
                        .deleteAll()
                        .changeDelay(40) 
                        .typeString("with extensive experience in building robust web applications using the full-stack.")
                        .pauseFor(1500) 
                        .changeDeleteSpeed(10)
                        .deleteChars(21)
                        .changeDelay(30) 
                        .typeString("using the MERN stack.")
                        .pauseFor(1000) 
                        .deleteAll()
                        .changeDelay(40) 
                        .typeString("Passionate about leveraging technology to drive business growth and enhance user experiences.")
                        .pauseFor(1500)
                        .deleteAll()
                        .typeString("Let's connect and explore opportunities to collaborate on exciting projects!😁👌")
                        .callFunction(() => {
                            console.log('Typewriter animation complete');
                        })
                        .start();
              }}
            />
          </div>
          <motion.div 
            initial={{ opacity: 0, x: 100 }}
            style={{ opacity, x: translateY }}
            transition={{ type: 'spring', delay: 4, duration: 1.2, ease: "easeOut",}}
            className='relative overflow-hidden 2xl:mr-[5rem] xl:mr-[5rem] lg:mr-[0rem] 2xl:ml-20 xl:ml-10 lg:ml-14 rounded-full 2xl:-mt-[7rem] xl:-mt-[7rem] lg:-mt-[2rem] md:-mt-5 xs:hidden sm:hidden md:flex lg:flex'>
            <img className='mb-5 xl:h-[22rem] lg:h-[16rem] md:h-[14rem] xl:w-[16.5rem] lg:w-[14rem] md:w-[14rem]' src={myPhoto} alt=''/>
          </motion.div>
        </div>
      </div>
      
      {/* main-Front */}
      <div className={`absolute top-[220px] flex flex-row items-start gap-5 inset-[4rem] max-w-7xl mx-auto ${styles.paddingX} z-20`}>
        <div className='xs:hidden sm:flex absolute flex flex-col justify-center items-center mt-[10%] left-0'>
          <div className='sticky top-[20rem] w-1 h-3 rounded-full bg-violet-900 z-10' />
          <div className='w-[0.1rem] sm:h-30 h-20 bg-white/50' />
        </div>

        <motion.div 
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: 'spring', delay: 4, duration: 1.2, ease: "easeOut",}}
          className="sticky top-[10rem] flex flex-col">
          <h1 className={`${styles.heroHeadText} text-white 2xl:text-[65px] xs:text-[45px] xl:ml-5 lg:ml-5 xs:-ml-10`} ref={ele => header = ele}> Hi, I'm
            <span className='text-[#915EFF] pl-3'>Manish</span>
          </h1>
        </motion.div>
      </div>

    </section>
    </>
  );
};

export default Hero;