import { Reveal } from './Reveal'

export default function About() {
  return (
    <section className="bg-light p-8 md:p-20">
      <div className="text-center m-auto grid place-items-center relative mb-12">
        <h1 className="uppercase text-8xl text-white font-semibold">About</h1>
        <h2 className="absolute text-dark font-bold text-2xl uppercase">
          About me
        </h2>
      </div>
      <div className="text-primary md:flex">
        <div className="">
          <Reveal dly={0.7} duration={1} initY={-30}>
            <p className="text-lg my-3">
              Hi I'm Thomas, a trained audio engineer now working as full stack
              web developer.
              <br />
              After more than 5 years working in the music industry, i decided
              to pursue a new path in tech.
              <br />I can now say that I achieved my goals: I completed a web
              development certification, I contuned there afterwards as teaching
              assistant. A little while ltaer, I started working as freelance
              full stack developer for a startup, which allowed to build a
              confidence in my new skills acquired. This project is now
              completed, I am tehrefore looking to find a new position where I
              can continue to learn and grow as a developer.
            </p>
          </Reveal>
          <Reveal dly={1} duration={1.5} initY={80}>
            <div className="md:columns-2 lg:columns-3">
              <p className="font-semibold">
                Name: <span className="font-normal">Thomas Allen</span>
              </p>
              <p className="font-semibold">
                Phone:{' '}
                <span className="font-normal">+32 (0) 4 73 32 95 56</span>
              </p>
              <p className="font-semibold">
                Location: <span className="font-normal">Brussels, Belgium</span>
              </p>
              <p className="font-semibold">
                Birthday:{' '}
                <span className="font-normal">25th February 1997</span>
              </p>
              <p className="font-semibold">
                Email:{' '}
                <span className="font-normal">
                  thomasallenmartinho@gmail.com
                </span>
              </p>
              <p className="font-semibold">
                Availability:{' '}
                <span className="font-normal">Open to work in 2024</span>
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
