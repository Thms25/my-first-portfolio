import React from 'react';

const Navbar = () => {
  return (
    <nav className='px-3 py-2 bg-light flex justify-between items-center'>
      <h1 className='text-3xl font-bold text-secondary'>Thomas <span>Allen</span></h1>
      <ul className=' hidden md:flex text-primary text-md'>
        <li>Home</li>
        <li className='ml-2'>About</li>
        <li className='ml-2'>Education</li>
        <li className='ml-2'>Skills</li>
        <li className='ml-2'>Projects</li>
      </ul>
      <button className='px-4 py-2 rounded-full border border-dark text-dark shadow-sm hover:bg-primary hover:text-light duration-300'>CV</button>
    </nav>
  );
}

export default Navbar;
