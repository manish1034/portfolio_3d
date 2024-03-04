/* eslint-disable no-unused-vars */
import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    vite,
    atom,
    fullstack,
    carrent,
    jobit,
    tripguide,
    threejs,
    mini_insta,
    edify,
    dac,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Content Creator",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Full Stack Developer(MERN)",
      company_name: "Edify Learning",
      icon: fullstack,
      iconBg: "#383E56",
      date: "Nov 2023 - Jan 2024",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "React Js Developer",
      company_name: "Mini-Insta",
      icon: atom,
      iconBg: "#E6DEDD",
      date: "Mar 2023 - Apr 2023",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Vite Js Developer",
      company_name: "DAC development",
      icon: vite,
      iconBg: "#383E56",
      date: "Sept 2023 - Oct 2023",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "React Js Developer",
      company_name: "Gym-Site development",
      icon: atom,
      iconBg: "#E6DEDD",
      date: "Nov 2022 - Dec 2022",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Movie-Site",
      description:
        "This is my first work in this field of Web-Dev and within this site, you'll find only my front-end part with little bit of Js as for theme and yeah.. that's it...",
      tags: [
        {
          name: "HTML",
          color: "blue-text-gradient",
        },
        {
          name: "CSS",
          color: "green-text-gradient",
        },
        {
          name: "VanillaJS",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      link: "https://manish1034.github.io/Movie-site/",
      source_code_link: "https://github.com/manish1034",
    },
    {
      name: "Edify Learning",
      description:
        "MERN site that is based upon Smart Education. This project includes better understanding and the progress what you have learn through tests and their score.",
        tags: [
        {
          name: "MERN",
          color: "blue-text-gradient",
        },
        {
          name: "MaterialUI",
          color: "green-text-gradient",
        },
        {
          name: "Tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: edify,
      link: "https://edify-tau.vercel.app/",
      source_code_link: "https://github.com/manish1034",
    },
    {
      name: "Mini-Insta",
      description:
        "This site is just a clone of web-insta where all the frontend part is done and looking forward to make its backend part.",
        tags: [
        {
          name: "ReactJS",
          color: "blue-text-gradient",
        },
        {
          name: "MaterialUI",
          color: "green-text-gradient",
        },
        {
          name: "Tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: mini_insta,
      link: "https://mini-insta-seven.vercel.app/",
      source_code_link: "https://github.com/manish1034/Mini-Insta",
    },
    {
      name: "DAC Website",
      description:
        "A College site for my friend college where I done their frontend and integration part with backend leads to this awesome site.",
      tags: [
        {
          name: "ViteJs",
          color: "blue-text-gradient",
        },
        {
          name: "Tailwind",
          color: "green-text-gradient",
        },
        {
          name: "React-Icons",
          color: "pink-text-gradient",
        },
      ],
      image: dac,
      link: "https://dac-website.vercel.app/",
      source_code_link: "https://github.com/manish1034/DAC-website",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };