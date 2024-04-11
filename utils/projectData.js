import { basePath } from '@/next.config'

export const projects = [
  {
    title: 'Plailister',
    job: 'Full Stack Developer',
    description:
      "Plailister is a SAAS for a music label 'Place Called Home'. I worked hand-in-hand with the data engineers. This SAAS displays Spotify's data and predict how their playlists, songs, campaigns might work. \nPlailister was developed using Next.JS, deployed on Vercel. MUI was used to build the components. \nA requested feature was to implement a dark & light mode. The main challenge of this project was performance: the team had many complicated algorithms to analyze their heavy data, if needed to be user-friendly, and fast, managing the data in the best way possible was everyday's task, and the team is happy with it.",
    tools: [
      'Next.JS',
      'React.JS',
      'Firebase',
      'MUI',
      'Vercel',
      'SAAS',
      'Rest API',
      'Apex Charts',
    ],
    link: '',
    caroussel: [
      `${basePath}/images/plailister/home.png`,
      `${basePath}/images/plailister/homedark.png`,
      `${basePath}/images/plailister/search.png`,
      `${basePath}/images/plailister/playlist.png`,
      `${basePath}/images/plailister/takeover.png`,
      `${basePath}/images/plailister/health.png`,
      `${basePath}/images/plailister/grid.png`,
      `${basePath}/images/plailister/carou.png`,
      `${basePath}/images/plailister/follow.png`,
    ],
  },
  {
    title: 'Cosy Jet Sessions',
    job: 'Full Stack Developer',
    description:
      'I am a co-founder of @cosyjetsessions, a digital music plateform. I am currently building a B2B webiste, a vitrine page, to display our content. I work on it in my spare time. I use this project to learn new technologies such as 3D, animations, various styling techniques. I used many different APIs (from google, youtube, spotify,...). \nCosy Jet Sessions is developed using Next.JS, a Postgresql database, and deployed on Vercel.',
    tools: [
      'Next.JS',
      'React.JS',
      'SASS',
      'Tailwind',
      'Framer Motion',
      'Postgresql',
      'Primsa',
      'Rest API',
    ],
    link: 'https://www.cosyjetsessions.com',
    caroussel: [
      // `${basePath}/images/cjs/website/home.png`,
      // `${basePath}/images/cjs/website/discover.png`,
      // `${basePath}/images/cjs/cjs-banner.png`,
    ],
  },
  // {
  //   title: 'Foodie Planner V2',
  //   job: 'Full Stack Developer',
  //   description:
  //     'Foodie Planner was a website we developed during my web development certification. The website lets the user browse through recipes, plan meals in his calendar, and generate a grocery list. \nNow I am rebuilding the smae concept of website, but with new technologies to keep learning new ways to work. Foodie Planner is developed using Next.JS 14 framework, uses MongoDB for database management, and is deployed to Netlify',
  //   tools: [
  //     'Next.JS',
  //     'React.JS',
  //     'SASS',
  //     'Tailwind',
  //     'Framer Motion',
  //     'MongoDB',
  //     'Netlify',
  //     'Rest API',
  //   ],
  //   link: '',
  //   caroussel: [`${basePath}/images/foodie.png`],
  // },
  {
    title: 'This Portfolio',
    job: 'Frontend Developer',
    description:
      'My portfolio was at first really simple, straightforward. The portfolio project was my playground to work on new technologies that I had just learnt. Also, It allows me to have a bit of fun while trying to do some effects. I built it first with simple Vanilla Javascript, then moved on to a Next.JS application, using Tailwind & SCSS for design, and Framer-Motion for animations. I deployed it to Github Pages, using Github Actions.',
    tools: [
      'Next.JS',
      'React.JS',
      'SASS',
      'Tailwind',
      'Framer Motion',
      'Github Pages',
    ],
    link: '',
    caroussel: [],
  },
  {
    title: 'Foodie Planner',
    job: 'Full Stack Developer',
    description:
      "Foodie Planner is a website we developed during the last two weeks of the bootcamp. Its purpose is to let the user get inspired with recipes, plan meals in his calendar, and generate a grocery list. \nFoodie Planner was developed using the 'Ruby on Rails' framework, and  then deployed to production through Heroku. \nDuring this project I learnt a lot about team work, efficient organization amd management of skills result in good results, after two weeks we were proud of all we had done in that short time, even though we wished we could have had time to add many more features. \nIn my spare time, I went back to this projects and I am rebuildinb it using Javascript only.",
    tools: [
      'Ruby on Rails',
      'Javascript',
      'SASS',
      'Bootstrap',
      'Heroku',
      'Postgresql',
      'Rest API',
    ],
    link: '',
    caroussel: [],
  },
]
