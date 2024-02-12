import { ProjectProps } from 'utils/types'

export const data: ProjectProps[] = [
  {
    id: 1,
    viewColor: 'white',
    title: 'Doublecard',
    imgIntro: '/assets/doublecard0.png',
    imgHeader: '/assets/doublecard_header.jpg',
    linkWebsite: 'https://doublecard.vercel.app/',
    linkGithub: 'https://github.com/GuillaumeMeheut/doublecard',
    stacks: ['NextJs', 'Firebase', 'Typescript', 'Chakra UI', 'Framer Motion'],
    intro: 'doublecard_intro',
    imgs: [
      {
        src: '/assets/doublecard_login.png',
        alt: '',
        caption: 'doublecard_caption_login_page',
      },
      {
        src: '/assets/doublecard_login.png',
        alt: '',
        caption: 'doublecard_caption_login_page',
      },
      {
        src: '/assets/doublecard_login.png',
        alt: '',
        caption: 'doublecard_caption_login_page',
      },
    ],
  },
  {
    id: 2,
    viewColor: 'black',
    title: 'Scorpulting',
    imgIntro: '/assets/doublecard0.png',
    imgHeader: '/assets/doublecard0.png',
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
        src: '/assets/doublecard_login.png',
        alt: '',
        caption: 'doublecard_caption_login_page',
      },
    ],
  },
]
