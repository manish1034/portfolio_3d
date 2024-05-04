/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FiLinkedin } from "react-icons/fi";
import { styles } from "../styles";
import { logo } from "../assets";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`${styles.paddingX} w-[94%] flex items-center py-5 fixed top-8 z-30 mx-auto ml-3 mr-10 border-2 border-white/10 backdrop-blur-md
      `}>
          <div className='w-full flex justify-between items-center mx-auto'>
            <Link
              to='/'
              className='flex items-center gap-2'
              onClick={() => {
                window.scrollTo(0, 0);
              }}
            >
              <img src={logo} alt='logo' className='w-10 h-[3rem] 2xl:ml-0 xl:ml-0 lg:ml-0 md:ml-0 xs:-ml-2' />
            </Link>
            
            <div className="flex flex-row">
              <div className="2xl:mt-[0.8rem] xl:mt-[0.8rem] lg:mt-[0.8rem] md:mt-[0.8rem] xs:mt-[0.4rem] mr-6 cursor-pointer text-[rgb(247,245,255)] animate-bounce">
              <a href="https://www.linkedin.com/in/manish-chandra-09401b203/" target="_blank">
                <FiLinkedin className="" fontSize="32px"/>
              </a>
              </div>

              <div className="2xl:h-[3rem] xl:h-[3rem] lg:h-[3rem] md:h-[3rem] xs:h-[2rem] 2xl:w-[12rem] xl:w-[12rem] lg:w-[12rem] md:w-[12rem] xs:w-[10rem] 2xl:mr-2 xl:mr-2 lg:mr-2 md:mr-2 xs:-mr-3  border-white/50 border-2 flex items-center justify-center cursor-pointer">
                <Link to='/contact' 
                  onClick={() => {
                  window.scrollTo(0, 6580);
                }}
                >
                  <p className='font-semibold hover:text-[rgb(144,144,241)] transition-all hover:scale-110 hover:animate-pulse'>Let's Connect</p>
                </Link>
              </div>
            </div>
          </div>
    </nav>
  );
};

export default Navbar;