import { FaBitbucket, FaCouch, FaDocker, FaGit, FaHtml5, FaJava, FaNodeJs, FaReact, FaVuejs } from 'react-icons/fa';
import {
  SiConfluence,
  SiCss3,
  SiExpress,
  SiFigma,
  SiGithubactions,
  SiJavascript,
  SiJira,
  SiKubernetes,
  SiMicrosoftazure,
  SiNestjs,
  SiNextdotjs,
  SiPostgresql,
  SiRailway,
  SiSpring,
  SiTailwindcss,
  SiTypescript,
  SiVite,
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
        { title: 'React', logo: <FaReact className={logoClassName} /> },
        { title: 'Vue', logo: <FaVuejs className={logoClassName} /> },
        { title: 'Vite', logo: <SiVite className={logoClassName} /> },
        { title: 'Webpack', logo: <SiWebpack className={logoClassName} /> },
        { title: 'CSS', logo: <SiCss3 className={logoClassName} /> },
        { title: 'HTML5', logo: <FaHtml5 className={logoClassName} /> },
      ],
    },
    {
      title: 'Backend',
      items: [
        { title: 'NodeJS', logo: <FaNodeJs className={logoClassName} /> },
        { title: 'NestJS', logo: <SiNestjs className={logoClassName} /> },
        { title: 'Express', logo: <SiExpress className={logoClassName} /> },
        { title: 'Java', logo: <FaJava className={logoClassName} /> },
        { title: 'Spring', logo: <SiSpring className={logoClassName} /> },
        { title: 'PostgreSQL', logo: <SiPostgresql className={logoClassName} /> },
        { title: 'CouchDB', logo: <FaCouch className={logoClassName} /> },
      ],
    },
    {
      title: 'DevOps',
      items: [
        { title: 'GithubActions', logo: <SiGithubactions className={logoClassName} /> },
        { title: 'Bitbucket Pipelines', logo: <FaBitbucket className={logoClassName} /> },
        { title: 'Railway.app', logo: <SiRailway className={logoClassName} /> },
        { title: 'Azure', logo: <SiMicrosoftazure className={logoClassName} /> },
        { title: 'Kubernetes', logo: <SiKubernetes className={logoClassName} /> },
        { title: 'Docker', logo: <FaDocker className={logoClassName} /> },
      ],
    },
    {
      title: 'Tools',
      items: [
        { title: 'Git', logo: <FaGit className={logoClassName} /> },
        { title: 'Tailwind', logo: <SiTailwindcss className={logoClassName} /> },
        { title: 'Jira', logo: <SiJira className={logoClassName} /> },
        { title: 'Confluence', logo: <SiConfluence className={logoClassName} /> },
        { title: 'Figma', logo: <SiFigma className={logoClassName} /> },
      ],
    },
  ],
};
