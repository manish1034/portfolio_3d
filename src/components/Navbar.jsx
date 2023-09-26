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
      className={`${styles.paddingX} w-[94%] flex items-center py-5 fixed top-8 z-50 rounded-2xl mx-10 mr-10 border-2 border-white/10 backdrop-blur-md
      `}>
          <div className='w-full flex justify-between items-center mx-auto'>
            <Link
              to='/'
              className='flex items-center gap-2'
              onClick={() => {
                window.scrollTo(0, 0);
              }}
            >
              <img src={logo} alt='logo' className='w-10 h-[3rem]' />
            </Link>
            
            <div className="flex flex-row">
              <div className="mt-[0.8rem] mr-6 cursor-pointer text-[rgb(247,245,255)] animate-bounce">
              <a href="https://www.linkedin.com/in/manish-chandra-09401b203/" target="_blank">
                <FiLinkedin className="icon" fontSize="32px"/>
              </a>
              </div>

              <div className="h-[3rem] w-[12rem] mr-2 border-white/50 border-2 flex items-center justify-center cursor-pointer">
                <Link to='/contact' 
                  onClick={() => {
                  window.scrollTo(0, 4760);
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