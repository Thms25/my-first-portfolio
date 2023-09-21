'use client';

import { Progress } from "@material-tailwind/react";
import styles from '/styles/skills.module.scss'


const Skills = () => {
  return (
    <section className='bg-light p-20'>
      <div className='text-center m-auto grid place-items-center relative mb-12'>
        <h1 className='uppercase text-8xl text-white font-semibold'>Skiils</h1>
        <h2 className='absolute text-dark font-bold text-2xl uppercase'>My Skills</h2>
      </div>
      <div className="p-3 md:columns-2 2xl:columns-3">
        <div className="p-3">
          <h3 className="text-lg text-dark">Javascript</h3>
          <div className="flex w-full flex-col gap-4">
            <Progress value={65} className={styles.progressBar} size="lg" />
          </div>
        </div>
        <div className="p-3">
          <h3 className="text-lg text-dark">React JS</h3>
          <div className="flex w-full flex-col gap-4">
            <Progress value={50} className={styles.progressBar} size="lg" />
          </div>
        </div>
        <div className="p-3">
          <h3 className="text-lg text-dark">Next JS</h3>
          <div className="flex w-full flex-col gap-4">
            <Progress value={60} className={styles.progressBar} size="lg" />
          </div>
        </div>
        <div className="p-3">
          <h3 className="text-lg text-dark">React Native</h3>
          <div className="flex w-full flex-col gap-4">
            <Progress value={15} className={styles.progressBar} size="lg" />
          </div>
        </div>
        <div className="p-3">
          <h3 className="text-lg text-dark">Ruby</h3>
          <div className="flex w-full flex-col gap-4">
            <Progress value={80} className={styles.progressBar} size="lg" />
          </div>
        </div>
        <div className="p-3">
          <h3 className="text-lg text-dark">Ruby on Rails</h3>
          <div className="flex w-full flex-col gap-4">
            <Progress value={70} className={styles.progressBar} size="lg" />
          </div>
        </div>
        <div className="p-3">
          <h3 className="text-lg text-dark">Rest API</h3>
          <div className="flex w-full flex-col gap-4">
            <Progress value={70} className={styles.progressBar} size="lg" />
          </div>
        </div>
        <div className="p-3">
          <h3 className="text-lg text-dark">Html & CSS</h3>
          <div className="flex w-full flex-col gap-4">
            <Progress value={80} className={styles.progressBar} size="lg" />
          </div>
        </div>
        <div className="p-3">
          <h3 className="text-lg text-dark">Tailwind</h3>
          <div className="flex w-full flex-col gap-4">
            <Progress value={70} className={styles.progressBar} size="lg" />
          </div>
        </div>
        <div className="p-3">
          <h3 className="text-lg text-dark">Framer Motion</h3>
          <div className="flex w-full flex-col gap-4">
            <Progress value={60} className={styles.progressBar} size="lg" />
          </div>
        </div>
        <div className="p-3">
          <h3 className="text-lg text-dark">PostgreSql</h3>
          <div className="flex w-full flex-col gap-4">
            <Progress value={80} className={styles.progressBar} size="lg" />
          </div>
        </div>
        <div className="p-3">
          <h3 className="text-lg text-dark">Git - Github</h3>
          <div className="flex w-full flex-col gap-4">
            <Progress value={80} className={styles.progressBar} size="lg" />
          </div>
        </div>
        {/* <div className="p-3">
          <h3 className="text-lg text-dark">Heroku</h3>
          <div className="flex w-full flex-col gap-4">
            <Progress value={70} className={styles.progressBar} size="lg" />
          </div>
        </div> */}

      </div>
    </section>
  );
}

export default Skills;
