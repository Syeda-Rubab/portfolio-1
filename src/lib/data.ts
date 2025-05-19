import { Link, ProjectInfo } from "./types";

export const links: Link[] =[
    {
        nameEng: "Home",
        hash: "#home",
    },
    {
        nameEng: "About",
        hash: "#about",
    },
    {
        nameEng: "Projects",
        hash: "#projects",
    },
    {
        nameEng: "Skills",
        hash: "#skills",
    },
    {
        nameEng: "Contact",
        hash: "#contact",
    },
];

export const projectsData: ProjectInfo[] = [
    {
        title:"E-Commerce Website",
        description:
        "I have developed a modern and responsive E-Commerce website using React, Next.js, and Tailwind CSS. The design of this website is user-friendly, featuring a visually appealing layout and seamless navigation.",
        tags: ["React", "Next.js", "MongoDB", "Tailwind", "NodeJS"],
        imageUrl: "/E-Com.png",
        link:"https://furniro-six-liart.vercel.app/"
    },

    {
        title:"Food Web",
         description:
         "I have developed a modern and responsive food website using React, Next.js, and Tailwind CSS. The design of this website is user-friendly, featuring a visually appealing layout and seamless navigation.",
         tags: ["React", "Next.js", "MongoDB", "Tailwind", "NodeJS"],
         imageUrl: "/foodweb.png",
         link:"www.google.com/"
     },

    
    {
        title:"Resume Builder Form",
        description:
        "A web app using HTML, CSS, and TypeScript to create, edit, and download resumes with photo upload and unique shareable links.",
        tags: ["React", "Next.js", "MongoDB", "Tailwind", "NodeJS"],
        imageUrl: "/form.png",
        link:"www.google.com/"
   },

   {
       
    title:"Personal Portfolio",
    description:
    "I have created a personal portfolio using Next.js, TypeScript, Tailwind CSS, and React, showcasing my skills in modern web development.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "NodeJS"],
    imageUrl: "/port.png",
    link:""

  },
    
    ];


    export const skillsData = [
        "HTML",
        "CSS",
        "JavaScript",
        "TypeScript",
        "React",
        "Next.js",
        "Node.js",
        "Git",
        "Tailwind",
        "prisma",
        "Framer Motion",
        "FastAPI",
        "Python",
        "Streamlit",
        "Sanity",
    

    ];