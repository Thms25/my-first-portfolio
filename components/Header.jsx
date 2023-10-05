'use client';

import Image from 'next/image';
import styles from 'styles/header.module.scss';
import { motion } from 'framer-motion';

export default function Header () {
  return (
    <header className='h-screen grid place-items-center'>
      <div className='md:flex lg:justify-evenly p-4 grid items-center gap-8 mx-4 lg:mx-6 mt-20 '>
        <Image
          priority
          width={720}
          height={480}
          src='/images/me.jpeg'
          className='m-auto mb-8 w-full md:w-3/4 xl:w-full'
        />
        <div className='text-center md:text-left'>
          <h3>Hello I am</h3>
          <h1 className='text-5xl text-dark uppercase font-bold' id={styles.name}>Thomas Allen</h1>
          <h3 className='text-2xl'>Full Stack Developer</h3>
          <div className='mt-8'>
            <a href='/public/files/Thomas_Allen_CV.pdf' download className='mt-6 btn'>Download my CV</a>
          </div>
        </div>
      </div>
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
    </header>

  );
}
