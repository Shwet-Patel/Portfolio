import { nanoid } from 'nanoid';
import { FaHtml5, FaJs, FaReact } from 'react-icons/fa';
import { DiCode } from 'react-icons/di';
import project1 from "./assets/project1.png";
import project2 from './assets/project2.png';
import project3 from './assets/project3.png';

export const links = [
  { id: nanoid(), href: '#home', text: 'home' },
  { id: nanoid(), href: '#skills', text: 'skills' },
  { id: nanoid(), href: '#about', text: 'about' },
  { id: nanoid(), href: '#projects', text: 'projects' },
];

export const skills = [
  {
    id: nanoid(),
    title: 'HTML & CSS',
    icon: <FaHtml5 className='h-16 w-16 text-emerald-500' />,
    text: 'Highly skilled in HTML & CSS, adeptly crafting visually appealing and responsive websites for optimal user experiences.',
  },
  {
    id: nanoid(),
    title: 'Javascript',
    icon: <FaJs className='h-16 w-16 text-emerald-500' />,
    text: 'Expertise in JavaScript, building interactive and dynamic web applications with a focus on seamless user interactions and functionality',
  },
  {
    id: nanoid(),
    title: 'React',
    icon: <FaReact className='h-16 w-16 text-emerald-500' />,
    text: 'Advanced proficiency in React, developing efficient and interactive front-end applications with a strong emphasis on component-based architecture.',
  },
  {
    id: nanoid(),
    title: 'Dev Tools',
    icon: <DiCode className='h-16 w-16 text-emerald-500' />,
    text: 'Skilled in utilizing Tailwind CSS, GitHub, Netlify and VS Code. This versatile toolset ensures efficient project execution and seamless integration.',
  }
];

export const projects = [
  {
    id: nanoid(),
    img: project2,
    url: 'https://flickfinder-brown.vercel.app/',
    github: 'https://github.com/Shwet-Patel/flickfinder',
    title: 'Flick Finder',
    text: "Flick Finder is a media database it contains all the information about movies and web series. You can find anything on that. Data is fetched from TMDB's API.",
  },
  {
    id: nanoid(),
    img: project3,
    url: 'https://firstflight-two.vercel.app/',
    github: 'https://github.com/Shwet-Patel/Firstflight',
    title: 'FirstFlight Travels',
    text: "FirstFlight is an elegant website for travel companies to shwcase their packages and tavel locations to their customers.",
  },
  {
    id: nanoid(),
    img: project1,
    url: 'https://cruncher-calc.vercel.app/',
    github: 'https://github.com/Shwet-Patel/Cruncher',
    title: 'Cruncher',
    text: "Cruncher is a simple fitness app. This app will calculate your macros, BMI, Bodyfat and ideal weight for you.",
  }
];
