'use client'

import Image from 'next/image'
import styles from '/styles/header.module.scss'
import { motion } from 'framer-motion'
// import Typed from 'react-typed'
import { Link as ScrollLink } from 'react-scroll'
import { Reveal } from './Reveal'

export default function Header() {
  return (
    <header className="h-screen grid place-items-center">
      <div className="lg:flex md:justify-evenly p-4 grid items-center gap-8 mx-4 lg:mx-6 mt-20">
        <div className="w-full xl:w-1/2 lg:mx-auto">
          <Reveal>
            <Image
              priority
              width={720}
              height={480}
              src="/images/me.jpeg"
              alt="picture of me"
              className="m-auto lg:mb-8 w-full px-8"
            />
          </Reveal>
        </div>
        <div className="text-center lg:text-left lg:w-1/2 px-8 mx-auto">
          <Reveal initS={1} initX={90} dly={0.75}>
            <h1
              className="text-2xl lg:text-6xl xl:text-4xl uppercase font-bold"
              // id={styles.name}
            >
              Thomas Allen
            </h1>
          </Reveal>
          <Reveal initY={-50} duration={1} dly={1.1}>
            <h4 className="text-lg lg:text-xl xl:text-2xl font-normal">
              {/* <Typed
                strings={['Full Stack Developer']}
                typeSpeed={100}
                backSpeed={20}
                startDelay={600}
                // loop
              /> */}
              Full Stack Developer
            </h4>
          </Reveal>
          <Reveal initS={1} initY={50} dly={1} duration={0.75}>
            <h4 className="text-md md:text-md mt-4 opacity-60">
              From a background in music, I bring creativity & attention to
              details to each web projects
            </h4>
          </Reveal>
          <Reveal initS={1} dly={1.5} initY={20} duration={1}>
            <div className="mt-8 py-2">
              <a
                href="/files/Thomas_Allen_CV.pdf"
                download
                className="mt-6 btn"
              >
                Download my CV
              </a>
            </div>
          </Reveal>
        </div>
      </div>
      <ScrollLink to="about" smooth={true} duration={500}>
        <motion.div className="m-auto w-4 cursor-pointer p-8">
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
