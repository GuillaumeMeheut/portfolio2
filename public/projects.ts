import { ProjectProps } from 'utils/types'

export const data: ProjectProps[] = [
  {
    id: 1,
    title: 'Doublecard',
    imgIntro: '/assets/doublecard0.png',
    smallIntro: 'doublecard_small_intro',
    type: 'perso',
    imgHeader: '/assets/doublecard_header.svg',
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
        src: '/assets/doublecard_create_lobby.png',
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
    imgIntro: '/assets/tree_intro.jpg',
    smallIntro: 'fraktree_small_intro',
    type: 'perso',
    imgHeader: '/assets/trees.png',
    linkWebsite: '',
    linkGithub: 'https://github.com/GuillaumeMeheut/fraktalTree',
    stacks: ['Javascript', 'NodeJS', 'Moralis'],
    intro: 'fraktree_intro',
    imgs: [
      {
        src: '/assets/tree_generation.jpg',
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
  {
    id: 3,
    title: 'Audio Visualizer',
    imgIntro: '/assets/audio_visualizer_intro.png',
    smallIntro: 'audio_small_intro',
    type: 'perso',
    imgHeader: '/assets/audio_visualizer_header.png',
    linkWebsite: 'https://audio-visualizer-night-visions-nextjs.vercel.app/',
    linkGithub:
      'https://github.com/GuillaumeMeheut/audio-visualizer-night-visions-nextjs',
    stacks: ['Javascript', 'NextJs'],
    intro: 'audio_intro',
    imgs: [
      {
        src: '/assets/audio_visualizer_intro.png',
        alt: '',
        caption: '',
      },
      {
        src: '/assets/audio_visualizer_header.png',
        alt: '',
        caption: '',
      },
    ],
  },
]
