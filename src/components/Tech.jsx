/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
/* eslint-disable react-refresh/only-export-components */
import React from "react";
// import { Parallax } from "react-parallax";
// import { techImg } from "../assets";
import { BallCanvas } from "./canvas";
// import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  return (
    <div className="w-full z-0 mt-[3rem]">
      {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#151030" fill-opacity="0" stroke-opacity="1" d="M0,192L48,213.3C96,235,192,277,288,298.7C384,320,480,320,576,320C672,320,768,320,864,309.3C960,299,1056,277,1152,266.7C1248,256,1344,256,1392,256L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg> */}
      <div className='flex flex-row flex-wrap justify-center blue-gradient-rev gap-10 px-10 pt-10'>
        {technologies.map((technology) => (
          <div 
            className='2xl:w-32 2xl:h-32 
                      xl:w-28 xl:h-28 
                      lg:w-24 lg:h-24 
                      md:w-20 md:h-20 
                      sm:w-16 sm:h-16 
                      xs:w-14 xs:h-14
                      relative group' 
            key={technology.name}
          >
            <BallCanvas icon={technology.icon} />
            <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 
                          bg-black/80 text-white px-2 py-1 rounded-md text-sm
                          opacity-0 group-hover:opacity-100 transition-opacity duration-300
                          whitespace-nowrap pointer-events-none">
              {technology.name}
            </div>
          </div>
        ))}
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#151030" fillOpacity="1" d="M0,128L48,122.7C96,117,192,107,288,96C384,85,480,75,576,69.3C672,64,768,64,864,74.7C960,85,1056,107,1152,122.7C1248,139,1344,149,1392,154.7L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>    </div>
  );
};

// export default SectionWrapper(Tech, "");
export default Tech;