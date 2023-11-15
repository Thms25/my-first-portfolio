import Image from 'next/image';

export default function About () {
  return (
    <section className='bg-light p-20'>
      <div className='text-center m-auto grid place-items-center relative mb-12'>
        <h1 className='uppercase text-8xl text-white font-semibold'>About</h1>
        <h2 className='absolute text-dark font-bold text-2xl uppercase'>About me</h2>
      </div>
      <div className='text-primary md:flex'>
        <div className=''>
          <Image
              priority
              width={720}
              height={480}
              src='/images/me.jpeg'
              className='m-auto my-6 w-full sm:w-1/2'
          />
          <h3 className='font-semibold text-xl'>Full Stack Developer</h3>
          <p className='text-lg my-3'>
            Hi I'm Thomas, a trained sound engineer now working as full stack web developer.
            <br />
            After more than 5 years working in the sound industry, i decided to pursue a new path in tech. I can now say that I achieved my goals: I completed a web development certification, I learnt so many things, way more than expected; I found a new passion. After the courses I had my first job as freelance full stack developer, which gave me confidence in my skills, I am now looking to find a new position for 2024 where I can continue to learn and grow as a developer.
          </p>
          <div className="md:columns-2 lg:columns-3">
            <p className='font-semibold'>Name: <span className='font-normal'>Thomas Allen</span></p>
            <p className='font-semibold'>Phone: <span className='font-normal'>+32 (0) 4 73 32 95 56</span></p>
            <p className='font-semibold'>Location: <span className='font-normal'>Brussels, Belgium</span></p>
            <p className='font-semibold'>Birthday: <span className='font-normal'>25th February 1997</span></p>
            <p className='font-semibold'>Email: <span className='font-normal'>thomasallenmartinho@gmail.com</span></p>
            <p className='font-semibold'>Availability: <span className='font-normal'>Open to work in 2024</span></p>
          </div>
        </div>
      </div>
    </section>
  );
}
