import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

import logo_klein from '../../assets/logos/logo_klein.svg';
import MobileNavbar from './mobile-navbar';

export type NavbarItemType = {
  href: string;
  alternatives?: string[];
  text: string;
};

const Navbar = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const handleScroll = () => {
    const currentScrollPos = window.scrollY;

    if (currentScrollPos > prevScrollPos) {
      setVisible(false);
    } else {
      setVisible(true);
    }

    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  });

  const navbarItemsDesktop: NavbarItemType[] = [
    {
      href: '/projects',
      text: 'Projects',
    },
    {
      href: '/contact',
      text: 'Contact',
    },
  ];

  const navbarItemsMobile: NavbarItemType[] = [
    {
      href: '/',
      text: 'Home',
    },
    ...navbarItemsDesktop,
    {
      href: '/impressum',
      text: 'Impressum',
    },
  ];

  return (
    <div className={`shadow-lg bg-white z-20 sticky ${visible && 'top-0 motion-safe:animate-fadeIn'}`}>
      <div className='container mx-auto h-[80px] p-5 flex justify-between'>
        <div className='flex'>
          <Link href={'/'} className='w-10 mr-5 hover:cursor-pointer'>
            <Image src={logo_klein} alt='logo' />
          </Link>
        </div>
        <div className='md:flex hidden'>
          {navbarItemsDesktop.map((e, i) => (
            <Link key={i} className='my-auto ml-12 hover:cursor-pointer' href={e.href}>
              <p className='r-text-m font-semibold transition-all ease-in duration-150 hover:scale-105'>{e.text}</p>
            </Link>
          ))}
        </div>
        <div className='block md:hidden my-auto'>
          <h1 className='r-text-m font-semibold'>{'YVESWETTER.CH'}</h1>
        </div>
        <div className='block md:hidden'>
          <MobileNavbar items={navbarItemsMobile} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
