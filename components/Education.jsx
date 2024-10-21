import { Reveal } from './Reveal'
import SectionTitles from './SectionTitles'

const educationDate = [
  {
    title: 'Certification - Harvard CS50',
    school: 'Harvard online EDX',
    date: 'Current',
    description:
      'Online course on computer science and programming: C, Python, SQL, JavaScript, Algorithms, Security, Data Structure, Memory',
  },
  {
    title: 'Certification - Web Development',
    school: 'Le Wagon Brussels',
    date: '2023',
    description:
      'Full-Time Coding bootcamp learning: HTML / CSS / JavaScript / Bootstrap / Figma, Ruby / PostgreSQL / Git / Command line / GitHub,Ruby on Rails / Heroku',
  },
  {
    title: "Master's Degree - Sound Engineering",
    school: 'IAD - Institute des Arts de Diffusions',
    date: '2016 to 2020',
    description:
      'Bachelor & Degree in sound engineering for music, radio, TV and multimedia. The degree was on studio engineering, mixing, mastering; all of the audio production steps in music. Main Skills: Mixing & Recording',
  },
  {
    title: 'Primary & Secondary',
    school: 'EEB3 - European School of Brussels',
    date: 'Graduation in 2016',
    description:
      'All school years spent at EEB3. Last years focused on a scientific cursus. Languages learnt: French, English, Portuguese, Dutch',
  },
]

export default function Experience() {
  return (
    <>
      <section className="bg-light p-8 md:p-20">
        <SectionTitles back_title={'Education'} front_title={'My Education'} />
        <h2>My Education</h2>
        <div className="xl:columns-2">
          <div className="text-dark xl:border-0 border-l border-secondary">
            {educationDate.map((education, index) => (
              <div key={index} className="p-3 flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 opacity-75 mr-4 ml-2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                  />
                </svg>
                <div>
                  <Reveal initS={1} initX={50} duration={1}>
                    <h3 className="font-bold">{education.title}</h3>
                  </Reveal>
                  <Reveal initS={1} initX={50} dly={1} duration={1}>
                    <h5 className="font-semibold mb-2">
                      {education.school}{' '}
                      <span className="font-normal">| {education.date}</span>
                    </h5>
                  </Reveal>
                  <Reveal initS={1} initY={50} dly={1.5} duration={1}>
                    <p>{education.description}</p>
                  </Reveal>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
