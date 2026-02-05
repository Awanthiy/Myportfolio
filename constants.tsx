import React from 'react';
import {
  Code2,
  Palette,
  Database,
  Figma,
  Github,
  Linkedin,
  Mail,
  Layout,
  Smartphone,
  Globe,
  Server,
} from 'lucide-react';
import { Project, Skill, Certification } from './types';

/* =======================
   IMAGE IMPORTS
======================= */

import awymImg from './components/assets/awym.png';
import d1Img from './components/assets/d1.png';
import d2Img from './components/assets/d2.png';
import d3Img from './components/assets/d3.png';
import d4Img from './components/assets/d4.png';
import d6Img from './components/assets/d6.png';
import u1Img from './components/assets/u1.png';

/* =======================
   PROFILE IMAGE
======================= */

export const IMAGES = {
  profile: awymImg,
};

/* =======================
   SKILLS
======================= */

export const SKILLS: Skill[] = [
  { name: 'React / Next.js', level: 5, icon: 'Layout', category: 'frontend' },
  { name: 'TypeScript', level: 4, icon: 'Code2', category: 'frontend' },
  { name: 'React Native', level: 4, icon: 'Smartphone', category: 'mobile' },
  { name: 'Tailwind CSS', level: 5, icon: 'Palette', category: 'frontend' },
  { name: 'Node.js', level: 4, icon: 'Server', category: 'backend' },
  { name: 'PostgreSQL', level: 4, icon: 'Database', category: 'backend' },
  { name: 'Figma', level: 5, icon: 'Figma', category: 'design' },
  { name: 'Adobe XD', level: 4, icon: 'Palette', category: 'design' },
  { name: 'Git / GitHub', level: 5, icon: 'Github', category: 'tools' },
  {
    name: 'WordPress',
    level: 5,
    icon: 'Globe',
    category: 'cms',
    officialLink: 'https://wordpress.org',
  },
];

/* =======================
   PROJECTS
======================= */

export const PROJECTS: Project[] = [
  {
    id: 'd1',
    title: 'Pet Care Center Website',
    description: 'Developed this website using React.js.',
    category: 'dev',
    image: d1Img,
    tags: ['React', 'Node.js'],
    tools: ['React', 'Express'],
    github: 'https://github.com/Awanthiy/PetCareCenter-React',
  },
  {
    id: 'd2',
    title: 'Portfolio Website',
    description: 'Designed and developed a personal portfolio website.',
    category: 'dev',
    image: d2Img,
    tags: ['React', 'TypeScript'],
    tools: ['Tailwind', 'Vite'],
    github: 'https://github.com/Awanthiy/Myportfolio',
  },
  {
    id: 'd3',
    title: 'Movie Hub Website',
    description: 'Developed Movie Hub using React and a movie API.',
    category: 'dev',
    image: d3Img,
    tags: ['React', 'API'],
    tools: ['React', 'REST API'],
    github: 'https://github.com/Awanthiy/Movie-Explorer',
  },
  {
    id: 'd4',
    title: 'Smart Kidz Learning App',
    description: 'Collaborated with a team to create a kid-friendly learning app.',
    category: 'dev',
    image: d4Img,
    tags: ['React'],
    tools: ['Vite', 'TypeScript'],
    github: 'https://github.com/grHarshan/smart_kidz_games',
  },
  {
    id: 'd6',
    title: 'Auction Management System',
    description: 'Contributed significantly to the frontend development.',
    category: 'dev',
    image: d6Img,
    tags: ['React'],
    tools: ['Vite', 'TypeScript'],
    github: 'https://github.com/grHarshan/SA-Auction_Management_System-G34',
  },
  {
    id: 'u1',
    title: 'UI / UX Design Portfolio',
    description: 'See my every UI designs on Behance.',
    category: 'uiux',
    image: u1Img,
    tags: ['UI', 'UX', 'Figma'],
    tools: ['Figma', 'Adobe XD'],
    github: 'https://www.behance.net/awanthimalawanage', // kept under github
  },
];

/* =======================
   CERTIFICATIONS
======================= */

export const CERTIFICATIONS: Certification[] = [
  {
    id: 'c1',
    title: 'CS50 Introduction to Computer Science',
    issuer: 'EDX-Harvard University',
    date: '2025',
    link: 'https://certificates.cs50.io/1721080a-6f76-4335-b597-f17406dfa95c.pdf?size=letter', // example link
  },
  {
    id: 'c2',
    title: 'Programming Foundations with JavaScript, HTML and CSS',
    issuer: 'Duke University/ coursera',
    date: '2021',
    link: 'https://www.coursera.org/account/accomplishments/verify/8P8XK98556B6', // example link
  },
  {
    id: 'c3',
    title: 'Responsive Web Design',
    issuer: 'FreeCodeCamp',
    date: '2024',
    link: 'https://www.freecodecamp.org/certification/Awanthi/responsive-web-design', // example link
  },
  {
    id: 'c4',
    title: 'Get Started with Figma ',
    issuer: 'Coursera',
    date: '2023',
    link: 'https://www.coursera.org/account/accomplishments/verify/7TDX8YHAL4NA', // example link
  },

];

/* =======================
   SOCIAL LINKS
======================= */

export const SOCIAL_LINKS = [
  {
    name: 'GitHub',
    icon: <Github size={20} />,
    url: 'https://github.com/Awanthiy',
  },
  {
    name: 'LinkedIn',
    icon: <Linkedin size={20} />,
    url: 'https://www.linkedin.com/in/awanthi-malawanage',
  },
  {
    name: 'Behance',
    icon: <Palette size={20} />,
    url: 'https://www.behance.net/awym',
  },
  {
    name: 'Contact',
    icon: <Mail size={20} />,
    url: 'mailto:awanthiyashodara@gmail.com',
  },
];
