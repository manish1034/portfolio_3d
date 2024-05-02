/* eslint-disable react/no-unknown-property */
/* eslint-disable react/no-unescaped-entities */
import { useEffect, useRef } from "react";
import { styles } from "../styles";
import { heroMain, myPhoto } from "../assets";
import { FaGithub } from "react-icons/fa";
import { TiSocialLinkedin } from "react-icons/ti";
import { useViewportScroll, useTransform, motion } from "framer-motion";
import { gsap, Power4 } from "gsap";
import Typewriter from 'typewriter-effect';


const Hero = () => {
  const { scrollY } = useViewportScroll();
  const yInput = [0, window.innerHeight * 0.6]; // Start and end points of the animation
  const opacity = useTransform(scrollY, yInput, [0, 1]);
  const translateY = useTransform(scrollY, yInput, ['-50%', '0%']);

  let tl = new gsap.timeline();
  let ease = Power4.easeOut();

  let header = useRef(null);

  useEffect(()=>{
    tl.to([header],2.5,{
      opacity: 1,
      y: 30,
      stagger:{
        amount: 4
      },
      ease: ease
    })
  });

  // const [startTyping, setStartTyping] = useState(false);

  //   useEffect(() => {
  //       const delayTimer = setTimeout(() => {
  //           setStartTyping(true);
  //       }, 2000); // Adjust the delay time (in milliseconds) as needed

  //       return () => clearTimeout(delayTimer);
  //   }, []);

  return (

    <section className='relative w-full h-screen mx-auto bg-[#090325] z-50'>
      {/* top-corner-logo */}
      <motion.div
        initial={{ opacity: 0, x: -80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ type: 'spring', delay: 0.8, duration: 1.2, ease: "easeOut",}}
        className="flex flex-col justify-between gap-6 p-12">
        <FaGithub className="blue-text-gradient cursor-pointer" fontSize="32px"/>
        <TiSocialLinkedin className="blue-text-gradient cursor-pointer" fontSize="32px"/>
      </motion.div>

      {/* main-img */}
      <div className="absolute left-[69%] 2xl:top-[5rem] xl:top-[5rem] lg:top-[5rem] md:top-[5rem] xs:top-[1rem]">
        <img src={heroMain} alt="main" className="h-[24rem] w-[24rem] animate-bouncy"/>
      </div>

      {/* mid-Intro */}
      <div className="absolute blue-gradient py-[5rem] px-[3rem] top-[72%] left-[5%] inset-[3rem] rounded-3xl 2xl:h-[75vh] xl:h-[75vh] lg:h-[75vh] xs:h-[55vh] lg:w-[87%] md:w-[84%] xs:w-[82%] text-white">
        <div className="flex justify-between">
          <div className=" font-extralight 2xl:mt-24 xl:mt-24 lg:mt-24 md:mt-24 xs:mt-[6.5rem] 2xl:ml-9 xl:ml-9 lg:ml-9 md:ml-9 xs:-ml-4 2xl:text-[22px] xl:text-[22px] lg:text-[22px] md:text-[17px] xs:text-[12px] leading-[30px] text-secondary max-w-lg xs:max-w-xl">
            <Typewriter
              onInit={(typewriter) => {
                  typewriter
                        .pauseFor(1500) 
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
            className='relative overflow-hidden h-[22rem] w-[18rem] mr-[5rem] rounded-full -mt-[7rem] xs:hidden sm:flex'>
            <img className='mb-5' src={myPhoto} alt=''/>
          </motion.div>
        </div>
      </div>
      
      {/* main-Front */}
      <div className={`absolute top-[220px] flex flex-row items-start gap-5 inset-[4rem] max-w-7xl mx-auto ${styles.paddingX} z-20`}>
        <div className='xs:hidden sm:flex absolute flex flex-col justify-center items-center mt-[10%] left-0'>
          <div className='sticky top-[20rem] w-1 h-3 rounded-full bg-violet-900 z-10' />
          <div className='w-[0.1rem] sm:h-30 h-20 bg-white/50' />
        </div>

        <div className="sticky top-[10rem] flex flex-col">
          <h1 className={`${styles.heroHeadText} text-white xs:text-[45px] 2xl:ml-5 xl:ml-5 lg:ml-5 xs:-ml-10`} ref={ele => header = ele}> Hi, I'm
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