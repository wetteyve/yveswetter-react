import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';

const Footer = () => {
  const linkedin_url = 'https://linkedin.com/in/yves-wetter-9a4444170';
  const github_url = 'https://github.com/wetteyve';

  return (
    <div className='border-t-[1px] bg-white z-10'>
      <div className='h-32 p-5 container mx-auto'>
        <div className='flex justify-center'>
          <a href={github_url} target='_blank' rel='noopener noreferrer'>
            <AiFillGithub className='transition-all ease-in-out duration-150 h-[30px] w-[30px] mr-20 hover:cursor-pointer hover:scale-125' />
          </a>
          <a href={linkedin_url} target='_blank' rel='noopener noreferrer'>
            <AiFillLinkedin className='transition-all ease-in-out duration-150 h-[30px] w-[30px] hover:cursor-pointer hover:scale-125' />
          </a>
        </div>
        <div className='flex justify-center pt-4'>
          <span className='r-text-s'>{`${new Date().getFullYear()} - Yves Wetter -`}</span>
          <Link href={'/impressum'}>
            <span className='r-text-s hover:cursor-pointer whitespace-pre'>{' Impressum'}</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
