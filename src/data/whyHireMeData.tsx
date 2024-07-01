import { FaHtml5, FaCss3, FaJs, FaReact } from "react-icons/fa";
import reward1 from "@/assests/level_one_reward.jpg";
import {
  SiTailwindcss,
  SiNextdotjs,
  SiTypescript,
  SiNodedotjs,
  SiBootstrap,
} from "react-icons/si";

// about me data
export const about = {
  title: "About Me",
  description:
    "I am a Full Stack Developer with expertise in both frontend and backend technologies, focused on developing robust web applications.",
  info: [
    {
      name: "Name",
      value: "Abdul Hamid Fahim Bin Azad",
    },
    {
      name: "phone",
      value: "01609408970",
    },
    {
      name: "Email",
      value: "ahfba009@gmail.com",
    },
    {
      name: "Language",
      value: "Bengali, English , Hindi",
    },
  ],
};

// education data about programming
export const education = {
  title: "My Education",
  description:
    "I started my programming journey on an online platform and enhanced my skills through multiple online courses.",
  items: [
    {
      institution: "Programming Hero",
      degree: "Complete Web Development Course",
      duration: "6 month",
      siteLink: "https://web.programming-hero.com/home"
    },
    {
      institution: "Programming Hero",
      degree: "Apollo Next Level Web Development ",
      duration: "6 month",
      siteLink: "https://web.programming-hero.com/home"
    },
    {
      institution: "Programming Hero",
      degree: "Tech Communication ",
      duration: "3 month",
      siteLink: "https://web.programming-hero.com/home"
    },
  ],
};

export const skills = {
  title: "My Skills",
  description:
    "Skilled in frontend technologies and backend languages with expertise in web frameworks such as React and Next.js.",
  skillLists: [
    {
      icon: <FaHtml5 />,
      name: "HTML 5",
    },
    {
      icon: <FaCss3 />,
      name: "CSS 3",
    },
    {
      icon: <FaReact />,
      name: "REACT JS",
    },
    {
      icon: <FaJs />,
      name: "JAVASCRIPT",
    },
    {
      icon: <SiTypescript />,
      name: "TYPESCRIPT",
    },
    {
      icon: <SiNodedotjs />,
      name: "NODE JS",
    },
    {
      icon: <SiNextdotjs />,
      name: "NEXT JS",
    },
  ],
};

export const stats = [
  {
    duration: 1,
    subject: "Years Of Experience",
  },
  {
    duration: 20,
    subject: "Projects",
  },
  {
    duration: 10,
    subject: "Technologies Mastered",
  },
];

export const myRewards = [
  {
    image: reward1,
    details:
      "I completed a web development course from Programming Here. This course provided comprehensive training in web development skills. Upon successfully completing the course, I received a certification, having achieved an average score of 58 out of 60.",
    viewLink: ""
  },
];
export const myEducations = [
  {
    year: "2017 - 2023",
    title: "Bachelor of Arts [B.A.] Honours - Department Of English",
  },
  {
    year: "2015 - 2017 ",
    title: "Higher Secondary Certificate (HSC)",
  },
  {
    year: "2010 - 2015 ",
    title: "Secondary School Certificate (SSC)",
  },
];
