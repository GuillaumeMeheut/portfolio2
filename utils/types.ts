type ImgsDetail = {
  src: string
  alt: string
  caption: string
}

export type ProjectProps = {
  id: number
  title: string
  imgIntro: string
  smallIntro: string
  type: 'perso' | 'professional'
  imgHeader: string
  linkWebsite?: string
  linkGithub?: string
  stacks: string[]
  intro: string
  imgs: ImgsDetail[]
}
