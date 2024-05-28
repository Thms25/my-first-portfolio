'use client'

import { Progress } from '@material-tailwind/react'
import styles from '/styles/skills.module.scss'
import { Reveal } from './Reveal'
import SectionTitles from './SectionTitles'

const skillsData = [
  {
    name: 'Javascript',
    value: 65,
  },
  {
    name: 'React JS',
    value: 70,
  },
  {
    name: 'Next JS',
    value: 70,
  },
  {
    name: 'React Native',
    value: 15,
  },
  {
    name: 'Ruby on Rails',
    value: 70,
  },
  {
    name: 'Rest API',
    value: 70,
  },
  {
    name: 'Html & CSS',
    value: 80,
  },
  {
    name: 'Tailwind',
    value: 90,
  },
  {
    name: 'MUI',
    value: 85,
  },
  {
    name: 'Framer Motion',
    value: 70,
  },
  {
    name: 'PostgreSql',
    value: 80,
  },
  {
    name: 'Github',
    value: 80,
  },
]

export default function Skills() {
  return (
    <section className="bg-light p-8 md:p-20">
      <SectionTitles back_title={'Skills'} front_title={'My Skills'} />
      <div className="p-3 md:columns-2 2xl:columns-3">
        {skillsData.map((skill, index) => (
          <div key={index} className="p-3">
            <h3 className="text-lg text-dark">{skill.name}</h3>
            <div className="flex w-full flex-col gap-4">
              <Reveal duration={1.5} initX={-100} initS={1}>
                <Progress
                  value={skill.value}
                  className={styles.progressBar}
                  size="lg"
                />
              </Reveal>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
