import Container from './Container'

import SectionTitles from './SectionTitles'
import EduContent from './EduContent'

const educationDate = [
  {
    title: 'Certification - Harvard CS50',
    school: 'Harvard online EDX',
    date: '2024',
    description:
      'Online course on computer science and programming: C, Python, SQL, JavaScript, Algorithms, Security, Data Structure, Memory',
    image: '/images/education/cs50.pdf',
  },
  {
    title: 'Certification - Web Development',
    school: 'Le Wagon Brussels',
    date: '2023',
    description:
      'Full-Time Coding bootcamp learning: HTML / CSS / JavaScript / Bootstrap / Figma, Ruby / PostgreSQL / Git / Command line / GitHub,Ruby on Rails / Heroku',
    image: '/images/education/le_wagon.pdf',
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
        <Container>
          <SectionTitles
            back_title={'Education'}
            front_title={'My Education'}
          />

          <div className="xl:columns-2">
            <div className="text-dark xl:border-0 border-l border-secondary">
              {educationDate.map((education, index) => (
                <div key={index}>
                  <EduContent education={education} />
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
