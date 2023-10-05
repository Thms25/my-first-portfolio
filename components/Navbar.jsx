'use client';

import { useState, useEffect } from 'react';

export default function Navbar () {
  const [showNav, setShowNav] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowNav(true);
      } else {
        setShowNav(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`fixed w-full px-3 py-2 bg-light ${showNav ? 'opacity-90' : 'opacity-0'} flex justify-between items-center transition opacity-0 duration-300`}>
      <h1 className='text-3xl font-bold text-secondary'>Thomas <span>Allen</span></h1>
      <ul className=' hidden md:flex md:justify-between text-primary text-md w-1/2 lg:w-2/5 xl:w-1/3'>
        <li className='navItems'>Home</li>
        <li className='navItems'>About</li>
        <li className='navItems'>Education</li>
        <li className='navItems'>Skills</li>
        <li className='navItems'>Projects</li>
      </ul>
      <button className='px-4 py-2 rounded-full border border-dark text-dark shadow-sm hover:bg-primary hover:text-light duration-300'>CV</button>
    </nav>
  );
}
