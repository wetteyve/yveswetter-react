import { FaCouch } from 'react-icons/fa';
import {
  SiBitbucket,
  SiConfluence,
  SiCss3,
  SiDocker,
  SiExpress,
  SiFigma,
  SiGit,
  SiGithubactions,
  SiHtml5,
  SiJava,
  SiJavascript,
  SiJira,
  SiKubernetes,
  SiMicrosoftazure,
  SiNestjs,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiRailway,
  SiReact,
  SiSpring,
  SiTailwindcss,
  SiTypescript,
  SiVite,
  SiVuedotjs,
  SiWebpack,
} from 'react-icons/si';

const logoClassName = 'w-full h-[100px]';

export const data = {
  welcomeHeading: 'Welcome to my portfolio',
  welcomeText:
    "Hi there! My name is Yves and I'm working as a fullstack web developer since 2020. I have a Bachelor of Science ZFH in Computer Science from ZHAW School of Engineering. When it comes to frontend development, I'm a big fan of javascript frameworks like Next.js React and Vue. When it comes to backend, I prefer working with NodeJS. NestJS and Express are my favorite NodeJS frameworks for backend services at the moment. If possible, I always work with Typescript in my projects.",
  skillsHeading: 'Skills',
  skillsIntroduction:
    'Since I have started my computer science journey in 2018 I have gotten into several technologies. Some of them are listed below.',
  skills: [
    {
      title: 'Frontend',
      items: [
        { title: 'Typescript', logo: <SiTypescript className={logoClassName} /> },
        { title: 'Javascript', logo: <SiJavascript className={logoClassName} /> },
        { title: 'Next.js', logo: <SiNextdotjs className={logoClassName} /> },
        { title: 'React', logo: <SiReact className={logoClassName} /> },
        { title: 'Vue', logo: <SiVuedotjs className={logoClassName} /> },
        { title: 'Vite', logo: <SiVite className={logoClassName} /> },
        { title: 'Webpack', logo: <SiWebpack className={logoClassName} /> },
        { title: 'Tailwind', logo: <SiTailwindcss className={logoClassName} /> },
        { title: 'CSS', logo: <SiCss3 className={logoClassName} /> },
        { title: 'HTML5', logo: <SiHtml5 className={logoClassName} /> },
      ],
    },
    {
      title: 'Backend',
      items: [
        { title: 'NodeJS', logo: <SiNodedotjs className={logoClassName} /> },
        { title: 'NestJS', logo: <SiNestjs className={logoClassName} /> },
        { title: 'Express', logo: <SiExpress className={logoClassName} /> },
        { title: 'Java', logo: <SiJava className={logoClassName} /> },
        { title: 'Spring', logo: <SiSpring className={logoClassName} /> },
        { title: 'PostgreSQL', logo: <SiPostgresql className={logoClassName} /> },
        { title: 'CouchDB', logo: <FaCouch className={logoClassName} /> },
      ],
    },
    {
      title: 'DevOps',
      items: [
        { title: 'GithubActions', logo: <SiGithubactions className={logoClassName} /> },
        { title: 'Bitbucket Pipelines', logo: <SiBitbucket className={logoClassName} /> },
        { title: 'Railway.app', logo: <SiRailway className={logoClassName} /> },
        { title: 'Azure', logo: <SiMicrosoftazure className={logoClassName} /> },
        { title: 'Kubernetes', logo: <SiKubernetes className={logoClassName} /> },
        { title: 'Docker', logo: <SiDocker className={logoClassName} /> },
      ],
    },
    {
      title: 'Tools',
      items: [
        { title: 'Git', logo: <SiGit className={logoClassName} /> },
        { title: 'Jira', logo: <SiJira className={logoClassName} /> },
        { title: 'Confluence', logo: <SiConfluence className={logoClassName} /> },
        { title: 'Figma', logo: <SiFigma className={logoClassName} /> },
      ],
    },
  ],
  projectsHeading: 'Projects',
  projectsIntroduction: `Check out some of the exciting web projects I've worked on. I was able to contribute to several fullstack projects or implemented them completely on my own.`,
  contactHeading: 'Contact',
  contactIntroduction:
    'If you have any questions about one of my projects, me or anything else, you can reach me here via the contact form. I will try to answer your questions as soon as possible. Thanks for stopping by.',
};
