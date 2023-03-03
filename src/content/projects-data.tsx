import { FaCouch } from 'react-icons/fa';
import {
  SiDocker,
  SiExpress,
  SiGithubactions,
  SiJavascript,
  SiKubernetes,
  SiMicrosoftazure,
  SiNestjs,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiRailway,
  SiReact,
  SiStrapi,
  SiTailwindcss,
  SiTypescript,
  SiVite,
  SiVuedotjs,
  SiWebpack,
} from 'react-icons/si';

import claudioLogo from '../assets/claudio/claudiohetzel.ico';
import yvesLogoBlack from '../assets/logos/logo_3d_background.svg';
import mtLogo from '../assets/makethings/MakeThings.webp';
import emoryLogo from '../assets/see/emory_logo.svg';
import seeLogo from '../assets/see/see_apple_white.png';
import uhtLogo from '../assets/uht/uht2023.webp';

const logoClassName = 'w-full h-[100px]';

export const data = {
  projects: [
    {
      title: 'Makethings',
      shortDescription: 'Out of the home workshop, into the Makerspaces',
      description: 'This content is still under development...',
      devTeamSize: 5,
      thumbnails: [mtLogo],
      heading: (
        <iframe
          className='h-full w-full'
          src='https://www.youtube.com/embed/lrBOpa1sB9w'
          title='YouTube video player'
          frameBorder='0'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
          allowFullScreen
        ></iframe>
      ),
      technologies: [
        {
          groupTitle: 'Frontend',
          logos: [
            <SiTypescript className={logoClassName} />,
            <SiReact className={logoClassName} />,
            <SiVite className={logoClassName} />,
            <SiTailwindcss className={logoClassName} />,
          ],
        },
        {
          groupTitle: 'Backend',
          logos: [
            <SiNodedotjs className={logoClassName} />,
            <SiExpress className={logoClassName} />,
            <FaCouch className={logoClassName} />,
          ],
        },
        {
          groupTitle: 'DevOps',
          logos: [
            <SiGithubactions className={logoClassName} />,
            <SiRailway className={logoClassName} />,
            <SiMicrosoftazure className={logoClassName} />,
            <SiKubernetes className={logoClassName} />,
            <SiDocker className={logoClassName} />,
          ],
        },
      ],
      paragraphs: [
        "Makethings makes Switzerland's creative spaces accessible to everyone. Whoever offers workshops, machines, rooms or workstations can do this completely automated with Makethings.",
        'Providers can link machines and rooms directly to the bookings of their customers. By simply scanning QR codes, authorized users can open door locks and switch on machines via an MQTT interface. Nuki Smartlocks as well as Shellys can be easily integrated for this purpose.',
      ],
      link: 'https://makethings.ch/',
    },
    {
      title: 'SEE Learning',
      shortDescription: 'Social, Emotional and Ethical learning',
      description: 'This content is still under development...',
      devTeamSize: 2,
      thumbnails: [seeLogo, emoryLogo],
      heading: (
        <iframe
          className='h-full w-full'
          src='https://www.youtube.com/embed/7YK6jVGLpwE'
          title='YouTube video player'
          frameBorder='0'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
          allowFullScreen
        ></iframe>
      ),
      technologies: [
        {
          groupTitle: 'Frontend',
          logos: [
            <SiTypescript className={logoClassName} />,
            <SiNextdotjs className={logoClassName} />,
            <SiTailwindcss className={logoClassName} />,
          ],
        },
        {
          groupTitle: 'Backend',
          logos: [
            <SiNodedotjs className={logoClassName} />,
            <SiStrapi className={logoClassName} />,
            <SiNestjs className={logoClassName} />,
            <SiPostgresql className={logoClassName} />,
          ],
        },
        {
          groupTitle: 'DevOps',
          logos: [<SiRailway className={logoClassName} />, <SiDocker className={logoClassName} />],
        },
      ],
      paragraphs: [
        'A new corporate website was developed for the SEE Learning project. Furthermore, a platform for the exchange and translation of teaching materials is being created.',
        'Both projects are currently under development and are not yet live.',
      ],
      link: 'https://see-corporate.bettertogether.ag/',
    },
    {
      title: 'UHT Herisau',
      shortDescription: 'The biggest annual indoor sports event in the canton Appenzell Ausserrhoden, Unihockeyturnier Herisau',
      description: 'This content is still under development...',
      devTeamSize: 1,
      thumbnails: [uhtLogo],
      heading: <img src={uhtLogo} alt={`logo_uht_herisau`} className='rounded pb-4 h-full' />,
      technologies: [
        {
          groupTitle: 'Frontend',
          logos: [
            <SiTypescript className={logoClassName} />,
            <SiReact className={logoClassName} />,
            <SiWebpack className={logoClassName} />,
          ],
        },
        {
          groupTitle: 'Backend',
          logos: [
            <SiNodedotjs className={logoClassName} />,
            <SiStrapi className={logoClassName} />,
            <SiExpress className={logoClassName} />,
          ],
        },
        {
          groupTitle: 'DevOps',
          logos: [
            <SiMicrosoftazure className={logoClassName} />,
            <SiKubernetes className={logoClassName} />,
            <SiDocker className={logoClassName} />,
          ],
        },
      ],
      paragraphs: [
        'The floorball tournament Herisau has been held for over 30 years. The tournament enjoys every year a large number of participants of about 100 teams and continues to grow.',
        'For a fully automated registration process and the export of participant lists for the purpose of creating a game schedule, a web application was developed.',
        'In addition, a CMS was installed with Strapi to enable the organizers to manage the content in the best possible way.',
      ],
      link: 'https://uht-herisau.ch/',
    },
    {
      title: 'Custom Backend',
      shortDescription: 'A NestJS server for backend tasks of various private projects',
      description: 'This content is still under development...',
      devTeamSize: 1,
      thumbnails: [yvesLogoBlack],
      heading: <img src={yvesLogoBlack} alt={`logo_yves`} className='rounded pb-4 h-full' />,
      technologies: [
        {
          groupTitle: 'Backend',
          logos: [<SiNodedotjs className={logoClassName} />, <SiNestjs className={logoClassName} />],
        },
        {
          groupTitle: 'DevOps',
          logos: [<SiRailway className={logoClassName} />],
        },
      ],
      paragraphs: [
        'Some projects do not fundamentally rely on a custom backend, but still need to perform some critical operations detached from the client.',
        'This NestJS server was designed for such projects. It allows a very fine granular check of calls and provides a clean error handling. The server is especially used for various mailing services and webhooks and will be extended by me if needed.',
        'Thanks to Railway as a hosting environment, such a custom backend is nowadays very easy to use in a productive environment and causes only moderate costs.',
      ],
    },
    {
      title: 'claudiohetzel.ch',
      shortDescription: 'Portfolio of St.Gallen based photographer Claudio Hetzel',
      description: 'This content is still under development...',
      devTeamSize: 1,
      thumbnails: [claudioLogo],
      heading: <img src={claudioLogo} alt={`logo_claudio`} className='rounded pb-4 h-full' />,
      technologies: [
        {
          groupTitle: 'Frontend',
          logos: [
            <SiJavascript className={logoClassName} />,
            <SiVuedotjs className={logoClassName} />,
            <SiWebpack className={logoClassName} />,
          ],
        },
        {
          groupTitle: 'Backend',
          logos: [<SiNodedotjs className={logoClassName} />, <SiNestjs className={logoClassName} />],
        },
        {
          groupTitle: 'DevOps',
          logos: [
            <SiMicrosoftazure className={logoClassName} />,
            <SiKubernetes className={logoClassName} />,
            <SiDocker className={logoClassName} />,
          ],
        },
      ],
      paragraphs: [
        'My very first web project which is effectively running in a productive environment to this day.',
        "With somewhat limited know-how at that time, I created a portfolio website for a good friend. This project opened the doors to the world of SPA's and was the start of my career as a fullstack developer.",
        'A VueJS frontend pulls content from a Strapi CMS through which the content can be managed in a user-friendly way.',
      ],
      link: 'https://claudiohetzel.ch/',
    },
  ],
};
