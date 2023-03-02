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
  projects: [
    {
      title: 'Makethings',
      description:
        'Das ist eine Beschreibung. Dieser text sollte durchaus etwas länger werden wenn er definitiv is. Hier wird das entsprechende Projekt im Detail beschrieben, Features aufgeführt, eventuell seiten Verlinkt, eingesetze Technologien aufgeführt, Videos verlinkt etc, etc....',
      devTeamSize: 5,
    },
    {
      title: 'SEE Learning',
      description:
        'Das ist eine Beschreibung. Dieser text sollte durchaus etwas länger werden wenn er definitiv is. Hier wird das entsprechende Projekt im Detail beschrieben, Features aufgeführt, eventuell seiten Verlinkt, eingesetze Technologien aufgeführt, Videos verlinkt etc, etc....',
      devTeamSize: 2,
    },
    {
      title: 'UHT Herisau',
      description:
        'Das ist eine Beschreibung. Dieser text sollte durchaus etwas länger werden wenn er definitiv is. Hier wird das entsprechende Projekt im Detail beschrieben, Features aufgeführt, eventuell seiten Verlinkt, eingesetze Technologien aufgeführt, Videos verlinkt etc, etc....',
      devTeamSize: 1,
    },
    {
      title: 'claudiohetzel.ch',
      description:
        'Das ist eine Beschreibung. Dieser text sollte durchaus etwas länger werden wenn er definitiv is. Hier wird das entsprechende Projekt im Detail beschrieben, Features aufgeführt, eventuell seiten Verlinkt, eingesetze Technologien aufgeführt, Videos verlinkt etc, etc....',
      devTeamSize: 1,
    },
  ],
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
};
