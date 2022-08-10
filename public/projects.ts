import { ProjectProps } from 'utils/types'
import DoublecardIntroImg from './assets/doublecard0.png'

export const data: ProjectProps[] = [
  {
    id: 1,
    viewColor: 'white',
    title: 'Doublecard',
    imgIntro: DoublecardIntroImg,
    linkWebsite: 'https://doublecard.vercel.app/',
    linkGithub: 'https://github.com/GuillaumeMeheut/doublecard',
    stacks: ['NextJs', 'Firebase', 'Typescript', 'Chakra UI', 'Framer Motion'],
    intro: 'doublecard_intro',
    imgs: [
      {
        img: '/assets/doublecard_login.png',
        caption: 'doublecard_caption_login_page',
        desc: 'doublecard_desc_login_page',
      },
    ],
  },
  {
    id: 2,
    viewColor: 'black',
    title: 'Scorpulting',
    imgIntro: DoublecardIntroImg,
    linkWebsite: 'https://doublecard.vercel.app/',
    stacks: [
      'NextJs',
      'Strapi',
      'Graphql',
      'Typescript',
      'Chakra UI',
      'Framer Motion',
    ],
    intro: 'doublecard_intro',
    imgs: [
      {
        img: '/assets/doublecard_login.png',
        caption: 'doublecard_caption_login_page',
        desc: 'doublecard_desc_login_page',
      },
    ],
  },
]
