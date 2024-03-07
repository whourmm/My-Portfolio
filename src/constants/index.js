import { Instagram } from "@mui/icons-material";
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
    carrent,
    jobit,
    tripguide,
    threejs,
    line,
    gmail,
    instagram,
    anda,
    schoolDarun,
    scius,
    tpho,
    boardgame,
    codingChallenge,
    ku01,
    website,
    bgend
  } from "../assets";

  export const allContact = [
    {
      image: line,
      text: "line",
      link: "https://web.facebook.com/vast.anda",
    },
    {
      image: instagram,
      text: "Instagram",
      link: "https://www.instagram.com/_anda_varin_/",
    },
    {
      image: gmail,
      text: "gmail",
      link: "discordapp.com/users/694203870796316692",
    },
  ];
  
  export const navLinks = [
    {
      id : "about",
      description: "about",
      title: "About",
    },    
    {
      id: "experience",
      description: "experience",
      title: "Experience"
    },
    {
      id: "contact",
      description : "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "My github",
      icon: web,
      link: "https://github.com/whourmm"
    },
    {
      title: "Physics Tutor",
      icon: mobile,
      link: "https://www.instagram.com/p/Cs5X_s8Sni3/?img_index=1"
    },
    {
      title: "Static Website Project",
      icon: backend,
      link: "https://hightech-codingchallenge.vercel.app/"
    },
    {
      title: "CV",
      icon: creator,
      link: "https://github.com/whourmm/portfolio.github.io/blob/main/Computer%20Engineering%20and%20Digital%20Technology%20in%20Chulalongkorn%20University.pdf"
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
  
  export const experiences = [
    {
      id: 1,
      title: "Computer Project Competition (Bronze Medal, National)",
      location: "Role : Programmer",
      description: `In the topic of Monitoring of electrical quantity detection based on NodeMCU ESP8266.`,
      buttonText: "Details",
      date: "2018-2019",
      icon: "work",
      color: "purple",
      tech: ["C", "Ardunino", "ESP8266", "Physics"],
      image : scius
    },
    {
      id: 2,
      title: "Physic Olympic Competition, POSN (Bronze Medal, National)",
      location: "Thailand Physics Olympiad 21th",
      description: "Achieved a Bronze medal in the National Competition, securing a position among the top 50 highest scores in Thailand. ",
      buttonText: "Details",
      date: "2020-2022",
      icon: "work",
      color: "yellow",
      tech: ["Physics", "Time Management"],
      image : tpho
    },
    {
      id: 3,
      title: "KU01 Competition",
      location: "Coding, Kasetsart University",
      description: "Top 50% programmer from KU01 2021 (Coding Problem Solving Skills Abilities Test at Kasetsart University)",
      buttonText: "Details",
      date: "2021-2023",
      icon: "work",
      color: "red",
      tech: ["Python",  "Time Management"],
      image : ku01
    },
    {
      id: 4,
      title: "Graduated from High School",
      location: "Darunsikkhalai School (ESC)",
      description: "Over the course of these three years, I not only earned a scholarship but also cultivated leadership skills through participation in various activities.",
      buttonText: "Details",
      date: "2023",
      icon: "school",
      color: "blue",
      tech: ["Leadership", "Time Management", "Organization"],
      image : schoolDarun
    },
    {
      id: 5,
      title: "Survive the Street (TOP 6 FINALIST)",
      location: "Role : Project Coordinator , Digital Content Lab (CEA x PTT)",
      description: "Survive the Street is the boardgame applied WebAR technology to cards to visualize local's daily in Bangkok. ",
      buttonText: "Details",
      date: "2023-present",
      icon: "work",
      color: "orange",
      tech: ["Communication Skill", "Pitching Skill"],
      image : boardgame
    },
    {
      id: 6,
      title: "Coding Challenge, Frontend Core Team",
      location: "High Tech, Chulalongkron University",
      description: "The website where contestants can register to enter, scheduled for April 6, 2024  (HighTech Team)",
      buttonText: "Details",
      date: "2023-present",
      icon: "work",
      color: "orange",
      tech: ["React", "Typescript", "Javascript", "CSS", "Html"],
      image : codingChallenge
    },
    {
      id: 7,
      title: "Project Website | CU",
      location: "Chulalongkron University",
      description: "I utilize Postman for Message Shop Reservation, employing REST API with JWT as the token converter and MongoDB as the database.",
      buttonText: "Details",
      date: "2023-present",
      icon: "school",
      color: "red",
      tech: ["JavaScript", "NodeJS", "Postman", "MongoDB", "OpenAPI"],
      image : website
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
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, testimonials, projects };
