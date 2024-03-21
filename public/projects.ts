import { ProjectProps } from 'utils/types'

export const data: ProjectProps[] = [
  {
    id: 1,
    title: 'Doublecard',
    imgIntro: '/assets/doublecard0.png',
    smallIntro: 'doublecard_small_intro',
    type: 'perso',
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
        src: '/assets/doublecard_create_lobby',
        alt: '',
        caption: 'doublecard_caption_login_page',
      },
      {
        src: '/assets/doublecard_ingame.png',
        alt: '',
        caption: 'doublecard_caption_ingame',
      },
    ],
  },
  {
    id: 2,
    title: 'FrakTree',
    imgIntro: '/assets/tree_website.png',
    smallIntro: 'fraktree_small_intro',
    type: 'perso',
    imgHeader: '/assets/trees.png',
    linkWebsite: '',
    linkGithub: 'https://github.com/GuillaumeMeheut/fraktalTree',
    stacks: ['Javascript', 'NodeJS', 'Moralis'],
    intro: 'fraktree_intro',
    imgs: [
      {
        src: '/assets/tree_generation.png',
        alt: '',
        caption: 'fraktree_caption_generation',
      },
      {
        src: '/assets/tree_website.png',
        alt: '',
        caption: 'fraktree_caption_website',
      },
    ],
  },
]
