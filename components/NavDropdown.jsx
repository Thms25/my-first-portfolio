'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { Link as ScrollLink } from 'react-scroll'

export default function NavDropdown({ navItems }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="flex items-center justify-center bg-light">
      <motion.div animate={open ? 'open' : 'closed'} className="relative">
        <button
          onClick={() => setOpen(pv => !pv)}
          className="flex items-center gap-2 text-dark bg-dark bg-opacity-0 hover:bg-opacity-20 transition duration-250"
        >
          <motion.span variants={iconVariants}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 48 48"
              className="md:hidden text-dark cursor-pointer w-8 h-8"
            >
              <path
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={4}
                d="M7.95 11.95h32m-32 12h32m-32 12h32"
              ></path>
            </svg>
          </motion.span>
        </button>

        <motion.ul
          initial={wrapperVariants.closed}
          variants={wrapperVariants}
          style={{ originY: 'top', translateX: '-50%' }}
          className="flex flex-col gap-2 p-4 rounded-lg bg-light shadow-xl absolute left-[50%] w-96  overflow-hidden text-dark"
        >
          {navItems.map(item => (
            <motion.li
              key={item.id}
              variants={itemVariants}
              className="text-sm flex items-center gap-2 w-full p-4 font-medium whitespace-nowrap rounded-md transition cursor-pointer"
            >
              <ScrollLink
                to={item.id}
                smooth={true}
                duration={500}
                onClick={() => {
                  // router.push(item.link)
                  setOpen(false)
                }}
              >
                <span>{item.name}</span>
              </ScrollLink>
            </motion.li>
          ))}
          <li>
            <a
              href="/files/Thomas_Allen_CV.pdf"
              download
              className="text-sm flex items-center gap-2 w-full p-4 font-medium whitespace-nowrap rounded-md transition cursor-pointer"
            >
              Download CV
            </a>
          </li>
        </motion.ul>
      </motion.div>
    </div>
  )
}

const wrapperVariants = {
  open: {
    scaleY: 1,
    transition: {
      when: 'beforeChildren',
      staggerChildren: 0.05,
    },
  },
  closed: {
    scaleY: 0,
    transition: {
      when: 'afterChildren',
      staggerChildren: 0.05,
    },
  },
}

const iconVariants = {
  open: { rotate: 90 },
  closed: { rotate: 0 },
}

const itemVariants = {
  open: {
    opacity: 1,
    y: 0,
    transition: {
      when: 'beforeChildren',
    },
  },
  closed: {
    opacity: 0,
    y: -15,
    transition: {
      when: 'afterChildren',
    },
  },
}
