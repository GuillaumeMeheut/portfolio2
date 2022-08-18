type ImgsDetail = {
  src: string
  alt: string
  caption: string
}

export type ProjectProps = {
  id: number
  viewColor: string
  title: string
  imgIntro: string
  imgHeader: string
  linkWebsite?: string
  linkGithub?: string
  stacks: string[]
  intro: string
  imgs: ImgsDetail[]
}
