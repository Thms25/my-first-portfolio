'use client';

import SubProject from "./SubProject";
import { basePath } from "@/next.config";

const projects = [
  {
    title: "Plailister",
    job: "Frontend Developer",
    description: "Plailister is a dashboard type of website I developed for a music label 'Place Called Home'. The label developed data analytics tools to manage their playlists, artists, marketing campaings, and many more. \nPlailister was developed using React in Next.JS, deployed on Vercel. MUI was used to build the components.",
    tools: ["Next.JS", "React.JS", "MUI", "Vercel", "Rest API"],
    link: "",
    caroussel: [
      `${basePath}/images/Plailister/Pl_carou.png`,
      `${basePath}/images/Plailister/pl_followers.png`,
      `${basePath}/images/Plailister/Pl_grid.png`,
      `${basePath}/images/Plailister/pl_health.png`,
    ]
  },
  {
    title: "Foodie Planner V2",
    job: "Full Stack Developer",
    description: "Foodie Planner was a website we developed during my web development certification. The website lets the user browse through recipes, plan meals in his calendar, and generate a grocery list. \nNow I am rebuilding the smae concept of website, but with new technologies to keep learning new ways to work. Foodie Planner is developed using Next.JS 14 framework, uses MongoDB for databses, and is deployed to Netlify",
    tools: ["Next.JS", "React.JS", "SASS", "Tailwind", "Framer Motion", "MongoDB", "Netlify", "Rest API"],
    link: "",
    caroussel: [
      `${basePath}/images/foodie.png`,
    ]
  },
  {
    title: "Cosy Jet Sessions",
    job: "Full Stack Developer",
    description: "I am a co-founder of @cosyjetsessions, a digital muscal media. I am currently buikding a music / vidéo plateform to display our content. \nCosy Jet Sessions was developed with React in Next.JS, deployed on Vercel.",
    tools: ["Next.JS", "React.JS", "SASS", "Tailwind", "Framer Motion", "Postgresql", "Primsa", "Rest API"],
    link: "https://www.cosyjetsessions.com",
    caroussel: [
      `${basePath}/images/cjs/website/home.png`,
      `${basePath}/images/cjs/website/discover.png`,
      `${basePath}/images/cjs/cjs-banner.png`,
    ]
  },
  {
    title: "Foodie Planner V1",
    job: "Full Stack Developer",
    description: "Foodie Planner is a website we developed during the last two weeks of the bootcamp. Its purpose is to let the user get inspired with recipes, plan meals in his calendar, and generate a grocery list. \nFoodie Planner was developed using the 'Ruby on Rails' framework, and  then pushed to production using Heroku.",
    tools: ["Ruby on Rails", "Javascript", "SASS", "Bootstrap", "Heroku", "Postgresql", "Rest API"],
    link: "https://www.foodieplanner.me",
    caroussel: [
      `${basePath}/images/foodie.png`,
    ]
  },
  {
    title: "Cosy Jet Sessions",
    job: "Sound Engineer",
    description: "I am a co-founder of @cosyjetsessions, a digital muscal media hosting artists for acoustic live sessions. I work as project manager, recording engineer and mixing engineer.",
    tools: ["Mixing", "Recording", "Producing", "Mastering"],
    link: "https://www.youtube.com/@cosyjetsessions",
    caroussel: [
      `${basePath}/images/cjs/cjs-banner.png`,
      `${basePath}/images/cjs/decor.png`,
      `${basePath}/images/cjs/lights.png`,
      `${basePath}/images/cjs/synth.png`,

    ]
  },
]

export default function Projects () {
  return (
    <div className="text-dark p-20 bg-light">
      <div className='text-center m-auto grid place-items-center relative mb-12'>
        <h1 className='uppercase text-6xl md:text-8xl text-white font-semibold'>Projects</h1>
        <h2 className='absolute text-dark font-bold text-xl md:text-2xl uppercase'>My Projects</h2>
      </div>
      <div className="text-center">
        {
          projects.map((project, index) => (
            <SubProject project={project} key={index} />
          ))
        }
      </div>
    </div>
  );
}
