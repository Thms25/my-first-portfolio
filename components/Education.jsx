import Project from './project';

export default function Experience () {
  return (
    <>
      <section className='bg-light p-20'>
        <div className='text-center m-auto grid place-items-center relative mb-12'>
          <h1 className='uppercase text-6xl md:text-8xl text-white font-semibold'>Education</h1>
          <h2 className='absolute text-dark font-bold text-xl md:text-2xl uppercase'>Education</h2>
        </div>
        <h2>My Education</h2>
        <div className='2xl:columns-3'>
          <div className='text-dark 2xl:border-0 border-l border-secondary'>
            <div className='p-3 flex'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 opacity-75 mr-4 ml-2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
              <div>
                <h3 className='font-bold'>Full Stack Web Development Bootcamp</h3>
                <h5 className='font-semibold mb-2'>Le Waong Brussels <span className='font-normal'>| 2023</span></h5>
                <p>
                  Full-Time Coding bootcamp learning: <br />
                  • Frontend: HTML / CSS / JavaScript / Stimulus / Bootstrap / Figma
                  <br />
                  • Backend: Ruby / PostgreSQL / Git / Command line / GitHub
                  <br />
                  • Deployment: Ruby on Rails / Heroku
                </p>
              </div>
            </div>
            <div className='p-3 flex'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 opacity-75 mr-4 ml-2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
              <div>
                <h3 className='font-bold'>Master's Degree - Sound Engineering</h3>
                <h5 className='font-semibold mb-2'>IAD - Institute des Arts de Diffusions <span className='font-normal'>| 2016 to 2020</span></h5>
                <p>
                  Bachelor & Degree in sound engineering for music, radio, TV and multimedia.
                  <br />
                  The degree was on studio engineering, mixing, mastering; all of the audio production steps in music
                  <br />
                  Main Skills: Mixing & Recording
                </p>
              </div>
            </div>
            <div className='p-3 flex'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 opacity-75 mr-4 ml-2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
              <div>
                <h3 className='font-bold'>Primary & Secondary</h3>
                <h5 className='font-semibold mb-2'>EEB3 - European School of Brussels<span className='font-normal'>| Graduation in 2016</span></h5>
                <p>
                  All school years spent at EEB3. Last years focused on a scientific cursus
                  <br />
                  Languages learnt: French, English, Portuguese, Dutch
                </p>
              </div>
            </div>
        </div>
        </div>
      </section>
      <Project />
    </>
  );
}
