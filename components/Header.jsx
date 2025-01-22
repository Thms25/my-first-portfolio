'use client'

import Image from 'next/image'
import styles from '@/styles/header.module.scss'
import { motion } from 'framer-motion'
import Typed from 'react-typed'
import { Link as ScrollLink } from 'react-scroll'
import { basePath } from '@/next.config'

export default function Header() {
  return (
    <header className="h-screen grid place-items-center">
      <div className="lg:flex md:justify-evenly p-4 grid items-center gap-8 mx-4 lg:mx-6 mt-20">
        <div className="w-full xl:w-1/2 lg:mx-auto">
          <Image
            priority
            width={720}
            height={480}
            src={`${basePath}/images/me.jpeg`}
            alt="picture of me"
            className="m-auto lg:mb-8 w-full px-8"
          />
        </div>
        <div className="text-center lg:text-left lg:w-1/2 px-8 mx-auto">
          <h1
            className="text-2xl lg:text-6xl xl:text-4xl uppercase font-bold"
            // id={styles.name}
          >
            Thomas Allen
          </h1>
          <h3 className="text-xl lg:text-2xl xl:text-3xl">
            <Typed
              strings={['Full Stack Developer']}
              typeSpeed={60}
              backSpeed={20}
              loop
            />
          </h3>
          <h4 className="text-md md:text-md mt-4 opacity-60">
            From a background in music, I bring creativity & attention to
            details to each web projects
          </h4>
          <div className="mt-8">
            <a
              href="/public/files/Thomas_Allen_CV.pdf"
              download
              className="mt-6 btn"
            >
              Download my CV
            </a>
          </div>
        </div>
      </div>
      <ScrollLink to="about" smooth={true} duration={500}>
        <motion.div className="mt-6 m-auto w-4 cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className={`w-6 h-6 ${styles.arrow}`}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
            />
          </svg>
        </motion.div>
      </ScrollLink>
    </header>
  )
}
