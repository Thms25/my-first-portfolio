import Link from "next/link";


export default function Project () {
  return (
    <div className="text-dark p-20 bg-light">
      <div className='text-center m-auto grid place-items-center relative mb-12'>
        <h1 className='uppercase text-6xl md:text-8xl text-white font-semibold'>Projects</h1>
        <h2 className='absolute text-dark font-bold text-xl md:text-2xl uppercase'>My Projects</h2>
      </div>
      <div className="xl:columns-2 text-center">
        <div className="p-6">
          <div>
            <h3 className="font-semibold text-xl text-primary mb-4">
              Foodie Planner<span> | Full Stack Developer</span>
            </h3>
            <p>
              Foodie Planner is a website we developed during the last two weeks of the bootcamp. Its purpose is to let the user get inspired with recipes, plan meals in his calendar, and generate a grocery list.
              <br />
              Foodie Planner was developed using the 'Ruby on Rails' framework, and  then pushed to production using Heroku.
            </p>
          </div>
          <div className="mt-8">
            <Link href="https://www.foodieplanner.me/" target="_blank" className="btnTwo">
              Visit Foodie Planner
            </Link>
          </div>
        </div>
        <div className="p-6">
          <div>
            <h3 className="font-semibold text-xl mb-4 text-primary">
              Cosy Jet Sessions<span> | Sound Engineer</span>
            </h3>
            <p>
              I am a co-founder of @cosyjetsessions, a digital muscal media hosting artists for acoustic live sessions. I work as project manager, recording engineer and mixing engineer.
              <br />
              Foodie Planner was developed using the 'Ruby on Rails' framework, and  then pushed to production using Heroku.
            </p>
          </div>
          <div className="mt-8">
            <Link href="https://www.youtube.com/@cosyjetsessions" target="_blank" className="btnTwo">
              Visit Cosy Jet Sessions
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
