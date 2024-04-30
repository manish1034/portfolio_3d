/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import { Tilt }from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  link,
  source_code_link,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt 
        options={{
          max: 45,
          scale: 1,
          speed: 40,
          perspective: 1000,
          transition: true,
          easing: "cubic-bezier(.03,.98,.52,.99)"
        }}
        className='bg-tertiary p-5 rounded-2xl sm:w-[360px] md:w-[80%] md:h-[29rem] lg:w-[20rem] w-full'
      >
        <div className='relative w-full h-[230px] md:h-[270px]'>
          <img
            src={image}
            alt='project_image'
            className='w-full h-full object-cover rounded-t-2xl'
          />

          <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
            >
              <img
                src={github}
                alt='source code'
                className='w-1/2 h-1/2 object-contain'
              />
            </div>
          </div>
        </div>

        <div className='mt-5 md:mt-10'>
          <a href={link} target="_blank"><h3 className='text-white font-bold text-[24px]'>{name}</h3></a>
          <p className='mt-2 text-secondary 2xl:text-[14px] xl:text-[14px] lg:text-[14px] md:text-[14px] xs:text-[12px]'>{description}</p>
        </div>

        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`2xl:text-[14px] xl:text-[14px] lg:text-[14px] md:text-[14px] xs:text-[12px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()} className="mx-5 relative 2xl:-mt-28 xl:-mt-28 lg:-mt-28 md:-mt-28 sm:-mt-28 xs:mt-2">
        <p className={`${styles.sectionSubText} `}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects</h2>
      </motion.div>

      <div className='w-full flex mx-5'>
        <motion.p
          variants={fadeIn("", "", 0.8, 0.5)}
          className='mt-3 text-secondary 2xl:text-[17px] xl:text-[17px] lg:text-[17px] md:text-[17px] sm:text-[17px] xs:text-[12px] max-w-3xl leading-[30px] xs:w-[90%]'
        >
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </motion.p>
      </div>

      <div className='mt-20 flex flex-wrap gap-7 mx-5'>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "work");