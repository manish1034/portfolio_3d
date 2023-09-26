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
          <div className='w-28 h-28' key={technology.name}>
            <BallCanvas icon={technology.icon} />
          </div>
        ))}
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#151030" fill-opacity="1" d="M0,128L48,122.7C96,117,192,107,288,96C384,85,480,75,576,69.3C672,64,768,64,864,74.7C960,85,1056,107,1152,122.7C1248,139,1344,149,1392,154.7L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>    </div>
  );
};

// export default SectionWrapper(Tech, "");
export default Tech;