// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Parallax } from "react-parallax";
import { footerImg } from "../assets";
import { styles } from '../styles';


const Footer = () => {
  return (
    <Parallax strength={300} bgImage={footerImg} className='z-0' blur={{min:-5 , max: 25}}>
        <div className={`${styles.sectionSubText} lg:h-[100vh] md:h-[30vh] sm:h-[20vh] xs:h-[15vh]`}>
            This is footer section
        </div>
        {/* <div className='absolute bottom-0 rounded-t-3xl bg-[#48286b] h-32 w-[98%] mx-4'>
        </div> */}
    </Parallax>
  )
}

export default Footer;