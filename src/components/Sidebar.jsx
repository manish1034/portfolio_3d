/* eslint-disable no-unused-vars */
import {React, useEffect, useState} from 'react';
import { Link } from "react-router-dom";

import {HiHome} from "react-icons/hi";
import {SiAboutdotme, SiSkillshare} from "react-icons/si";
import {RiFileWord2Fill} from "react-icons/ri";
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import { deepPurple } from '@mui/material/colors';
import Avatar from '@mui/material/Avatar';

const Sidebar = () => {

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
    <div className='fixed z-30 right-8 bottom-[5%] xs:right-2 xs:bottom-10'>
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-1 sm:h-[9rem] h-[4rem] violet-gradient' />
        </div>
        <div className='flex flex-col justify-between'>
            <Link to='/' className='' onClick={() => {window.scrollTo(0,0)}}>
                <ThemeProvider theme={customTheme}>
                    <StyledAvatar><HiHome/></StyledAvatar>
                </ThemeProvider>
            </Link>
            <Link to='/about' className='mt-4' onClick={() => {window.scrollTo(0,1075)}}>
                <ThemeProvider theme={customTheme}>
                    <StyledAvatar><SiAboutdotme/></StyledAvatar>
                </ThemeProvider>
            </Link>
            <Link to='/work' className='mt-4' onClick={() => {window.scrollTo(0,4700)}}>
                <ThemeProvider theme={customTheme}>
                    <StyledAvatar><RiFileWord2Fill/></StyledAvatar>
                </ThemeProvider>
            </Link>
            <Link to='/skill' className='mt-4' onClick={() => {window.scrollTo(0,2000)}}>
                <ThemeProvider theme={customTheme}>
                    <StyledAvatar><SiSkillshare/></StyledAvatar>
                </ThemeProvider>
            </Link>
            {/* <div className='mt-4'>
                <ThemeProvider theme={customTheme}>
                    <StyledAvatar><a href='#about'><SiAboutdotme/></a></StyledAvatar>
                </ThemeProvider>
            </div>
            <div className='mt-4'>
                <ThemeProvider theme={customTheme}>
                    <StyledAvatar><a href='#work'><RiFileWord2Fill/></a></StyledAvatar>
                </ThemeProvider>
            </div>
            <div className='mt-4'>
                <ThemeProvider theme={customTheme}>
                    <StyledAvatar><a href='#skill'><SiSkillshare/></a></StyledAvatar>
                </ThemeProvider>
            </div> */}
        </div>
        <div className='flex flex-col justify-center items-center mt-2'>
          <div className='w-1 sm:h-[8rem] h-[4rem] violet-gradient-rev' />
        </div>
    </div>
  )
};

const customTheme = createTheme({
  palette: {
    primary: {
      main: deepPurple[600],
    },
  },
});

const StyledAvatar = styled(Avatar)`
  ${({ theme }) => `
  cursor: pointer;
  background-color: ${theme.palette.primary.main};
  transition: ${theme.transitions.create(['background-color', 'transform'], {
  duration: theme.transitions.duration.standard,
})};
  &:hover {
    background-color: ${theme.palette.primary.dark};
    transform: scale(1.3);
  }
  `}
`;



export default Sidebar;