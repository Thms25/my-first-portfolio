import SubProject from "./SubProject";

const projects = [
  {
    title: "Plailister",
    job: "Frontend Developer",
    description: "Plailister is a dashboard type of website I developed for a music label 'Place Called Home'. The label developed data analytics tools to manage their playlists, artists, marketing campaings, and many more. \nPlailister was developed using React in Next.JS, deployed on Vercel. MUI was used to build the components.",
    tools: ["Next.JS", "React.JS", "MUI", "Vercel", "Rest API"],
    link: "#"
  },
  {
    title: "Foodie Planner V2",
    job: "Full Stack Developer",
    description: "Foodie Planner was a website we developed during my web development certification. The website lets the user browse through recipes, plan meals in his calendar, and generate a grocery list. \nNow I am rebuilding the smae concept of website, but with new technologies to keep learning new ways to work. Foodie Planner is developed using Next.JS 14 framework, uses MongoDB for databses, and is deployed to Netlify",
    tools: ["Next.JS", "React.JS", "SASS", "Tailwind", "Framer Motion", "MongoDB", "Netlify", "Rest API"],
    link: "#"
  },
  {
    title: "Cosy Jet Sessions",
    job: "Full Stack Developer",
    description: "I am a co-founder of @cosyjetsessions, a digital muscal media. I am currently buikding a music / vidéo plateform to display our content. \nCosy Jet Sessions was developed with React in Next.JS, deployed on Vercel.",
    tools: ["Next.JS", "React.JS", "SASS", "Tailwind", "Framer Motion", "Postgresql", "Primsa", "Rest API"],
    link: "https://www.cosyjetsessions.com"
  },
  {
    title: "Foodie Planner V1",
    job: "Full Stack Developer",
    description: "Foodie Planner is a website we developed during the last two weeks of the bootcamp. Its purpose is to let the user get inspired with recipes, plan meals in his calendar, and generate a grocery list. \nFoodie Planner was developed using the 'Ruby on Rails' framework, and  then pushed to production using Heroku.",
    tools: ["Ruby on Rails", "Javascript", "SASS", "Bootstrap", "Heroku", "Postgresql", "Rest API"],
    link: "https://www.foodieplanner.me"
  },
  {
    title: "Cosy Jet Sessions",
    job: "Sound Engineer",
    description: "I am a co-founder of @cosyjetsessions, a digital muscal media hosting artists for acoustic live sessions. I work as project manager, recording engineer and mixing engineer.",
    tools: ["Mixing", "Recording", "Producing", "Mastering"],
    link: "https://www.youtube.com/@cosyjetsessions"
  },
]

export default function Projects () {
  return (
    <div className="text-dark p-20 bg-light">
      <div className='text-center m-auto grid place-items-center relative mb-12'>
        <h1 className='uppercase text-6xl md:text-8xl text-white font-semibold'>Projects</h1>
        <h2 className='absolute text-dark font-bold text-xl md:text-2xl uppercase'>My Projects</h2>
      </div>
      <div className="xl:columns-2 text-center">
      {
        projects.map((project) => (
          <SubProject project={project} />
        ))
      }
      </div>
    </div>
  );
  // return (
  //   <div className="text-dark p-20 bg-light">
  //     <div className='text-center m-auto grid place-items-center relative mb-12'>
  //       <h1 className='uppercase text-6xl md:text-8xl text-white font-semibold'>Projects</h1>
  //       <h2 className='absolute text-dark font-bold text-xl md:text-2xl uppercase'>My Projects</h2>
  //     </div>
  //     <div className="xl:columns-2 text-center">
  //       <div className="p-6">
  //         <div>
  //           <h3 className="font-semibold text-xl text-primary mb-4">
  //             Plailister<span> | Frontend Developer</span>
  //           </h3>
  //           <p>
  //             Plailister is a dashboard type of website I developed for a music label "Place Called Home". The label developed data analytics tools to manage their playlists, artists, marketing campaings, and many more.
  //             <br />
  //             Plailister was developed using React in Next.JS, deployed on Vercel. MUI was used to build the components.
  //           </p>
  //         </div>
  //         <div className="mt-8">
  //           <Link href="" target="_blank" className="btnTwo">
  //             Preview Plailister
  //           </Link>
  //         </div>
  //       </div>
  //       <div className="p-6">
  //         <div>
  //           <h3 className="font-semibold text-xl text-primary mb-4">
  //             Foodie Planner<span> | Full Stack Developer</span>
  //           </h3>
  //           <p>
  //             Foodie Planner is a website we developed during the last two weeks of the bootcamp. Its purpose is to let the user get inspired with recipes, plan meals in his calendar, and generate a grocery list.
  //             <br />
  //             Foodie Planner was developed using the 'Ruby on Rails' framework, and  then pushed to production using Heroku.
  //           </p>
  //         </div>
  //         <div className="mt-8">
  //           <Link href="https://www.foodieplanner.me/" target="_blank" className="btnTwo">
  //             Visit Foodie Planner
  //           </Link>
  //         </div>
  //       </div>
  //       <div className="p-6">
  //         <div>
  //           <h3 className="font-semibold text-xl mb-4 text-primary">
  //             Cosy Jet Sessions<span> | Fulk Stack Developer</span>
  //           </h3>
  //           <p>
  //             I am a co-founder of @cosyjetsessions, a digital muscal media. I am currently buikding a music / vidéo plateform to display our content.
  //             <br />
  //             Cosy Jet Sessions was developed with React in Next.JS, deployed on Vercel. <br />Tools used: Postgresql, Primsa, Tailwind, Framer-Motion, SCSS,...
  //           </p>
  //         </div>
  //         <div className="mt-8">
  //           <Link href="https://www.cosyjetsessions.com" target="_blank" className="btnTwo">
  //             Visit Cosy Jet Sessions
  //           </Link>
  //         </div>
  //       </div>
  //       <div className="p-6">
  //         <div>
  //           <h3 className="font-semibold text-xl mb-4 text-primary">
  //             Cosy Jet Sessions<span> | Sound Engineer</span>
  //           </h3>
  //           <p>
  //             I am a co-founder of @cosyjetsessions, a digital muscal media hosting artists for acoustic live sessions. I work as project manager, recording engineer and mixing engineer.
  //             <br />
  //             Foodie Planner was developed using the 'Ruby on Rails' framework, and  then pushed to production using Heroku.
  //           </p>
  //         </div>
  //         <div className="mt-8">
  //           <Link href="https://www.youtube.com/@cosyjetsessions" target="_blank" className="btnTwo">
  //             Visit Cosy Jet Sessions
  //           </Link>
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // );
}
