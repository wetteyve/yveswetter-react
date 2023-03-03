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
          logos: [<SiNodedotjs className={logoClassName} />, <SiStrapi className={logoClassName} />],
        },
        {
          groupTitle: 'DevOps',
          logos: [<SiRailway className={logoClassName} />],
        },
      ],
    },
  ],
};
