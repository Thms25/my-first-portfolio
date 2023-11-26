'use client';

import Image from 'next/image';
import styles from 'styles/header.module.scss';
import { motion } from 'framer-motion';
import Typed from 'react-typed';
import { Link as ScrollLink } from 'react-scroll';
import { basePath } from '@/next.config';

export default function Header () {
  return (
    <header className='h-screen grid place-items-center'>
      <div className='lg:flex md:justify-evenly p-4 grid items-center gap-8 mx-4 lg:mx-6 mt-20 '>
        <Image
          priority
          width={720}
          height={480}
          src={`${basePath}/images/me.jpeg`}
          alt='picture of me'
          className='m-auto mb-8 w-full xl:w-3/4'
        />
        <div className='text-center lg:text-left'>
          <h3 className='text-lg md:text-2xl'>Hello I am</h3>
          <h1 className='text-4xl lg:text-6xl xl:text-7xl text-dark uppercase font-bold' id={styles.name}>
            Thomas Allen
          </h1>
          <h3 className='text-xl lg:text-3xl xl:text-4xl'>
            <Typed
              strings={['Full Stack Developer']}
              typeSpeed={60}
              backSpeed={20}
              loop
            />
          </h3>
          <div className='mt-8'>
            <a href='/public/files/Thomas_Allen_CV.pdf' download className='mt-6 btn'>Download my CV</a>
          </div>
        </div>
      </div>
      <ScrollLink to="about" smooth={true} duration={500}>
        <motion.div
          className="mt-6 m-auto w-4"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className={`w-6 h-6 ${styles.arrow}`}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
          </svg>
        </motion.div>
      </ScrollLink>
    </header>

  );
}
