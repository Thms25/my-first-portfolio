'use client'

import { useState, useEffect } from 'react'
import { Link as ScrollLink } from 'react-scroll'

export default function Navbar() {
  const [showNav, setShowNav] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowNav(true)
      } else {
        setShowNav(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('main > div')
      const scrollPosition = window.scrollY + 200

      sections.forEach(section => {
        const sectionTop = section.offsetTop
        const sectionHeight = section.clientHeight

        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionTop + sectionHeight
        ) {
          setActiveSection(section.id)
        }
      })
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <nav
      className={`fixed w-full px-3 py-2 bg-light ${
        showNav ? 'opacity-90' : 'opacity-0'
      } flex justify-between items-center transition opacity-0 duration-300 z-20`}
    >
      <ScrollLink to="home" smooth={true} duration={500}>
        <h1 className="text-3xl font-bold text-secondary cursor-pointer">
          Thomas <span>Allen</span>
        </h1>
      </ScrollLink>
      <ul className="hidden md:flex md:justify-between text-primary text-md w-1/2 lg:w-2/5 xl:w-1/3">
        <ScrollLink to="home" smooth={true} duration={500}>
          <li
            className={
              activeSection === 'home'
                ? 'navItems border-b border-b-primary'
                : 'navItems'
            }
          >
            Home
          </li>
        </ScrollLink>
        <ScrollLink to="about" smooth={true} duration={500}>
          <li
            className={
              activeSection === 'about'
                ? 'navItems border-b border-b-primary'
                : 'navItems'
            }
          >
            About
          </li>
        </ScrollLink>
        <ScrollLink to="projects" smooth={true} duration={500}>
          <li
            className={
              activeSection === 'projects'
                ? 'navItems border-b border-b-primary'
                : 'navItems'
            }
          >
            Projects
          </li>
        </ScrollLink>
        <ScrollLink to="skills" smooth={true} duration={500}>
          <li
            className={
              activeSection === 'skills'
                ? 'navItems border-b border-b-primary'
                : 'navItems'
            }
          >
            Skills
          </li>
        </ScrollLink>
        <ScrollLink to="education" smooth={true} duration={500}>
          <li
            className={
              activeSection === 'education'
                ? 'navItems border-b border-b-primary'
                : 'navItems'
            }
          >
            Education
          </li>
        </ScrollLink>
      </ul>
      <a
        href="/public/files/Thomas_Allen_CV.pdf"
        download
        className="px-4 py-2 rounded-full border border-dark text-dark shadow-sm hover:bg-primary hover:text-light duration-300"
      >
        CV
      </a>
    </nav>
  )
}
