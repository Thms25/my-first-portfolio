import { Reveal } from './Reveal'
import SectionTitles from './SectionTitles'
import { differenceInYears } from 'date-fns'

export default function About() {
  return (
    <section className="bg-light p-8 md:p-20">
      <SectionTitles back_title={'About'} front_title={'About me'} />

      <div className="text-primary md:flex">
        <div className="">
          <Reveal dly={0.4} duration={1} initY={-30}>
            <p className="text-lg my-3">
              Hi I'm Thomas, from a background in music, I switched to web
              development !
              <br />
              Two years ago, I made a career transition into web development,
              embarking on a full stack development certification at Le Wagon,
              where afterwards I worked as teacher assistant, while also in
              parallel continuously developing my knowledge and skills. My
              journey of freelance web developer then started when I joined a
              startup working on a SaaS product, collaborating closely with data
              engineers. Leveraging my prior experience in sound engineering, I
              brought a unique perspective to the team, emphasising
              professionalism, adaptability, creativity and team-work.
              <br />I am always looking to find a new exciting project where I
              can continue to learn and grow as a developer, feel free to reach
              out if you have any questions.
            </p>
          </Reveal>
          <Reveal dly={0.6} duration={1.5} initY={80}>
            <div className="md:columns-2 lg:columns-3">
              <p className="font-semibold">
                Name: <span className="font-normal">Thomas Allen</span>
              </p>
              <p className="font-semibold">
                Location: <span className="font-normal">Brussels, Belgium</span>
              </p>
              <p className="font-semibold">
                Age:{' '}
                <span className="font-normal">
                  {differenceInYears(
                    new Date(),
                    new Date('1997-02-25'),
                  ).toString()}
                </span>
              </p>
              <p className="font-semibold">
                Email:{' '}
                <span className="font-normal">
                  thomasallenmartinho@gmail.com
                </span>
              </p>
              <p className="font-semibold">
                Status: <span className="font-normal">Open to work</span>
              </p>
              <p className="font-semibold">
                Availability: <span className="font-normal">January 2025</span>
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
