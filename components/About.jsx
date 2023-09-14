import React from 'react';
import Image from 'next/image';

const About = () => {
  return (
    <section className='bg-light p-12'>
      <div className='text-center m-auto grid place-items-center relative mb-12'>
        <h1 className='uppercase text-8xl text-white font-semibold'>About</h1>
        <h2 className='absolute text-dark font-bold text-2xl uppercase'>About me</h2>
      </div>
      <div className='text-primary lg:flex'>
        <Image
            priority
            width={720}
            height={480}
            src='/images/me.jpeg'
            className='m-auto my-6 w-1/2'
        />
        <div className=''>
          <h3 className='font-semibold text-xl'>Full Stack Developer</h3>
          <p className='text-lg my-3'>
            Hi I'm Thomas, a trained sound engineer now working towards becoming a full stack web developer. I am driven by the balance of technical ability and creativity that those careers demand. I am eager to grow within the tech industry that evolves ever so quickly.
          </p>
          <div className="columns-2">
            <p className='font-semibold'>Name - <span className='font-normal'>Thomas Allen</span></p>
            <p className='font-semibold'>Phone - <span className='font-normal'>+32 (0) 4 73 32 95 56</span></p>
            <p className='font-semibold'>Location - <span className='font-normal'>Brussels, Belgium</span></p>
            <p className='font-semibold'>Birthday <span className='font-normal'>25th February 1997</span></p>
            <p className='font-semibold'>Email <span className='font-normal'>thomasallenmartinho@gmail.com</span></p>
            <p className='font-semibold'>Availability <span className='font-normal'>Open to work</span></p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
