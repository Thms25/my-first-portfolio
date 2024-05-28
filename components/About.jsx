import { Reveal } from './Reveal'
import SectionTitles from './SectionTitles'

export default function About() {
  return (
    <section className="bg-light p-8 md:p-20">
      <SectionTitles back_title={'About'} front_title={'About me'} />

      <div className="text-primary md:flex">
        <div className="">
          <Reveal dly={0.4} duration={1} initY={-30}>
            <p className="text-lg my-3">
              Hi I'm Thomas, a former sound engineer now working as full stack
              web developer.
              <br />
              Two years ago, I made a career transition into web development,
              embarking on an intensive certification at Le Wagon, where
              afterwards I worked as teacher assistant, while also in parallel
              continuously developing my knowledge and skills. My journey of
              freelance web developer then started when I joined a startup
              working on a SaaS product, collaborating closely with data
              engineers. Leveraging my prior experience in sound engineering, I
              brought a unique perspective to the team, emphasising
              professionalism, adaptability, creativity and team-work.
              <br />I am now looking to find a new position where I can continue
              to learn and grow as a developer.
            </p>
          </Reveal>
          <Reveal dly={0.6} duration={1.5} initY={80}>
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
